import Hero from '../components/Hero'
import StatsBand from '../components/StatsBand'
import HowItWorks from '../components/HowItWorks'
import TestimonialMarquee from '../components/TestimonialMarquee'
import ContactCTA from '../components/ContactCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBand />
      <HowItWorks />
      <TestimonialMarquee />
      <ContactCTA />
    </main>
  )
}
