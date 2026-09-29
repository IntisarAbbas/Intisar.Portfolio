import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
    { name: 'JavaScript', icon: <SiJavascript />, level: 88, color: '#F7DF1E' },
    { name: 'React.js', icon: <FaReact />, level: 92, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95, color: '#06B6D4' },
  ]

  return (
    <section id="skills" className="py-32 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold">MY EXPERTISE</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2">Tech Stack</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition"
            >
              <div className="text-5xl mb-4" style={{ color: skill.color }}>{skill.icon}</div>
              <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
              <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500"
                />
              </div>
              <span className="text-sm text-gray-400">{skill.level}% Proficiency</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills