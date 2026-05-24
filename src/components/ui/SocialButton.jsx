import googleIcon from '../../assets/icons/google-logo.svg'
import appleIcon from '../../assets/icons/apple-logo.svg'
import './SocialButton.css'

const config = {
  google: { icon: googleIcon, label: 'Continuar com Google' },
  apple:  { icon: appleIcon,  label: 'Continuar com Apple'  },
}

export default function SocialButton({ provider = 'google', onClick }) {
  const { icon, label } = config[provider]

  return (
    <button type="button" className="social-btn" onClick={onClick}>
      <img src={icon} alt="" className="social-btn__icon" />
      <span className="social-btn__label">{label}</span>
    </button>
  )
}
