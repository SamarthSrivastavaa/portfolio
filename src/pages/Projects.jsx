import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "EcoSync",
      subtitle: "Sustainability Intelligence",
      description: "Advanced sustainability intelligence platform for mining and metallurgy industries. Features real-time environmental monitoring, compliance tracking, and AI-powered impact analysis with predictive risk intelligence.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80", // Environmental/sustainability theme
      link: "https://ecosync-five.vercel.app/",
      tech: ["React", "AI/ML", "Real-time Analytics", "Environmental Data"],
      category: "SaaS Platform",
      stats: { accuracy: "98.5%", monitoring: "24/7", integration: "95%" },
      color: "#10B981", // Emerald green for sustainability
      gradient: "from-emerald-500/20 to-green-600/20"
    },
    {
      id: 2,
      title: "BuildMyDream",
      subtitle: "Dream Project Builder",
      description: "A comprehensive platform that helps users build and visualize their dream projects with intuitive tools, collaborative features, and seamless project management capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Business/planning theme
      link: "https://buildmydream.vercel.app/",
      tech: ["React", "Project Management", "Visualization", "Collaboration"],
      category: "Productivity Tool",
      stats: { users: "10K+", projects: "50K+", satisfaction: "96%" },
      color: "#3B82F6", // Blue for productivity
      gradient: "from-blue-500/20 to-indigo-600/20"
    },
    {
      id: 3,
      title: "F-Letter",
      subtitle: "Creative Typography Platform",
      description: "An innovative platform focused on creative typography and letter design, offering unique tools for designers and creative professionals to craft stunning typographic experiences.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80", // Design/typography theme
      link: "https://f-letter-two.vercel.app/",
      tech: ["React", "Typography Engine", "Design Tools", "Creative Suite"],
      category: "Design Platform",
      stats: { fonts: "500+", designs: "25K+", downloads: "100K+" },
      color: "#8B5CF6", // Purple for creativity
      gradient: "from-purple-500/20 to-violet-600/20"
    },
    {
      id: 4,
      title: "Cryptic",
      subtitle: "Blockchain Analytics",
      description: "Advanced blockchain analytics and cryptocurrency tracking platform with real-time market data, portfolio management, and sophisticated trading insights for crypto enthusiasts.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80", // Crypto/blockchain theme
      link: "https://cryptic-one.vercel.app/",
      tech: ["React", "Blockchain APIs", "Real-time Data", "Analytics"],
      category: "FinTech Platform",
      stats: { coins: "15K+", accuracy: "99.2%", uptime: "99.9%" },
      color: "#F59E0B", // Amber/gold for crypto
      gradient: "from-amber-500/20 to-orange-600/20"
    }
  ]

  return (
    <div className="relative flex flex-col w-full bg-black text-white">
      {/* Same background as other pages */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "#000000",
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 px-6 pt-24 pb-8">
          <div className="w-full ml-20">
            {/* Header Section */}
            <motion.div
              className="mb-12 transform ml-4 sm:ml-6 md:ml-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h1 className="text-[70px] sm:text-[100px] font-extrabold text-sky-300 mb-6 tracking-wide" 
                  style={{WebkitTextStroke: '2px white', textStroke: '2px white'}}>
                Projects
              </h1>
              <div className="h-[2px] w-24 bg-gradient-to-r from-sky-300 to-transparent"></div>
              <p className="text-slate-400 mt-8 text-lg max-w-2xl">
                A showcase of innovative solutions I've built across web2, web3, and emerging technologies
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="px-8 relative">
              {/* Subtle background fade */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-radial from-slate-800/15 via-slate-900/8 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/5 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-radial from-sky-900/4 via-transparent to-transparent"></div>
              </div>
              
              <div className="relative z-10 py-12">
                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                      onClick={() => window.open(project.link, '_blank')}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.15,
                        ease: [0.22, 0.61, 0.36, 1] 
                      }}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      {/* Project Card */}
                      <div className={`bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-sky-300/30 group-hover:shadow-sky-400/10 group-hover:shadow-2xl h-[580px] flex flex-col`}>
                        
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-slate-200">
                              {project.category}
                            </span>
                          </div>
                          
                          {/* External Link Icon */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="w-8 h-8 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="flex-1 p-6 flex flex-col">
                          {/* Title & Subtitle */}
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-sky-400 font-medium text-sm">
                              {project.subtitle}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="px-2 py-1 text-xs bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-700/30">
                            {Object.entries(project.stats).map(([key, value], statIndex) => (
                              <div key={statIndex} className="text-center">
                                <div className="text-lg font-bold text-sky-300">
                                  {value}
                                </div>
                                <div className="text-xs text-slate-400 capitalize">
                                  {key}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      {hoveredProject === index && (
                        <motion.div
                          className="absolute -inset-1 rounded-3xl pointer-events-none"
                          style={{
                            background: `radial-gradient(circle, ${project.color}20 0%, ${project.color}10 40%, transparent 70%)`,
                            boxShadow: `0 0 40px ${project.color}30, 0 0 80px ${project.color}20`,
                          }}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Section */}
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="bg-slate-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-sky-300 mb-4">More Projects Coming Soon</h3>
                  <p className="text-slate-400 leading-relaxed">
                    I'm constantly building and experimenting with new technologies. 
                    Check back for more innovative solutions and creative projects!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
