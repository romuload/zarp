import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BottomNav from '../components/layout/BottomNav'
import BottomSheet from '../components/ui/BottomSheet'
import CurrencySheet from '../components/ui/CurrencySheet'
import WalletCard from '../components/ui/WalletCard'
import TransactionItem from '../components/ui/TransactionItem'
import avatarUser from '../assets/icons/avatar-user.png'
import bellIcon from '../assets/icons/bell-icon.svg'
import giftIcon from '../assets/icons/gift-icon.svg'
import eyeIcon from '../assets/icons/Eye.svg'
import zarpIcon from '../assets/icons/zarp-icon.svg'
import americaFlag from '../assets/icons/America.svg'
import spanishFlag from '../assets/icons/Spanish.svg'
import argentinaFlag from '../assets/icons/Argentina.svg'
import depositIcon from '../assets/icons/bs-deposit-icon.svg'
import transferIcon from '../assets/icons/transfer-icon.svg'
import receiveIcon from '../assets/icons/receive-icon.svg'
import bsDepositIcon from '../assets/icons/bs-deposit-icon.svg'
import bsTransferIcon from '../assets/icons/bs-transfer-icon.svg'
import bsCurrencyIcon from '../assets/icons/bs-currency-icon.svg'
import bsReceiveIcon from '../assets/icons/bs-receive-icon.svg'
import txAvatarNu from '../assets/icons/tx-avatar-nu.png'
import txCreditIcon from '../assets/icons/tx-credit-icon.svg'
import txDebitIcon from '../assets/icons/tx-debit-icon.svg'
import { fmtBRL } from '../data/currencies'
import './HomePage.css'

const WALLET_CARDS = [
  { flag: americaFlag,   currency: 'USD', balance: 'US$ 1.200,00', account: '••4231' },
  { flag: spanishFlag,   currency: 'EUR', balance: '€ 850,00',     account: '••7819' },
  { flag: argentinaFlag, currency: 'ARS', balance: 'AR$ 45.000',   account: '••2045' },
]

const TRANSACTIONS = [
  { avatar: txAvatarNu,  type: 'credit', title: 'Nubank',          date: 'Hoje',    amount: '+ R$ 1.200,00' },
  { icon: txDebitIcon,   type: 'debit',  title: 'Netflix',          date: 'Ontem',   amount: '- R$ 55,90'    },
  { icon: txCreditIcon,  type: 'credit', title: 'Transferência',    date: '22 mai',  amount: '+ R$ 300,00'   },
  { icon: txDebitIcon,   type: 'debit',  title: 'Spotify',          date: '21 mai',  amount: '- R$ 21,90'    },
  { icon: txDebitIcon,   type: 'debit',  title: 'iFood',            date: '20 mai',  amount: '- R$ 87,50'    },
  { avatar: txAvatarNu,  type: 'credit', title: 'Nubank',           date: '19 mai',  amount: '+ R$ 500,00'   },
  { icon: txDebitIcon,   type: 'debit',  title: 'Uber',             date: '18 mai',  amount: '- R$ 34,20'    },
  { icon: txCreditIcon,  type: 'credit', title: 'Pix recebido',     date: '17 mai',  amount: '+ R$ 200,00'   },
  { icon: txDebitIcon,   type: 'debit',  title: 'Mercado Livre',    date: '16 mai',  amount: '- R$ 149,90'   },
]

const BS_ITEMS = [
  { icon: bsDepositIcon,  label: 'Depósito',             bg: '#12b272' },
  { icon: bsTransferIcon, label: 'Transferir',            bg: '#ff6600' },
  { icon: bsCurrencyIcon, label: 'Adicionar nova moeda',  bg: '#e85858' },
  { icon: bsReceiveIcon,  label: 'Receber',               bg: '#ffb24d' },
]

