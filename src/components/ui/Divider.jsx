import './Divider.css'

export default function Divider({ label = 'Ou' }) {
  return (
    <div className="divider">
      <div className="divider__line" />
      <span className="divider__label">{label}</span>
      <div className="divider__line" />
    </div>
  )
}
