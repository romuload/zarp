import { useState, useEffect } from 'react'
import closeIcon from '../../assets/icons/close-icon.svg'
import { CURRENCIES } from '../../data/currencies'
import './CurrencySheet.css'

export default function CurrencySheet({ isOpen, onClose, onSelect }) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!isOpen) setSearch('')
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const q = search.toLowerCase()
  const filtered = CURRENCIES.filter(c =>
    c.code !== 'BRL' && (
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.country.toLowerCase().includes(q)
    )
  )

  function handleSelect(currency) {
    onClose()
    onSelect?.(currency)
  }

  return (
    <>
      <div
        className={`bs-backdrop${isOpen ? ' bs-backdrop--visible' : ''}`}
        onClick={onClose}
      />
      <div className={`cs${isOpen ? ' cs--open' : ''}`} role="dialog" aria-modal="true">
        <div className="bs__handle" />

        <div className="cs__header">
          <h2 className="cs__title">Escolha a moeda</h2>
          <button className="bs__close" onClick={onClose} aria-label="Fechar">
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <div className="cs__search">
          <div className="cs__search-wrap">
            <svg className="cs__search-icon" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="5.5" stroke="#6d7371" strokeWidth="1.5" />
              <path d="M13.5 13.5L17 17" stroke="#6d7371" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              className="cs__search-input"
              type="text"
              placeholder="Buscar a moeda"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="cs__search-clear" onClick={() => setSearch('')} aria-label="Limpar">
                ×
              </button>
            )}
          </div>
        </div>

        <div className="cs__list">
          {filtered.map(currency => (
            <button
              key={currency.code}
              className="cs-item"
              onClick={() => handleSelect(currency)}
            >
              <div className="cs-item__left">
                {currency.flag ? (
                  <img src={currency.flag} alt={currency.country} className="cs-item__flag" />
                ) : (
                  <div className="cs-item__flag-placeholder">
                    <span>{currency.code.slice(0, 2)}</span>
                  </div>
                )}
                <div className="cs-item__info">
                  <span className="cs-item__name">{currency.name}</span>
                  <span className="cs-item__country">{currency.country}</span>
                </div>
              </div>
              <span className="cs-item__arrow" />
            </button>
          ))}

          {filtered.length === 0 && (
            <p className="cs__empty">Nenhuma moeda encontrada para "{search}"</p>
          )}
        </div>
      </div>
    </>
  )
}
