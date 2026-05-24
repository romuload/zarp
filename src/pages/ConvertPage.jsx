import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BottomNav from '../components/layout/BottomNav'
import CurrencySheet from '../components/ui/CurrencySheet'
import SuccessSheet from '../components/ui/SuccessSheet'
import brazilFlag from '../assets/icons/Brazil.svg'
import {
  CURRENCY_MAP, calcConversion, fmtBRL, fmtForeign
} from '../data/currencies'
import './ConvertPage.css'

const DEFAULT_CODE = 'USD'

function generateRef() {
  return Math.random().toString().slice(2, 13).padEnd(11, '0')
}

export default function ConvertPage() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const initialCode = state?.currency?.code || DEFAULT_CODE
  const [targetCode, setTargetCode]       = useState(initialCode)
  const [rawAmount, setRawAmount]         = useState('')
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const [successDetails, setSuccessDetails] = useState(null)
  const [isSuccessOpen, setIsSuccessOpen]   = useState(false)
  const [brlBalance]                        = useState(state?.brlBalance ?? 20000)

  const target    = CURRENCY_MAP[targetCode]
  const amountNum = parseFloat(rawAmount.replace(/\./g, '').replace(',', '.')) || 0
  const { net, fee } = calcConversion(amountNum, targetCode)

  const rateLabel = `1,00 R$ = ${fmtForeign(target.rate, 4)} ${target.symbol}`
  const feeLabel  = `${fmtForeign(fee, 2)} ${targetCode} Taxa`
  const canConvert = amountNum > 0 && amountNum <= brlBalance

  function handleAmountChange(e) {
    const digits = e.target.value.replace(/\D/g, '')
    if (digits === '') { setRawAmount(''); return }
    const num = parseInt(digits, 10) / 100
    setRawAmount(fmtBRL(num))
  }

  function handleConvert() {
    if (!canConvert) return
    setSuccessDetails({
      amountBRL: amountNum,
      net,
      fee,
      currency: target,
      refNumber: generateRef(),
      date: new Date().toLocaleDateString('pt-BR'),
    })
    setIsSuccessOpen(true)
  }

  function handleGoHome() {
    setIsSuccessOpen(false)
    navigate('/home', { state: { deductBRL: amountNum } })
  }

  return (
    <>
      <div className="convert-page">

        {/* ── Top bar ── */}
        <div className="convert-topbar">
          <button className="convert-topbar__back" onClick={() => navigate(-1)} aria-label="Voltar">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="#000d08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="convert-topbar__title">Converter Moeda</h1>
        </div>

        <div className="convert-body">

          {/* ── Quote card ── */}
          <div className="convert-quote">
            <div className="convert-quote__left">
              <div className="convert-quote__icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7.5" stroke="#FF6600" strokeWidth="1.5"/>
                  <path d="M7 10.5C7.5 12.5 12.5 12.5 13 10" stroke="#FF6600" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M13 9.5C12.5 7.5 7.5 7.5 7 10" stroke="#FF6600" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M10 7.5V12.5" stroke="#FF6600" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="convert-quote__info">
                <span className="convert-quote__label">Cotação Hoje</span>
                <span className="convert-quote__rate">{rateLabel}</span>
              </div>
            </div>
            <button className="convert-quote__compare">Comparar</button>
          </div>

          {/* ── Currency boxes ── */}
          <div className="convert-boxes">

            {/* From: BRL */}
            <div className="convert-box">
              <div className="convert-box__amount-col">
                <input
                  className="convert-box__input"
                  type="text"
                  inputMode="numeric"
                  placeholder="R$0,00"
                  value={rawAmount ? `R$${rawAmount}` : ''}
                  onChange={handleAmountChange}
                />
                <span className="convert-box__balance">
                  Saldo: R$ {fmtBRL(brlBalance)}
                </span>
              </div>
              <div className="convert-box__currency">
                <img src={brazilFlag} alt="BRL" className="convert-box__flag" />
                <span className="convert-box__currency-name">Real (BRL)</span>
                <span className="convert-box__arrow" />
              </div>
            </div>

            {/* Swap icon */}
            <div className="convert-swap">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4V16M7 16L4 13M7 16L10 13" stroke="#33403b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 16V4M13 4L10 7M13 4L16 7" stroke="#33403b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* To: target */}
            <button
              className="convert-box convert-box--target"
              onClick={() => setIsCurrencyOpen(true)}
            >
              <div className="convert-box__amount-col">
                <span className="convert-box__converted">
                  {amountNum > 0 ? `${target.symbol}${fmtForeign(net)}` : `${target.symbol}0,00`}
                </span>
                <span className="convert-box__balance">
                  Saldo: R$ {fmtBRL(brlBalance)}
                </span>
              </div>
              <div className="convert-box__currency">
                {target.flag ? (
                  <img src={target.flag} alt={targetCode} className="convert-box__flag" />
                ) : (
                  <div className="convert-box__flag-ph">{targetCode.slice(0, 2)}</div>
                )}
                <span className="convert-box__currency-name">{target.name}</span>
                <span className="convert-box__arrow" />
              </div>
            </button>

          </div>

          {/* ── Info row ── */}
          <div className="convert-info">
            <div className="convert-info__item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="#FF6600" strokeWidth="1.2"/>
                <path d="M8 5V8.5" stroke="#FF6600" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="8" cy="11" r="0.6" fill="#FF6600"/>
              </svg>
              <span>Conversão instantânea</span>
            </div>
            <div className="convert-info__item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#33403b" strokeWidth="1.2"/>
                <path d="M2 7H14" stroke="#33403b" strokeWidth="1.2"/>
                <circle cx="5" cy="10" r="1" fill="#33403b"/>
              </svg>
              <span>{feeLabel}</span>
            </div>
          </div>

          {/* ── Converter button ── */}
          <button
            className={`convert-btn${canConvert ? '' : ' convert-btn--disabled'}`}
            onClick={handleConvert}
            disabled={!canConvert}
          >
            Converter
          </button>

        </div>

        <div className="convert-nav-spacer" />
      </div>

      <BottomNav activeTab="home" />

      <CurrencySheet
        isOpen={isCurrencyOpen}
        onClose={() => setIsCurrencyOpen(false)}
        onSelect={(c) => {
          setTargetCode(c.code)
          setIsCurrencyOpen(false)
        }}
      />

      <SuccessSheet
        isOpen={isSuccessOpen}
        details={successDetails}
        onClose={() => setIsSuccessOpen(false)}
        onGoHome={handleGoHome}
      />
    </>
  )
}
