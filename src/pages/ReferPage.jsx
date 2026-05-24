import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InviteSheet from '../components/ui/InviteSheet'
import heroImg from '../assets/images/onboarding-3.webp'
import closeIcon from '../assets/icons/close-icon.svg'
import './ReferPage.css'

const STEPS = [
  { n: 1, text: 'Convide seus amigos pelo link ou contato' },
  { n: 2, text: 'Seu amigo cria uma conta na Zarp' },
  { n: 3, text: 'Ele realiza a primeira transação' },
  { n: 4, text: 'Vocês dois recebem R$100 cada' },
]

export default function ReferPage() {
  const navigate = useNavigate()
  const [isInviteOpen, setIsInviteOpen] = useState(false)

  return (
    <>
      <div className="refer-page">
        <header className="refer-header">
          <span className="refer-header__title">Indique um Amigo</span>
          <button
            className="refer-header__close"
            onClick={() => navigate('/home')}
            aria-label="Fechar"
          >
            <img src={closeIcon} alt="" />
          </button>
        </header>

        <div className="refer-body">
          <div className="refer-hero">
            <img src={heroImg} alt="" className="refer-hero__img" />
          </div>

          <h1 className="refer-title">Indique amigos e ganhe dinheiro com isso</h1>
          <p className="refer-subtitle">
            A cada amigo que se cadastrar e fizer uma transação, vocês dois ganham R$100 de bônus.
          </p>

          <ol className="refer-steps">
            {STEPS.map(step => (
              <li key={step.n} className="refer-step">
                <span className="refer-step__num">{step.n}</span>
                <span className="refer-step__text">{step.text}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="refer-footer">
          <button className="refer-cta" onClick={() => setIsInviteOpen(true)}>
            Convidar amigos
          </button>
        </div>
      </div>

      <InviteSheet
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
        onDone={() => {
          setIsInviteOpen(false)
          navigate('/refer/dashboard')
        }}
      />
    </>
  )
}
