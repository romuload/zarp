import { useEffect } from 'react'
import closeIcon from '../../assets/icons/close-icon.svg'
import './BottomSheet.css'

export default function BottomSheet({ isOpen, onClose, title, children }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <div
        className={`bs-backdrop${isOpen ? ' bs-backdrop--visible' : ''}`}
        onClick={onClose}
      />
      <div className={`bs${isOpen ? ' bs--open' : ''}`} role="dialog" aria-modal="true">
        <div className="bs__handle" />
        <div className="bs__header">
          <h2 className="bs__title">{title}</h2>
          <button className="bs__close" onClick={onClose} aria-label="Fechar">
            <img src={closeIcon} alt="" />
          </button>
        </div>
        <div className="bs__content">{children}</div>
      </div>
    </>
  )
}
