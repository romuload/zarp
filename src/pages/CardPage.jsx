import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/layout/BottomNav'
import zarpIcon from '../assets/icons/zarp-icon.svg'
import lockIcon from '../assets/icons/Lock.svg'
import './CardPage.css'

const CARDS = [
  {
    id: 'orange',
    theme: 'orange',
    number: '•••• •••• •••• 4231',
    holder: 'Fernanda Torres',
    expiry: '12/28',
    spent: 2450,
    limit: 4000,
    transactions: [
      { id: 1, title: 'Compra Ifood',      date: '22 de Maio',   amount: 180.00  },
      { id: 2, title: 'Posto Pétrobras',   date: '18 de Maio',   amount: 250.00  },
      { id: 3, title: 'Compra Donnuts',    date: '16 de Abril',  amount: 5.00    },
      { id: 4, title: 'Compra Zara',       date: '16 de Abril',  amount: 950.00  },
      { id: 5, title: 'Farmácia Pague Menos', date: '10 de Abril', amount: 87.40 },
      { id: 6, title: 'Amazon',            date: '5 de Abril',   amount: 349.90  },
    ],
  },
  {
    id: 'dark',
    theme: 'dark',
    number: '•••• •••• •••• 7819',
    holder: 'Fernanda Torres',
    expiry: '08/27',
    spent: 980,
    limit: 6000,
    transactions: [
      { id: 1, title: 'Mercado Livre',     date: '20 de Maio',   amount: 199.90  },
      { id: 2, title: 'Rappi',             date: '15 de Maio',   amount: 75.00   },
      { id: 3, title: 'Uber Eats',         date: '12 de Maio',   amount: 45.80   },
      { id: 4, title: 'Spotify',           date: '1 de Maio',    amount: 21.90   },
    ],
  },
]

const ACTIONS = [
  {
    label: 'Copiar dados',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="7" y="7" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M13 7V5.5C13 4.67 12.33 4 11.5 4H4.5C3.67 4 3 4.67 3 5.5V12.5C3 13.33 3.67 14 4.5 14H6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Bloquear',
    icon: <img src={lockIcon} alt="" style={{ width: 20, height: 20, filter: 'brightness(0) saturate(100%) invert(35%) sepia(80%) saturate(300%) hue-rotate(1deg) brightness(90%)' }} />,
  },
  {
    label: 'Configurações',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Limite',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3.5 10a6.5 6.5 0 1 0 1.2-3.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M3.5 4.5V6.5H5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Fatura',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 9H11M8 11.5h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M14 8l3 2-3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Cashback',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 13.5c0 0 2-1.5 4-1.5s3 1.5 5 1.5 4-1.5 4-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <rect x="5" y="4" width="10" height="7" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 6v3M8.5 7.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

function fmtBRL(n) {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)
}

export default function CardPage() {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)

  const card = CARDS[activeIndex]
  const spentPct = Math.min((card.spent / card.limit) * 100, 100)

  return (
    <>
      <div className="card-page">

        {/* ── Card carousel ── */}
        <div className="card-carousel">
          {CARDS.map((c, i) => (
            <div
              key={c.id}
              className={`card-visual card-visual--${c.theme}`}
              onClick={() => setActiveIndex(i)}
            >
              {/* Chip */}
              <div className="card-visual__chip">
                <div className="card-visual__chip-lines">
                  <span /><span /><span />
                </div>
              </div>

              {/* Wireless icon */}
              <div className="card-visual__wifi">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2.5 7.5C4.4 5.5 7 4.5 9 4.5s4.6 1 6.5 3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M4.5 10C6 8.5 7.5 7.8 9 7.8s3 0.7 4.5 2.2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round"/>
                  <circle cx="9" cy="13" r="1.2" fill="rgba(255,255,255,0.9)"/>
                </svg>
              </div>

              {/* Logo */}
              <img src={zarpIcon} alt="Zarp" className="card-visual__logo" />

              {/* Number */}
              <span className="card-visual__number">{c.number}</span>

              {/* Footer */}
              <div className="card-visual__footer">
                <span className="card-visual__holder">{c.holder}</span>
                <span className="card-visual__expiry">{c.expiry}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Carousel dots ── */}
        <div className="card-dots">
          {CARDS.map((c, i) => (
            <button
              key={c.id}
              className={`card-dot${i === activeIndex ? ' card-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Cartão ${i + 1}`}
            />
          ))}
        </div>

        {/* ── Balance + progress ── */}
        <div className="card-balance">
          <span className="card-balance__label">Total Gasto</span>
          <div className="card-balance__amount">
            <span className="card-balance__value">{fmtBRL(card.spent)}</span>
            <span className="card-balance__currency">R$</span>
          </div>
          <div className="card-progress">
            <div className="card-progress__track">
              <div className="card-progress__fill" style={{ width: `${spentPct}%` }} />
            </div>
            <div className="card-progress__meta">
              <span><strong>Gasto:</strong> R${card.spent.toLocaleString('pt-BR')}</span>
              <span><strong>Limite:</strong> R${card.limit.toLocaleString('pt-BR')}</span>
            </div>
          </div>
        </div>

        {/* ── Quick actions ── */}
        <div className="card-actions">
          {ACTIONS.map(action => (
            <button key={action.label} className="card-action">
              <span className="card-action__icon">{action.icon}</span>
              <span className="card-action__label">{action.label}</span>
            </button>
          ))}
        </div>

        {/* ── Transactions ── */}
        <section className="card-txs-section">
          <h2 className="card-txs-section__title">Transações Recentes</h2>
          <div className="card-txs">
            {card.transactions.map(tx => (
              <div key={tx.id} className="card-tx">
                <div className="card-tx__left">
                  <div className="card-tx__icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="7.5" stroke="#12b272" strokeWidth="1.4"/>
                      <path d="M10 6.5v7M7.5 9c.5-1.5 5-1.5 5 1s-5 2.5-5 4 4.5 1.5 5 0" stroke="#12b272" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="card-tx__info">
                    <span className="card-tx__title">{tx.title}</span>
                    <span className="card-tx__date">{tx.date}</span>
                  </div>
                </div>
                <span className="card-tx__amount">- R$ {fmtBRL(tx.amount)}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="card-nav-spacer" />
      </div>

      <BottomNav
        activeTab="card"
        onTabChange={(tab) => {
          if (tab === 'home') navigate('/home')
          else if (tab === 'card') navigate('/card')
        }}
        onPlusClick={() => {}}
      />
    </>
  )
}
