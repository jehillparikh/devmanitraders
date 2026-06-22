import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

export default function PageTransition({ children }) {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Re-run intersection observer for reveal animations on every page change
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' })

      const els = document.querySelectorAll('.reveal, .reveal-head, .reveal-fade')
      els.forEach(el => observer.observe(el))

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className="page-transition" key={pathname}>
      {children}
    </div>
  )
}
