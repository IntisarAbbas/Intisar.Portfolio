import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold">GET TO KNOW</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600"
              alt="About"
              className="relative rounded-3xl border border-white/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Frontend Developer from Pakistan 🇵🇰</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                With 3+ years in web development, I've helped 50+ clients transform their ideas into 
                high-converting digital products. I specialize in the MERN stack and love building 
                scalable applications that users actually enjoy using.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Projects', value: '50+' },
                  { label: 'Clients', value: '30+' },
                  { label: 'Experience', value: '3 Years' },
                  { label: 'Awards', value: '5+' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full font-semibold"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About