import bankIcon from '../../assets/icons/wallet-bank-icon.svg'
import './WalletCard.css'

export default function WalletCard({ flag, currency, balance, account }) {
  return (
    <div className="wallet-card">
      <div className="wallet-card__header">
        <img src={flag} alt={currency} className="wallet-card__flag" />
        <span className="wallet-card__currency">{currency}</span>
      </div>
      <div className="wallet-card__footer">
        <p className="wallet-card__balance">{balance}</p>
        <div className="wallet-card__account">
          <img src={bankIcon} alt="" className="wallet-card__account-icon" />
          <span>{account}</span>
        </div>
      </div>
    </div>
  )
}
