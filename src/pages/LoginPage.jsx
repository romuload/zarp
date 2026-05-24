import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Divider from '../components/ui/Divider'
import SocialButton from '../components/ui/SocialButton'
import logoZarp from '../assets/icons/logo-zarp.svg'
import './AuthPage.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const isValid = email.trim() !== '' && password.trim() !== ''

  return (
    <div className="auth-page">
      <div className="auth-page__inner">
        <div className="auth-page__body">
          <img src={logoZarp} alt="Zarp" className="auth-page__logo" />

          <div className="auth-page__form">
            <div className="auth-page__heading">
              <h1 className="auth-page__title">Bem vindo de volta</h1>
              <p className="auth-page__subtitle">Vamos Zarpar pelo mundo</p>
            </div>

            <div className="auth-page__fields">
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <Divider />

            <div className="auth-page__social">
              <SocialButton provider="google" />
              <SocialButton provider="apple" />
            </div>
          </div>
        </div>

        <div className="auth-page__actions">
          <Button variant={isValid ? 'primary' : 'disabled'} onClick={() => isValid && navigate('/home')}>
            Fazer Login
          </Button>
          <Button variant="secondary" onClick={() => navigate('/cadastro')}>
            Criar Conta
          </Button>
        </div>
      </div>
    </div>
  )
}
