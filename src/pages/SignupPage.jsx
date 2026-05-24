import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Divider from '../components/ui/Divider'
import SocialButton from '../components/ui/SocialButton'
import logoZarp from '../assets/icons/logo-zarp.svg'
import './AuthPage.css'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const isValid = email.trim() !== ''

  return (
    <div className="auth-page">
      <div className="auth-page__inner">
        <div className="auth-page__body">
          <img src={logoZarp} alt="Zarp" className="auth-page__logo" />

          <div className="auth-page__form">
            <div className="auth-page__heading">
              <h1 className="auth-page__title">Para começar o e-mail</h1>
              <p className="auth-page__subtitle">
                Insira seu e-mail para fazer login ou criar uma conta
              </p>
            </div>

            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Divider />

            <div className="auth-page__social">
              <SocialButton provider="google" />
              <SocialButton provider="apple" />
            </div>
          </div>
        </div>

        <div className="auth-page__actions">
          <Button variant={isValid ? 'primary' : 'disabled'} onClick={() => isValid && navigate('/home')}>
            Começar Agora
          </Button>
          <Button variant="secondary" onClick={() => navigate('/login')}>
            Fazer Login
          </Button>
        </div>
      </div>
    </div>
  )
}
