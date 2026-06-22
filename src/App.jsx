import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

import Home from './pages/Home'
import About from './pages/About'
import TeamPage from './pages/TeamPage'
import ServicesPage from './pages/ServicesPage'
import Resources from './pages/Resources'

function App() {
  return (
    <>
      <Nav />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  )
}

export default App
