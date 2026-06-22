import WhyUs from '../components/WhyUs'
import LeaderQuote from '../components/LeaderQuote'
import TestimonialMarquee from '../components/TestimonialMarquee'
import ContactCTA from '../components/ContactCTA'
import './Page.css'

export default function About() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner reveal-head">
            <div className="eyebrow">About Us</div>
            <h1>Thirty-five years of the same business.</h1>
            <p>
              Devmani Traders Pvt. Ltd. was started in Mumbai to do one thing well — help individual investors plan and invest with clarity. We're still doing that.
            </p>
          </div>
        </div>
      </div>
      <WhyUs />
      <LeaderQuote />
      <TestimonialMarquee />
      <ContactCTA />
    </main>
  )
}
