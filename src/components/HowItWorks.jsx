import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <section className="how-section section" id="how">
      <div className="container">
        <div className="section-head reveal-head">
          <div className="eyebrow">How It Works</div>
          <h2>From conversation to invested, in three steps.</h2>
          <p>
            We've kept this deliberately short — the goal is to get you investing, not stuck in paperwork.
          </p>
        </div>
        <div className="how-grid">
          <div className="how-step reveal">
            <div className="how-num">01</div>
            <h3>Share Your Goals</h3>
            <p>A 15-minute conversation about what you're investing for and by when.</p>
          </div>
          <div className="how-step reveal" style={{ transitionDelay: '60ms' }}>
            <div className="how-num">02</div>
            <h3>Get a Personalised Plan</h3>
            <p>A recommendation built around your goals, risk profile, and timeline — explained plainly.</p>
          </div>
          <div className="how-step reveal" style={{ transitionDelay: '120ms' }}>
            <div className="how-num">03</div>
            <h3>Invest & Track</h3>
            <p>Start your SIP and track everything in one place, with a relationship manager you can call.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
