import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ui/ProgressBar'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'

import slide1Img from '../assets/images/onboarding-1.webp'
import slide2Img from '../assets/images/onboarding-2.webp'
import slide3Img from '../assets/images/onboarding-3.webp'
import slide4Img from '../assets/images/onboarding-4.webp'

import brazilFlag from '../assets/icons/Brazil.svg'
import americaFlag from '../assets/icons/America.svg'
import spanishFlag from '../assets/icons/Spanish.svg'
import japanFlag from '../assets/icons/Japan.svg'
import argentinaFlag from '../assets/icons/Argentina.svg'
import userNotificationIcon from '../assets/icons/user-notification.svg'
import onboardingIcon from '../assets/icons/Onboarding.svg'
import paymentIcon from '../assets/icons/payment-icon.svg'

import './OnboardingPage.css'

const SLIDES = [
  {
    id: 0,
    image: slide1Img,
    title: 'Dinheiro sem Fronteiras',
    subtitle: 'Use, guarde e mova seu dinheiro em qualquer lugar do mundo.',
  },
  {
    id: 1,
    image: slide2Img,
    title: 'Sem burocracia. Sem chatice',
    subtitle: 'Abre sua conta em minutos. Sem papel, Sem milhões de dados e sem enrolação.',
  },
  {
    id: 2,
    image: slide3Img,
    title: 'Invista seu dinheiro fácil',
    subtitle: 'Compre diferentes moedas e ganhe rentabilidade, protegendo seu patrimônio',
  },
  {
    id: 3,
    image: slide4Img,
    title: 'Cartão global com múltiplas moedas',
    subtitle: 'Conversão automatica em real time, aceito em estabelecimentos do mundo todo',
  },
]

function Slide1Card() {
  return (
    <GlassCard className="ob-card ob-card--1">
      <div className="ob-card__flags">
        <img src={brazilFlag} alt="Brasil" className="ob-flag" />
        <img src={americaFlag} alt="EUA" className="ob-flag" />
        <img src={spanishFlag} alt="Espanha" className="ob-flag" />
        <img src={japanFlag} alt="Japão" className="ob-flag" />
        <img src={argentinaFlag} alt="Argentina" className="ob-flag ob-flag--last" />
      </div>
      <div className="ob-card__text">
        <p className="ob-card__title">+40 Moedas para você</p>
        <p className="ob-card__sub">Viaje com a Zarp para onde quiser</p>
      </div>
    </GlassCard>
  )
}

function Slide2Card() {
  return (
    <GlassCard className="ob-card ob-card--wide">
      <div className="ob-card__icon-wrap ob-card__icon-wrap--light">
        <img src={userNotificationIcon} alt="" className="ob-card__icon" />
      </div>
      <div className="ob-card__text">
        <p className="ob-card__title">Conta criada em 3 minutos!</p>
        <p className="ob-card__sub">Seja bem vindo a Zarp, sua conta global</p>
      </div>
    </GlassCard>
  )
}

function Slide3Card() {
  return (
    <GlassCard className="ob-card ob-card--compact">
      <div className="ob-card__icon-wrap ob-card__icon-wrap--dark">
        <img src={onboardingIcon} alt="" className="ob-card__icon" />
      </div>
      <div className="ob-card__text">
        <p className="ob-card__title ob-card__title--dark">Investimento concluído</p>
        <p className="ob-card__sub ob-card__sub--dark">Você recebeu $120 Dólares de rendimento</p>
      </div>
    </GlassCard>
  )
}

function Slide4Card() {
  return (
    <GlassCard className="ob-card ob-card--wide">
      <div className="ob-card__payment-icon">
        <img src={paymentIcon} alt="" />
      </div>
      <div className="ob-card__text">
        <p className="ob-card__title">Compra feita com sucesso</p>
        <p className="ob-card__sub">Você gastou $12 em Mc Donalds</p>
      </div>
    </GlassCard>
  )
}

const CARDS = [<Slide1Card />, <Slide2Card />, <Slide3Card />, <Slide4Card />]

export default function OnboardingPage() {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()
  const touchStartX = useRef(null)
  const mouseStartX = useRef(null)
  const isDragging = useRef(false)

  const goTo = (index) => setCurrent(Math.max(0, Math.min(SLIDES.length - 1, index)))

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 48) goTo(current + (diff > 0 ? 1 : -1))
    touchStartX.current = null
  }
  const handleMouseDown = (e) => { isDragging.current = true; mouseStartX.current = e.clientX }
  const handleMouseUp = (e) => {
    if (!isDragging.current) return
    const diff = mouseStartX.current - e.clientX
    if (Math.abs(diff) > 48) goTo(current + (diff > 0 ? 1 : -1))
    isDragging.current = false
  }
  const handleMouseLeave = () => { isDragging.current = false }

  const slide = SLIDES[current]

  return (
    <div
      className="onboarding"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagem cobre toda a tela */}
      <img
        key={slide.id}
        src={slide.image}
        alt=""
        className="onboarding__bg"
        draggable={false}
      />

      {/* Gradiente branco só no final da imagem */}
      <div className="onboarding__gradient" />

      {/* Progress bar — topo */}
      <div className="onboarding__progress">
        <ProgressBar total={4} active={current} />
      </div>

      {/* Glass card — flutuando acima do conteúdo */}
      {CARDS[current]}

      {/* Conteúdo — sobreposto na base da tela */}
      <div className="onboarding__content">
        <div className="onboarding__copy">
          <h1 className="onboarding__title">{slide.title}</h1>
          <p className="onboarding__subtitle">{slide.subtitle}</p>
        </div>
        <div className="onboarding__actions">
          <Button variant="secondary" onClick={() => navigate('/login')}>
            Fazer Login
          </Button>
          <Button variant="primary" onClick={() => navigate('/cadastro')}>
            Começar agora
          </Button>
        </div>
      </div>
    </div>
  )
}
