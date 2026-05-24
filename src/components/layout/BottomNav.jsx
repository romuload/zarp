import homeIcon from '../../assets/icons/home-icon.svg'
import cardIcon from '../../assets/icons/card-icon.svg'
import chartIcon from '../../assets/icons/chart-icon.svg'
import historyIcon from '../../assets/icons/history-icon.svg'
import plusIcon from '../../assets/icons/plus-icon.svg'
import './BottomNav.css'

const NAV_ITEMS = [
  { id: 'home',        label: 'Home',         icon: homeIcon   },
  { id: 'card',        label: 'Cartão',       icon: cardIcon   },
  { id: 'investments', label: 'Investimentos', icon: chartIcon  },
  { id: 'history',     label: 'Histórico',    icon: historyIcon },
]

export default function BottomNav({ activeTab = 'home', onTabChange, onPlusClick }) {
  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.slice(0, 2).map(item => (
        <button
          key={item.id}
          className={`bottom-nav__item${activeTab === item.id ? ' bottom-nav__item--active' : ''}`}
          onClick={() => onTabChange?.(item.id)}
        >
          <img src={item.icon} alt="" className="bottom-nav__icon" />
          <span className="bottom-nav__label">{item.label}</span>
        </button>
      ))}

      {/* Botão + central flutuante */}
      <div className="bottom-nav__plus-slot">
        <button className="bottom-nav__plus" onClick={onPlusClick} aria-label="Ações">
          <img src={plusIcon} alt="+" />
        </button>
      </div>

      {NAV_ITEMS.slice(2).map(item => (
        <button
          key={item.id}
          className={`bottom-nav__item${activeTab === item.id ? ' bottom-nav__item--active' : ''}`}
          onClick={() => onTabChange?.(item.id)}
        >
          <img src={item.icon} alt="" className="bottom-nav__icon" />
          <span className="bottom-nav__label">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
