import SIPCalculator from '../components/SIPCalculator'
import FAQ from '../components/FAQ'
import ContactCTA from '../components/ContactCTA'
import './Page.css'

export default function Resources() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner reveal-head">
            <div className="eyebrow">Tools & Resources</div>
            <h1>Run the numbers, then read up.</h1>
            <p>
              Calculators to help you plan, and answers to the questions investors ask us most frequently.
            </p>
          </div>
        </div>
      </div>
      <SIPCalculator />
      <FAQ />
      <ContactCTA />
    </main>
  )
}
