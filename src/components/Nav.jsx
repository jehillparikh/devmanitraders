import { useState, useEffect, useRef } from 'react'
import './Nav.css'

const NAV_LINKS = [
  { label: 'About', href: '#why' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Tools', href: '#calculator' },
  { label: 'FAQs', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
      <div className="nav-inner container">
        {/* Brand */}
        <a href="#" className="brand" onClick={close}>
          <span className="brand-name">Devmani Traders</span>
          <span className="brand-sub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/>
            </svg>
            Authorised Partner, Kotak Securities
          </span>
        </a>

        {/* Desktop links */}
        <nav className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="nav-ctas">
          <a href="#calculator" className="btn btn-outline btn-sm">Plan Your SIP</a>
          <a href="#contact" className="btn btn-primary btn-sm">Talk to an Advisor</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="drawer-link" onClick={close}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={close} style={{marginTop:'16px'}}>Talk to an Advisor</a>
        </nav>
      </div>
    </header>
  )
}
