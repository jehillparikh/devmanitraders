import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid reveal-head">
          <div className="footer-brand">
            <span className="brand-name">Devmani Traders</span>
            <div className="brand-sub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/>
              </svg>
              Authorised Partner, Kotak Securities
            </div>
            <p>An AMFI-registered Mutual Fund Distributor based in Mumbai, helping investors plan and invest with clarity since 1990.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1 8.98h4V23H1V8.98zM8.5 8.98h3.83v1.97h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.92c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8.98z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-col reveal">
            <h4>Quick Links</h4>
            <Link to="/about">About Us</Link>
            <Link to="/team">Team</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/risk-profile">Risk Profiler</Link>
            <Link to="/resources">Resources</Link>
          </div>
          <div className="footer-col reveal">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Disclaimer</a>
            <a href="#">Grievance Redressal</a>
          </div>
          <div className="footer-col reveal">
            <h4>Contact</h4>
            <p>109-110, Horniman Circle Chambers,<br/>Fort, Mumbai – 400 001</p>
            <a href="tel:+912242134213">+91-22-4213 4213</a>
            <a href="mailto:contactus@devmanitraders.com">contactus@devmanitraders.com</a>
          </div>
        </div>

        <div className="footer-legal reveal-fade">
          <strong>Disclaimer:</strong> Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns. Devmani Traders Pvt. Ltd. is an AMFI-registered Mutual Fund Distributor (ARN: ARN-10356) and an Authorised Partner of Kotak Securities. The information on this website is for general educational purposes only and does not constitute investment, tax, or legal advice. Devmani Traders Pvt. Ltd. does not guarantee returns under any scheme. Please consult your advisor before making any investment decision.
        </div>
        <div className="footer-bottom reveal-fade">
          <span>© 2026 Devmani Traders Pvt. Ltd. All rights reserved.</span>
          <span>Mumbai, India</span>
        </div>
      </div>
    </footer>
  )
}
