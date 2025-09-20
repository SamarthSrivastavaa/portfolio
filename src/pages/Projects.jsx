import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Capsule",
      description: "A Web3 based platform to message your future self - talk to them, give advice, share anything and lock it until the time comes. Deployed on L1 Testnet EVM Blockchain.",
      image: "/capsule.jpg",
      technologies: ["React", "Web3", "Solidity", "EVM Blockchain"],
      liveUrl: "https://f-letter-two.vercel.app/",
      githubUrl: "https://github.com/SamarthSrivastavaa/fLetter"
    },
    {
      id: 2,
      name: "Cryptic",
      description: "A platform that implements steganography where you can encode a message in the pixels of an image and reveal it using a key only.",
      image: "/cryptic.jpg",
      technologies: ["React", "Steganography", "Image Processing", "Cryptography"],
      liveUrl: "https://cryptic-one.vercel.app/",
      githubUrl: "https://github.com/SamarthSrivastavaa/stegano"
    },
    {
      id: 3,
      name: "Agency",
      description: "An agency site built for my freelance and dev team for a one stop reach out and organisation.",
      image: "/agency.jpg",
      technologies: ["React", "Freelance Platform", "Team Management", "Portfolio"],
      liveUrl: "https://buildmydream.vercel.app/",
      githubUrl: "https://github.com/SamarthSrivastavaa/agn"
    },
    {
      id: 4,
      name: "EcoSync",
      description: "A dashboard frontend that visualises a mine's LCA (Life Cycle Assessment) and circularity assessment and maintenance.",
      image: "/dashboard.jpg",
      technologies: ["React", "Data Visualization", "LCA Analysis", "Dashboard"],
      liveUrl: "https://ecosync-five.vercel.app/",
      githubUrl: "https://github.com/SamarthSrivastavaa/ecoSync"
    }
  ]

  return (
    <div id="projects" className="bg-black text-white py-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Projects Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          <span className="text-pink-400 text-sm font-medium">Projects</span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore some of the projects I've worked on. These showcase my skills and expertise in various domains of software development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {/* Project Card */}
              <div className="grid md:grid-cols-2 gap-6 bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 hover:bg-gray-900/40 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                {/* Project Image */}
                <div className="aspect-video md:aspect-square p-6 flex items-center justify-center">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="max-w-full max-h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        title="View Live Project"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        title="View Source Code"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects