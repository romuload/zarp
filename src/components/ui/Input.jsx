import { useState } from 'react'
import emailIcon from '../../assets/icons/email.svg'
import lockIcon from '../../assets/icons/Lock.svg'
import eyeIcon from '../../assets/icons/Eye.svg'
import './Input.css'

export default function Input({ type = 'email', placeholder, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false)

  if (type === 'password') {
    return (
      <div className="input-wrapper">
        <div className="input-left">
          <img src={lockIcon} alt="" className="input-icon" />
          <input
            className="input-field"
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder || 'Insira sua senha'}
            value={value}
            onChange={onChange}
            autoComplete="current-password"
          />
        </div>
        <button
          type="button"
          className="input-eye-btn"
          onClick={() => setShowPassword(v => !v)}
          tabIndex={-1}
          aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
        >
          <img src={eyeIcon} alt="" className="input-icon" />
        </button>
      </div>
    )
  }

  return (
    <div className="input-wrapper">
      <img src={emailIcon} alt="" className="input-icon" />
      <input
        className="input-field"
        type="email"
        placeholder={placeholder || 'Insira seu e-mail'}
        value={value}
        onChange={onChange}
        autoComplete="email"
      />
    </div>
  )
}
