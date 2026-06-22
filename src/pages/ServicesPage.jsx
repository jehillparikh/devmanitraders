import Services from '../components/Services'
import ContactCTA from '../components/ContactCTA'
import './Page.css'

export default function ServicesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner reveal-head">
            <div className="eyebrow">Our Services</div>
            <h1>A complete financial ecosystem.</h1>
            <p>
              From mutual funds and direct equity to fixed income and insurance, we provide comprehensive solutions to structure, grow, and protect your wealth.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <ContactCTA />
    </main>
  )
}
