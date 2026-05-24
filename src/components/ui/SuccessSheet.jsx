import { fmtBRL, fmtForeign } from '../../data/currencies'
import './SuccessSheet.css'

export default function SuccessSheet({ isOpen, details, onClose, onGoHome }) {
  if (!details) return null

  const { amountBRL, net, fee, currency, refNumber, date } = details

  return (
    <>
      <div
        className={`bs-backdrop${isOpen ? ' bs-backdrop--visible' : ''}`}
        onClick={onClose}
      />
      <div className={`ss${isOpen ? ' ss--open' : ''}`} role="dialog" aria-modal="true">
        <div className="bs__handle" />

        <div className="ss__scroll">
          {/* Illustration */}
          <div className="ss__check">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="#FF6600" fillOpacity="0.08" />
              <circle cx="40" cy="40" r="30" fill="#FF6600" fillOpacity="0.12" />
              <circle cx="40" cy="40" r="21" fill="#FF6600" />
              <path d="M29 40L37 48L52 32" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Title */}
          <div className="ss__copy">
            <h2 className="ss__title">Compra feita com sucesso</h2>
            <p className="ss__subtitle">Logo você estará com o dinheiro na sua conta</p>
          </div>

          {/* Receipt */}
          <div className="ss__receipt">
            <div className="ss-row">
              <span className="ss-row__label">Você comprou</span>
              <span className="ss-row__value">R$ {fmtBRL(amountBRL)}</span>
            </div>
            <div className="ss-row">
              <span className="ss-row__label">Status de pagamento</span>
              <span className="ss-row__value">Concluído</span>
            </div>
            <div className="ss-row">
              <span className="ss-row__label">Número de ref</span>
              <span className="ss-row__value">{refNumber}</span>
            </div>
            <div className="ss-row">
              <span className="ss-row__label">Método de transferência</span>
              <span className="ss-row__value">Conversão</span>
            </div>
            <div className="ss-row">
              <span className="ss-row__label">Data</span>
              <span className="ss-row__value">{date}</span>
            </div>
            <div className="ss-row">
              <span className="ss-row__label">Nossas Taxas</span>
              <span className="ss-row__value">{fmtForeign(fee, 2)} {currency.code}</span>
            </div>
            <div className="ss-row">
              <span className="ss-row__label">Custo Total</span>
              <span className="ss-row__value">{fmtForeign(fee * 1.25, 2)} {currency.code}</span>
            </div>
            <div className="ss__divider" />
            <div className="ss-row">
              <span className="ss-row__label">Total convertido</span>
              <span className="ss-row__value ss-row__value--highlight">
                {currency.symbol}{fmtForeign(net)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="ss__actions">
            <button className="ss__btn ss__btn--primary" onClick={onClose}>
              Abrir recibo
            </button>
            <button className="ss__btn ss__btn--outline" onClick={onGoHome}>
              Voltar para Home
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
