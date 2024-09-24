import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'
import { Achievements } from './components/Achievements'
import { Academics } from './components/Academics'
import { Loading } from './components/Loading'

const NavItem = ({ to, children }) => (
  <motion.li
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to} className="text-white hover:text-primary transition-colors">
      {children}
    </Link>
  </motion.li>
)

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <AnimatePresence>
          {loading ? (
            <Loading key="loading" />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <nav className="p-4">
                <ul className="flex justify-center space-x-6">
                  <NavItem to="/">Home</NavItem>
                  <NavItem to="/about">About</NavItem>
                  <NavItem to="/academics">Academics</NavItem>
                  <NavItem to="/contact">Contact</NavItem>
                  <NavItem to="/projects">Projects</NavItem>
                  <NavItem to="/achievements">Achievements</NavItem>
                </ul>
              </nav>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achievements" element={<Achievements />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  )
}