import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Developer Portfolio',
      desc: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations using Framer Motion, glassmorphism UI design, and optimized performance. Fully mobile-friendly with dark theme.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      live: '#',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600'
    },
    {
      title: 'Weather Forecast App',
      desc: 'Real-time weather application using OpenWeather API. Search any city to view current temperature, humidity, wind speed, and 5-day forecast. Built with React hooks for state management and async data fetching.',
      tech: ['React.js', 'CSS3', 'JavaScript', 'REST API'],
      github: 'https://content-forge-ai-gamma.vercel.app',
      live: '#',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600'
    },
    {
      title: 'Task Manager Pro',
      desc: 'Feature-rich todo application with CRUD operations. Add, edit, delete, and mark tasks as complete. Includes filter options: All, Active, Completed. Data persists using Local Storage. Clean UI with dark mode support.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
      github: 'https://github.com/yourusername/task-manager',
      live: '#',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600'
    },
    {
      title: 'E-Commerce Landing Page',
      desc: 'Modern responsive landing page for an online store. Includes hero section, product grid, featured items, and checkout UI. Styled entirely with Tailwind CSS utility classes. Smooth scroll and hover animations.',
      tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/yourusername/ecommerce-landing',
      live: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600'
    },
  ]

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold">MY WORK</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2">My Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition group"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects