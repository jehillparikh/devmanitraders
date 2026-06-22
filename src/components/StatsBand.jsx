import { useEffect, useRef } from 'react'
import './StatsBand.css'

export default function StatsBand() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          const target = parseFloat(el.dataset.target)
          const duration = 1200
          const start = performance.now()

          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 2.2)
            const val = target * eased

            if (target % 1 === 0) {
              el.textContent = Math.round(val).toLocaleString('en-IN')
            } else {
              el.textContent = val.toFixed(1)
            }

            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              if (target % 1 === 0) el.textContent = target.toLocaleString('en-IN')
              else el.textContent = target.toFixed(1)
            }
          }
          requestAnimationFrame(step)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.5 })

    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-band">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-cell reveal">
            <div className="stat-num">
              <span className="stat-prefix">₹</span>
              <span ref={el => refs.current[0] = el} data-target="180">0</span>
              <span className="stat-suffix">Cr+</span>
            </div>
            <div className="stat-label">Assets Under Advisory</div>
          </div>
          <div className="stat-cell reveal">
            <div className="stat-num">
              <span ref={el => refs.current[1] = el} data-target="280">0</span>
              <span className="stat-suffix">+</span>
            </div>
            <div className="stat-label">Investors Trust Us</div>
          </div>
          <div className="stat-cell reveal">
            <div className="stat-num">
              <span ref={el => refs.current[2] = el} data-target="600">0</span>
              <span className="stat-suffix">+</span>
            </div>
            <div className="stat-label">Active SIPs Running</div>
          </div>
          <div className="stat-cell reveal">
            <div className="stat-num">
              <span ref={el => refs.current[3] = el} data-target="30">0</span>
              <span className="stat-suffix">+</span>
            </div>
            <div className="stat-label">Years in the Industry</div>
          </div>
        </div>
      </div>
    </section>
  )
}
