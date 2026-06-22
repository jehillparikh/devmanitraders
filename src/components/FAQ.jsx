import { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    q: 'What is Devmani Traders Pvt. Ltd.?',
    a: 'Devmani Traders Pvt. Ltd. is a Mumbai-based, AMFI-registered Mutual Fund Distributor and Authorised Partner of Kotak Securities, helping investors with Mutual Funds, Direct Equity, and goal-based financial planning.'
  },
  {
    q: 'Is Devmani Traders registered with AMFI and SEBI?',
    a: 'Yes. We operate as an AMFI-registered Mutual Fund Distributor (ARN: [add ARN number]) and follow applicable SEBI guidelines for distribution activities.'
  },
  {
    q: 'What is the minimum amount to start a SIP?',
    a: 'Most SIPs can be started from as little as ₹500 per month, depending on the scheme. Your relationship manager will confirm the minimum for the specific fund you choose.'
  },
  {
    q: 'How is investing through Devmani different from going directly to an AMC?',
    a: 'You get a dedicated relationship manager, comparison across AMCs rather than a single fund house, and ongoing portfolio review — without changing what you pay in the fund itself.'
  },
  {
    q: 'Is my money safe when I invest through a distributor?',
    a: 'Your investments sit directly with the AMC/registrar in your name — we never hold your money. Devmani Traders only facilitates the transaction and provides advisory support.'
  },
  {
    q: 'How do I track my portfolio?',
    a: 'You\'ll receive regular statements, and your relationship manager can walk you through performance at any time. A self-serve portfolio dashboard is on our roadmap.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(-1)

  const toggle = (i) => setOpen(open === i ? -1 : i)

  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <div className="section-head reveal-head">
          <div className="eyebrow">FAQs</div>
          <h2>Questions investors ask us first.</h2>
        </div>
        
        <div className="faq-list reveal">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {faq.q}
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-a-wrapper">
                <p className="faq-a">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
