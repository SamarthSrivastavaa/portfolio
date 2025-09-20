import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack",
      company: "Internship @CareSphere",
      period: "September 2025",
      type: "Upcoming",
      description: "",
      skills: ["React", "Nest.js", "Full Stack Development"]
    }
  ]

  return (
    <div id="experience" className="bg-black text-white py-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6">
   
        <motion.div
          className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <span className="text-orange-400 text-sm font-medium">Experience</span>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Companies I've worked with and the projects I've been involved in
          </p>
        </motion.div>

 
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
   
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-900/40 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                
           
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                      {experience.title}
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </h3>
                    <p className="text-lg text-blue-400 font-semibold">
                      {experience.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {experience.period}
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      experience.type === 'Current Position' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                    }`}>
                      {experience.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {experience.description}
                </p>
                  
                 
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Experience
