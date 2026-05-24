import './Button.css'

export default function Button({ variant = 'primary', children, onClick, type = 'button' }) {
  return (
    <button
      type={type}
      className={`btn btn--${variant}`}
      onClick={onClick}
      disabled={variant === 'disabled'}
    >
      {children}
    </button>
  )
}
