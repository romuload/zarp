import { useNavigate } from 'react-router-dom'
import closeIcon from '../assets/icons/close-icon.svg'
import avatarUser from '../assets/icons/avatar-user.png'
import txAvatarNu from '../assets/icons/tx-avatar-nu.png'
import './ReferDashboardPage.css'

const STATS = [
  { label: 'Total ganho',    value: 'R$600',  sub: 'Recebido' },
  { label: 'Amigos ativos',  value: '9/32',   sub: 'Indicações' },
  { label: 'Ranking',        value: 'Top 10%', sub: 'Geral' },
]

const REFERRALS = [
  {
    id: 1,
    name: 'Willian Baldan',
    status: 'pago',
    step: null,
    amount: '+R$100',
  },
  {
    id: 2,
    name: 'Felipe Resende',
    status: 'pendente',
    step: '1/4 etapas',
    amount: '+R$00',
  },
  {
    id: 3,
    name: 'Maria Clara',
    status: 'pendente',
    step: '3/4 etapas',
    amount: '+R$00',
  },
]

function initials(name) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
}

export default function ReferDashboardPage() {
  const navigate = useNavigate()

  return (
    <div className="refdash-page">
      {/* ── Header ── */}
      <header className="refdash-header">
        <span className="refdash-header__title">Indique um Amigo</span>
        <button
          className="refdash-header__close"
          onClick={() => navigate('/home')}
          aria-label="Fechar"
        >
          <img src={closeIcon} alt="" />
        </button>
      </header>

      <div className="refdash-body">
        {/* ── Hero card ── */}
        <div className="refdash-hero">
          <div className="refdash-hero__badge">
            <span className="refdash-hero__badge-dot" />
            Programa de indicações ativo
          </div>
          <h2 className="refdash-hero__title">Indique amigos, ganhe recompensas juntos</h2>
          <p className="refdash-hero__sub">Cada indicação completa rende R$100 para você e seu amigo.</p>
          <div className="refdash-hero__bottom">
            <div className="refdash-avatars">
              <img src={avatarUser} alt="" className="refdash-avatars__img" />
              <img src={txAvatarNu} alt="" className="refdash-avatars__img refdash-avatars__img--2" />
              <div className="refdash-avatars__more">+7</div>
            </div>
            <button className="refdash-hero__how">Como funciona</button>
          </div>
        </div>

        {/* ── Reward progress ── */}
        <div className="refdash-reward">
          <div className="refdash-reward__top">
            <div>
              <span className="refdash-reward__label">A liberar nos próximos 7 dias</span>
              <span className="refdash-reward__amount">R$300,00</span>
            </div>
            <span className="refdash-reward__pct">60%</span>
          </div>
          <div className="refdash-reward__track">
            <div className="refdash-reward__fill" style={{ width: '60%' }} />
          </div>
          <span className="refdash-reward__caption">3 de 5 recompensas em andamento</span>
        </div>

        {/* ── Stat cards ── */}
        <div className="refdash-stats">
          {STATS.map(s => (
            <div key={s.label} className="refdash-stat">
              <span className="refdash-stat__value">{s.value}</span>
              <span className="refdash-stat__label">{s.label}</span>
              <span className="refdash-stat__sub">{s.sub}</span>
            </div>
          ))}
        </div>

        {/* ── Referral list ── */}
        <section className="refdash-list-section">
          <h3 className="refdash-list-section__title">Minhas indicações</h3>
          <div className="refdash-list">
            {REFERRALS.map(ref => (
              <div key={ref.id} className="refdash-item">
                <div className="refdash-item__avatar">
                  {initials(ref.name)}
                </div>
                <div className="refdash-item__info">
                  <span className="refdash-item__name">{ref.name}</span>
                  {ref.step && (
                    <span className="refdash-item__step">{ref.step}</span>
                  )}
                </div>
                <div className="refdash-item__right">
                  <span className={`refdash-badge refdash-badge--${ref.status}`}>
                    {ref.status === 'pago' ? 'Pago' : 'Pendente'}
                  </span>
                  <span className={`refdash-item__amount${ref.status === 'pago' ? ' refdash-item__amount--paid' : ''}`}>
                    {ref.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
