import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OnboardingPage from './pages/OnboardingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import ConvertPage from './pages/ConvertPage'
import CardPage from './pages/CardPage'
import ReferPage from './pages/ReferPage'
import ReferDashboardPage from './pages/ReferDashboardPage'

export default function App() {
  return (
    <BrowserRouter basename="/zarp">
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/convert" element={<ConvertPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/refer" element={<ReferPage />} />
          <Route path="/refer/dashboard" element={<ReferDashboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
