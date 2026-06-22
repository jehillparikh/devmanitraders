import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const TAGLINES = [
  'Wealth, planned with the discipline of a ledger.',
  'Your money deserves more than guesswork.',
  'Disciplined investing. Honest advice. Real growth.',
  '280+ investors trust us with their goals.',
  'Backed by Kotak Securities. Driven by your goals.',
]

const TRUST = [
  'AMFI Registered',
  'Kotak Securities Partner',
  'SEBI-Compliant Advisory',
  '35+ Yrs Leadership Experience',
]

const STATS = [
  { prefix: '₹', num: 180, suffix: 'Cr+', label: 'Assets Under Advisory' },
  { num: 280, suffix: '+', label: 'Investors Guided' },
  { num: 600, suffix: '+', label: 'Active SIPs Running' },
  { num: 30, suffix: '+', label: 'Years in the Industry' },
]

function useTypewriter(texts) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let cancelled = false
    const text = texts[idx]
    let i = 0
    const TYPE = 40
    const ERASE = 20
    const HOLD = 2400

    function type() {
      if (cancelled) return
      if (i <= text.length) {
        setDisplay(text.slice(0, i))
        i++
        ref.current = setTimeout(type, TYPE)
      } else {
        ref.current = setTimeout(erase, HOLD)
      }
    }
    function erase() {
      if (cancelled) return
      if (i >= 0) {
        setDisplay(text.slice(0, i))
        i--
        ref.current = setTimeout(erase, ERASE)
      } else {
        setIdx(x => (x + 1) % texts.length)
      }
    }
    ref.current = setTimeout(type, 300)
    return () => { cancelled = true; clearTimeout(ref.current) }
  }, [idx, texts])

  return display
}

export default function Hero() {
  const headline = useTypewriter(TAGLINES)

  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left — text */}
          <div className="hero-left">
            <p className="eyebrow hero-eyebrow">
              AMFI-Registered Mutual Fund Distributor · Mumbai
            </p>
            <h1 className="hero-h1" aria-live="polite">
              {headline}
              <span className="tw-cursor" aria-hidden="true">|</span>
            </h1>
            <p className="hero-sub">
              Devmani Traders Pvt. Ltd. helps individuals and families plan, invest,
              and stay invested — through Mutual Funds, Direct Equity, and goal-based
              advisory. Backed by 30+ years in the industry and an Authorised
              Partnership with Kotak Securities.
            </p>
            <div className="hero-ctas">
              <a href="#calculator" className="btn btn-primary">Start Investing</a>
              <a href="#contact" className="btn btn-outline">Talk to an Advisor</a>
            </div>
            <div className="trust-strip">
              {TRUST.map(t => (
                <span key={t} className="trust-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — ledger card */}
          <div className="ledger-card reveal">
            <div className="ledger-card-head">
              <span className="ledger-card-title">Devmani — Portfolio Ledger</span>
              <span className="ledger-live">
                <span className="live-dot" />
                Updated Today
              </span>
            </div>
            {STATS.map(s => (
              <div key={s.label} className="ledger-row">
                <span className="ledger-label">{s.label}</span>
                <span className="ledger-val">
                  {s.prefix || ''}{s.num}{s.suffix}
                </span>
              </div>
            ))}
            <p className="ledger-foot">Figures self-reported as of June 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}
