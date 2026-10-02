import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >        
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Intisar Abbas</span>
           
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold text-gray-400 mb-6 h-20">
            <TypeAnimation
              sequence={[
                'frontend Developer', 2000,
                'React.js Expert', 2000,
                'tailwind Expert', 2000,
                'Js Expert', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          I build fast, responsive, and modern web applications using React.js, JavaScript, and Tailwind CSS.
          I enjoy creating clean user interfaces and continuously learning new technologies.           
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30"
          >
             <span className="text-cyan-400 text-sm">👋 Available for All Time</span>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
            >
              View My Work <FaArrowRight />
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition">
              Contact Me
            </motion.a>
          </div>

          <div className="flex gap-6 mt-12">
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-2xl text-gray-400 hover:text-cyan-400 transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="/images/mypic.jpeg"
              alt="Profile"
              className="relative z-10 w-full h-[120%] object-cover rounded-4xl border border-white/10 p-4"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero