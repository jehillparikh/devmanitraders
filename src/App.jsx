import { useEffect } from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBand from './components/StatsBand'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import SIPCalculator from './components/SIPCalculator'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import ChatFab from './components/ChatFab'

function App() {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.reveal, .reveal-head, .reveal-fade').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <WhyUs />
        <Services />
        <HowItWorks />
        <Testimonials />
        <SIPCalculator />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <ChatFab />
    </>
  )
}

export default App
