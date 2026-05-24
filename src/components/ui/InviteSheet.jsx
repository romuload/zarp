import { useState, useEffect } from 'react'
import closeIcon from '../../assets/icons/close-icon.svg'
import './InviteSheet.css'

const CONTACTS = [
  { id: 1, name: 'Ana Paula Silva',   phone: '(11) ••••• 8821' },
  { id: 2, name: 'Bruno Costa',       phone: '(21) ••••• 4473' },
  { id: 3, name: 'Carla Mendonça',    phone: '(31) ••••• 0192' },
  { id: 4, name: 'Diego Ferreira',    phone: '(41) ••••• 7654' },
  { id: 5, name: 'Elisa Rocha',       phone: '(11) ••••• 3310' },
  { id: 6, name: 'Felipe Resende',    phone: '(51) ••••• 9987' },
  { id: 7, name: 'Gabriela Lima',     phone: '(11) ••••• 2256' },
  { id: 8, name: 'Henrique Alves',    phone: '(61) ••••• 5543' },
  { id: 9, name: 'Isabela Santos',    phone: '(21) ••••• 6678' },
  { id: 10, name: 'João Melo',        phone: '(11) ••••• 1129' },
]

const SHARES = [
  {
    label: 'Copiar link',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8 12l4-4M7 9l-1.5 1.5a3 3 0 0 0 4.24 4.24L11 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 7l1.5-1.5a3 3 0 0 1 4.24 4.24L13 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a8 8 0 0 1 6.93 12.02L18 18l-4.1-1.05A8 8 0 1 1 10 2Z" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7.5 8c.2.6.6 1.1 1 1.6.5.6 1.1 1.1 1.8 1.4.2.1.4 0 .5-.1l.7-.8c.1-.2.4-.2.6-.1l1.7.9c.2.1.3.4.2.6C13.7 12.7 12.8 13 12 13c-2.8 0-5-3-5-4.5 0-.7.3-1.4.8-1.9.2-.2.5-.2.7-.1l.8.5c.2.1.3.4.2.6L8 8.5c-.1.2 0 .4.2.4C7.9 8.8 7.6 8.5 7.5 8Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M11.5 7H10a1 1 0 0 0-1 1v1.5H7.5v2H9V17h2v-5.5h1.5l.5-2H11V8a.5.5 0 0 1 .5-.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Compartilhar',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="15" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="15" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6.5 9l7-3.5M6.5 11l7 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function InviteSheet({ isOpen, onClose, onDone }) {
  const [search, setSearch] = useState('')
  const [invited, setInvited] = useState(new Set())

  useEffect(() => {
    if (!isOpen) { setSearch(''); setInvited(new Set()) }
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const q = search.toLowerCase()
  const filtered = CONTACTS.filter(c =>
    c.name.toLowerCase().includes(q) || c.phone.includes(q)
  )

  function toggle(id) {
    setInvited(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <>
      <div
        className={`bs-backdrop${isOpen ? ' bs-backdrop--visible' : ''}`}
        onClick={onClose}
      />
      <div className={`invite-sheet${isOpen ? ' invite-sheet--open' : ''}`} role="dialog" aria-modal="true">
        <div className="bs__handle" />

        <div className="invite-sheet__header">
          <h2 className="invite-sheet__title">Convide seus contatos</h2>
          <button className="bs__close" onClick={onClose} aria-label="Fechar">
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <div className="invite-sheet__search">
          <div className="invite-search-wrap">
            <svg className="invite-search-icon" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="5.5" stroke="#6d7371" strokeWidth="1.5"/>
              <path d="M13.5 13.5L17 17" stroke="#6d7371" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              className="invite-search-input"
              type="text"
              placeholder="Buscar contato"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="invite-search-clear" onClick={() => setSearch('')} aria-label="Limpar">×</button>
            )}
          </div>
        </div>

        <div className="invite-sheet__list">
          {filtered.map(contact => (
            <div key={contact.id} className="invite-contact">
              <div className="invite-contact__avatar">
                {contact.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
              </div>
              <div className="invite-contact__info">
                <span className="invite-contact__name">{contact.name}</span>
                <span className="invite-contact__phone">{contact.phone}</span>
              </div>
              <button
                className={`invite-btn${invited.has(contact.id) ? ' invite-btn--done' : ''}`}
                onClick={() => toggle(contact.id)}
              >
                {invited.has(contact.id) ? 'Convidado' : 'Convidar'}
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="invite-empty">Nenhum contato encontrado</p>
          )}
        </div>

        <div className="invite-sheet__share">
          {SHARES.map(item => (
            <button
              key={item.label}
              className="invite-share-btn"
              onClick={item.label === 'Compartilhar' || invited.size > 0 ? onDone : undefined}
            >
              <div className="invite-share-btn__icon">{item.icon}</div>
              <span className="invite-share-btn__label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
