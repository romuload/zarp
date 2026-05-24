import './ProgressBar.css'

export default function ProgressBar({ total = 4, active = 0 }) {
  return (
    <div className="progress-bar">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`progress-bar__seg${i === active ? ' progress-bar__seg--active' : ''}`}
        />
      ))}
    </div>
  )
}