export default function HomePage() {
  const navigate  = useNavigate()
  const location  = useLocation()

  const [brlBalance, setBrlBalance] = useState(20000)
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState('home')
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)

  useEffect(() => {
    if (location.state?.deductBRL) {
      setBrlBalance(prev => Math.max(0, prev - location.state.deductBRL))
      window.history.replaceState({}, '')
    }
  }, [])

  return (
    <>
      <div className="home-page">

        {/* ── Header ── */}
        <header className="home-header">
          <div className="home-header__top">
            <div className="home-header__user">
              <img src={avatarUser} alt="Fernanda" className="home-header__avatar" />
              <div className="home-header__greeting">
                <span className="home-header__welcome">Seja bem vinda</span>
                <span className="home-header__name">Fernanda Torres</span>
              </div>
            </div>
            <div className="home-header__icons">
              <button className="home-header__icon-btn" aria-label="Bônus" onClick={() => navigate('/refer')}>
                <img src={giftIcon} alt="" />
              </button>
              <button className="home-header__icon-btn" aria-label="Notificações">
                <img src={bellIcon} alt="" />
                <span className="home-header__dot" />
              </button>
            </div>
          </div>

          <div className="home-header__balance">
            <div className="home-header__balance-row">
              <span className="home-header__amount">
                {showBalance ? `R$ ${fmtBRL(brlBalance)}` : 'R$ ••••••'}
              </span>
              <button
                className="home-header__eye"
                onClick={() => setShowBalance(v => !v)}
                aria-label="Mostrar saldo"
              >
                <img src={eyeIcon} alt="" />
              </button>
            </div>
            <span className="home-header__growth">+2,4%/m</span>
          </div>

          <div className="home-header__pills">
            <button className="home-pill">
              <img src={depositIcon} alt="" />
              Depositar
            </button>
            <button className="home-pill">
              <img src={transferIcon} alt="" />
              Transferir
            </button>
            <button className="home-pill">
              <img src={receiveIcon} alt="" />
              Receber
            </button>
          </div>
        </header>

        {/* ── Scrollable content ── */}
        <div className="home-content">

          <section className="home-section">
            <h2 className="home-section__title">Suas carteiras</h2>
            <div className="home-hscroll">
              {WALLET_CARDS.map(card => (
                <WalletCard key={card.currency} {...card} />
              ))}
            </div>
          </section>

          <section className="home-section">
            <h2 className="home-section__title">Seus cartões</h2>
            <div className="home-hscroll">
              <div className="home-card home-card--orange">
                <img src={zarpIcon} alt="Zarp" className="home-card__logo" />
                <span className="home-card__number">•••• •••• •••• 4231</span>
                <div className="home-card__footer">
                  <span>Fernanda Torres</span>
                  <span>12/28</span>
                </div>
              </div>
              <div className="home-card home-card--dark">
                <img src={zarpIcon} alt="Zarp" className="home-card__logo" />
                <span className="home-card__number">•••• •••• •••• 7819</span>
                <div className="home-card__footer">
                  <span>Fernanda Torres</span>
                  <span>08/27</span>
                </div>
              </div>
            </div>
          </section>

          <section className="home-section">
            <h2 className="home-section__title">Últimas transações</h2>
            <div className="home-transactions">
              {TRANSACTIONS.map((tx, i) => (
                <TransactionItem key={i} {...tx} />
              ))}
            </div>
          </section>

        </div>

        <div className="home-nav-spacer" />
      </div>

      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab)
          if (tab === 'card') navigate('/card')
        }}
        onPlusClick={() => setIsSheetOpen(true)}
      />

      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        title="O que deseja fazer?"
      >
        {BS_ITEMS.map(item => (
          <button
            key={item.label}
            className="bs-item"
            onClick={() => {
              setIsSheetOpen(false)
              if (item.label === 'Adicionar nova moeda') {
                setTimeout(() => setIsCurrencyOpen(true), 300)
              }
            }}
          >
            <div className="bs-item__icon" style={{ background: item.bg }}>
              <img src={item.icon} alt="" />
            </div>
            <span className="bs-item__label">{item.label}</span>
          </button>
        ))}
      </BottomSheet>

      <CurrencySheet
        isOpen={isCurrencyOpen}
        onClose={() => setIsCurrencyOpen(false)}
        onSelect={(currency) => {
          setIsCurrencyOpen(false)
          navigate('/convert', { state: { currency, brlBalance } })
        }}
      />
    </>
  )
}
