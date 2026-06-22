import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blogs'
import './SIPCalculator.css'

export default function SIPCalculator() {
  const [amount, setAmount] = useState(5000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  const [results, setResults] = useState({ invested: 0, returns: 0, maturity: 0 })

  useEffect(() => {
    const P = amount
    const n = years * 12
    const i = rate / 100 / 12

    const maturity = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
    const invested = P * n
    const returns = maturity - invested

    setResults({ invested, returns, maturity })
  }, [amount, rate, years])

  const fmt = n => '₹' + Math.round(n).toLocaleString('en-IN')

  return (
    <section className="calc-section section" id="calculator">
      <div className="container">
        <div className="section-head reveal-head">
          <div className="eyebrow">Tools & Resources</div>
          <h2>Run the numbers, then read up.</h2>
          <p>A quick calculator, a market note, and a few explainers — useful, but not the main event.</p>
        </div>

        <div className="calc-grid">
          {/* Left: Calculator */}
          <div className="calc-wrap reveal">
            <div className="calc-inputs">
              <div className="calc-field">
                <label>Monthly Investment <span>{fmt(amount)}/mo</span></label>
                <input 
                  type="range" min="500" max="100000" step="500" 
                  value={amount} onChange={e => setAmount(Number(e.target.value))} 
                />
              </div>
              <div className="calc-field">
                <label>Expected Annual Return <span>{rate}%</span></label>
                <input 
                  type="range" min="6" max="18" step="0.5" 
                  value={rate} onChange={e => setRate(Number(e.target.value))} 
                />
              </div>
              <div className="calc-field">
                <label>Time Period <span>{years} Years</span></label>
                <input 
                  type="range" min="1" max="30" step="1" 
                  value={years} onChange={e => setYears(Number(e.target.value))} 
                />
              </div>
            </div>
            <div className="calc-results">
              <div className="res-row">
                <span>Total Invested</span>
                <span>{fmt(results.invested)}</span>
              </div>
              <div className="res-row">
                <span>Estimated Returns</span>
                <span>{fmt(results.returns)}</span>
              </div>
              <div className="res-row total">
                <span>Maturity Value</span>
                <span>{fmt(results.maturity)}</span>
              </div>
              <p className="calc-note">For illustration only — talk to an advisor for a plan based on your actual goals.</p>
            </div>
          </div>

          {/* Right: Insights */}
          <div className="insights-col">
            <div className="side-card reveal" style={{transitionDelay: '100ms'}}>
              <div className="card-head">
                <span className="card-title">Devmani Desk Note</span>
                <span className="card-date">{new Date().toLocaleDateString('en-IN', {day:'numeric', month:'short', year:'numeric'})}</span>
              </div>
              <p>Bullish sentiment is gradually returning to mid- and small-cap categories after the recent correction — a reasonable window for staggered deployment via SIP or STP.</p>
              <p className="card-disclaimer">Educational, not personalised investment advice.</p>
            </div>

            <div className="side-card reveal" style={{transitionDelay: '200ms'}}>
              <span className="eyebrow" style={{marginBottom: '12px'}}>Latest Insights</span>
              <div className="insight-list">
                {BLOG_POSTS.slice(0, 3).map(post => (
                  <Link to={`/blog/${post.slug}`} key={post.id} className="insight-row" style={{textDecoration: 'none'}}>
                    <div>
                      <div className="insight-title">{post.title}</div>
                      <div className="insight-tag">{post.category}</div>
                    </div>
                    <span className="insight-arrow">→</span>
                  </Link>
                ))}
              </div>
              <Link to="/blog" className="view-all">View all insights →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
