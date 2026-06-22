import { Routes, Route, useLocation } from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

import Home from './pages/Home'
import About from './pages/About'
import TeamPage from './pages/TeamPage'
import ServicesPage from './pages/ServicesPage'
import Resources from './pages/Resources'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import RiskAssessment from './pages/RiskAssessment'

function App() {
  const location = useLocation()

  return (
    <>
      <Nav />
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/risk-profile" element={<RiskAssessment />} />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  )
}

export default App
