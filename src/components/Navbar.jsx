import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Portfolio
        </motion.h1>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a 
              key={i}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-cyan-400 transition font-medium"
            >
              {link}
            </motion.a>
          ))}
        </div>

        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full font-semibold"
        >
          Hire Me
        </motion.a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-linear-to-r from-blue-00 to-cyan-500  backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link, i) => (
                <a 
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 py-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar