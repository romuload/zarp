import americaFlag  from '../assets/icons/America.svg'
import brazilFlag   from '../assets/icons/Brazil.svg'
import argentinaFlag from '../assets/icons/Argentina.svg'
import japanFlag    from '../assets/icons/Japan.svg'
import spanishFlag  from '../assets/icons/Spanish.svg'

export const CURRENCIES = [
  { code: 'USD', name: 'Dólar (USD)',          country: 'Estados Unidos', flag: americaFlag,   symbol: '$',   rate: 0.1996, feeRate: 0.0016 },
  { code: 'BRL', name: 'Real (BRL)',            country: 'Brasil',         flag: brazilFlag,    symbol: 'R$',  rate: 1,      feeRate: 0      },
  { code: 'ARS', name: 'Peso argentino (ARS)', country: 'Argentina',      flag: argentinaFlag, symbol: 'AR$', rate: 196.5,  feeRate: 0.0016 },
  { code: 'JPY', name: 'Iene (¥)',             country: 'Japão',          flag: japanFlag,     symbol: '¥',   rate: 29.4,   feeRate: 0.0016 },
  { code: 'EUR', name: 'Euro (€)',             country: 'Espanha',        flag: spanishFlag,   symbol: '€',   rate: 0.1834, feeRate: 0.0016 },
  { code: 'CAD', name: 'Dólar (CAD)',          country: 'Canadá',         flag: null,          symbol: 'C$',  rate: 0.2712, feeRate: 0.0016 },
  { code: 'CNY', name: 'Yuan (CNY)',           country: 'China',          flag: null,          symbol: '¥',   rate: 1.4470, feeRate: 0.0016 },
  { code: 'GBP', name: 'Libra (GBP)',          country: 'Reino Unido',    flag: null,          symbol: '£',   rate: 0.1567, feeRate: 0.0016 },
  { code: 'CHF', name: 'Franco (CHF)',         country: 'Suíça',          flag: null,          symbol: 'Fr',  rate: 0.1789, feeRate: 0.0016 },
  { code: 'MXN', name: 'Peso (MXN)',           country: 'México',         flag: null,          symbol: 'MX$', rate: 3.4210, feeRate: 0.0016 },
]

export const CURRENCY_MAP = Object.fromEntries(CURRENCIES.map(c => [c.code, c]))

export const BRL = CURRENCY_MAP['BRL']

export function calcConversion(amountBRL, targetCode) {
  const target = CURRENCY_MAP[targetCode]
  if (!target) return { gross: 0, fee: 0, net: 0 }
  const gross = amountBRL * target.rate
  const fee   = Math.max(gross * target.feeRate, 0.01)
  const net   = Math.max(gross - fee, 0)
  return { gross, fee, net }
}

export function fmtBRL(n) {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)
}

export function fmtForeign(n, decimals = 2) {
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(n)
}
