import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const TABS = [
  { id: 'mf', label: 'Mutual Funds' },
  { id: 'sif', label: 'SIF' },
  { id: 'equity', label: 'Equity Broking' },
  { id: 'fixed', label: 'Fixed Deposits & Bonds' },
  { id: 'insurance', label: 'Life & General Insurance' },
  { id: 'loans', label: 'Loans' },
]

const CONTENT = {
  mf: {
    icon: <><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/></>,
    title: 'Mutual Funds',
    desc: 'SIP, STP and SWP strategy across equity, debt and hybrid categories — matched to your risk profile and reviewed on a schedule, not left on autopilot.',
    chips: ['SIP', 'STP', 'SWP', 'Lumpsum', 'ELSS Tax-Saving'],
    rows: [
      ['Minimum SIP', '₹500/mo'],
      ['Categories Covered', 'Equity · Debt · Hybrid'],
      ['Review Cycle', 'Quarterly']
    ]
  },
  sif: {
    icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
    title: 'Systematic Investment Framework (SIF)',
    desc: 'Our proprietary approach to wealth building. SIF removes emotion from the equation through systematic deployment, strategic allocation, and scheduled rebalancing.',
    chips: ['Rules-based', 'Emotion-free', 'Long-term wealth'],
    rows: [
      ['Approach', 'Systematic'],
      ['Rebalancing', 'Scheduled'],
      ['Focus', 'Asset Allocation']
    ]
  },
  equity: {
    icon: <path d="M3 17l6-6 4 4 8-8"/>,
    title: 'Equity Broking',
    desc: 'Direct market access for investors who want equity exposure alongside their fund portfolio, not instead of it.',
    chips: ['Trading & Demat Account', 'Direct Equity', 'IPO Applications'],
    rows: [
      ['Access', 'Trading + Demat'],
      ['Powered By', 'Kotak Securities'],
      ['Best Suited For', 'Active investors']
    ]
  },
  fixed: {
    icon: <path d="M4 19h16M4 15h10M4 11h16M4 7h10"/>,
    title: 'Fixed Deposits & Bonds',
    desc: 'Stable, paperless options for the conservative portion of your portfolio — for capital that needs to stay safe, not chase returns.',
    chips: ['Fixed Deposits', 'Bonds', 'Corporate FDs'],
    rows: [
      ['Risk Profile', 'Low'],
      ['Process', '100% Paperless'],
      ['Best Suited For', 'Capital preservation']
    ]
  },
  insurance: {
    icon: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/>,
    title: 'Life & General Insurance',
    desc: 'Life and general cover assessed alongside your investments, not sold as a stand-alone product. Cover comes first; the policy follows from it.',
    chips: ['Term Life Insurance', 'Health Insurance', 'General Insurance'],
    rows: [
      ['Cover Types', 'Life · General'],
      ['Assessment', 'Need-based'],
      ['Sold Standalone', 'Never']
    ]
  },
  loans: {
    icon: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></>,
    title: 'Loans',
    desc: 'Business and personal loans, plus liquidity against your existing holdings — your investments stay invested, and growing, while you borrow against them.',
    chips: ['Business Loans', 'Personal Loans', 'Loan Against Securities', 'Loan Against Mutual Funds'],
    rows: [
      ['Types', 'Business · Personal'],
      ['Also Secured Against', 'Funds / Shares'],
      ['Holdings Disturbed', 'No']
    ]
  }
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('mf')
  const data = CONTENT[activeTab]

  return (
    <section className="services-section section" id="services">
      <div className="container">
        <div className="section-head reveal-head">
          <div className="eyebrow">What We Do</div>
          <h2>Six core areas, one advisor.</h2>
          <p>Pick a category to see what's inside it.</p>
        </div>

        <div className="tab-buttons reveal">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`tab-btn ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="tab-panel" key={activeTab}>
          <div className="tab-content">
            <div className="tab-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {data.icon}
              </svg>
            </div>
            <h3>{data.title}</h3>
            <p className="tab-desc">{data.desc}</p>
            <div className="tab-chips">
              {data.chips.map(c => <span key={c} className="chip">{c}</span>)}
            </div>
            {activeTab === 'sif' && (
              <div style={{ marginBottom: '24px' }}>
                <Link to="/blog/what-is-sif" className="btn btn-outline btn-sm">
                  What is SIF?
                </Link>
              </div>
            )}
            {activeTab === 'equity' && (
              <div style={{ marginBottom: '24px' }}>
                <a href="https://www.kotakneo.com/open-demat-account/" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  Open an Account
                </a>
              </div>
            )}
            <a href="#contact" className="tab-link">Talk to an advisor →</a>
          </div>

          <div className="tab-visual">
            {data.rows.map((row, i) => (
              <div key={i} className="tab-visual-row">
                <span>{row[0]}</span>
                <span>{row[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
