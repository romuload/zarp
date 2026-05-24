import './TransactionItem.css'

export default function TransactionItem({ avatar, icon, type = 'debit', title, date, amount }) {
  return (
    <div className="tx-item">
      <div className="tx-item__left">
        {avatar ? (
          <img src={avatar} alt={title} className="tx-item__avatar" />
        ) : (
          <div className={`tx-item__icon-wrap tx-item__icon-wrap--${type}`}>
            <img src={icon} alt="" className="tx-item__icon" />
          </div>
        )}
        <div className="tx-item__info">
          <p className="tx-item__title">{title}</p>
          <p className="tx-item__date">{date}</p>
        </div>
      </div>
      <span className={`tx-item__amount tx-item__amount--${type}`}>{amount}</span>
    </div>
  )
}
