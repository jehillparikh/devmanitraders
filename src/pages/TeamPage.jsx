import Team from '../components/Team'
import ContactCTA from '../components/ContactCTA'
import './Page.css'

export default function TeamPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner reveal-head">
            <div className="eyebrow">Leadership</div>
            <h1>Experienced, accessible, and grounded.</h1>
            <p>
              We believe great wealth management comes from a small, highly capable team that actually knows your portfolio.
            </p>
          </div>
        </div>
      </div>
      <Team />
      <ContactCTA />
    </main>
  )
}
