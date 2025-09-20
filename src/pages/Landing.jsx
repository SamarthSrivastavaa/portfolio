import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <div id="intro" className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-32">
        {/* Introduction Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-emerald-400 text-sm font-medium">Introduction</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Hi, I'm Samarth
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
            A Full Stack & Blockchain Developer experienced in crafting and shipping apps with modern technologies.
          </p>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I specialize in building web apps with{' '}
            <span className="text-blue-400 font-semibold">React</span>,{' '}
            <span className="text-yellow-400 font-semibold">JavaScript</span>,{' '}
            <span className="text-pink-400 font-semibold">Next.js</span>,{' '}
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span>,{' '}
            <span className="text-green-400 font-semibold">Node.js</span> and exploring the exciting world of{' '}
            <span className="text-purple-400 font-semibold">Web3</span> with hands-on experience in{' '}
            <span className="text-gray-300 font-semibold">Solidity</span> and currently working on{' '}
            <span className="text-purple-400 font-semibold">Solana</span> development.
          </p>
          <p className="text-gray-400">
            Passionate about bridging traditional web development with decentralized technologies. Always excited to tackle new challenges where I can create value and grow as a developer!
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <button
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            onClick={() => {
              // Open resume in new tab
              window.open('/SamarthResume.pdf', '_blank')
            }}
          >
            Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Skills Preview Section */}
      <div id="skills" className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Skills Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <span className="text-purple-400 text-sm font-medium">Skills</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        >
          Skills I have
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          Technologies and tools I've worked with and enjoy using
        </motion.p>

        {/* Skills Categories */}
        <div className="space-y-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="text-lg">•</span> Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'C', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
                { name: 'C++', color: 'text-blue-300', bg: 'bg-blue-300/10 border-blue-300/20' },
                { name: 'Java', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
                { name: 'Python', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
                { name: 'JavaScript', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' },
                { name: 'TypeScript', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
                { name: 'SQL', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
                { name: 'Solidity', color: 'text-gray-300', bg: 'bg-gray-300/10 border-gray-300/20' },
                { name: 'Rust', color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' }
              ].map((skill, index) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-lg border ${skill.bg} ${skill.color} font-medium text-sm`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Technologies & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="text-lg">•</span> Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'ReactJS', color: 'text-cyan-400', bg: 'bg-cyan-400/10 border-cyan-400/20' },
                { name: 'Next.js', color: 'text-white', bg: 'bg-white/10 border-white/20' },
                { name: 'Node.js', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
                { name: 'Express.js', color: 'text-gray-300', bg: 'bg-gray-300/10 border-gray-300/20' },
                { name: 'NestJS', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
                { name: 'MongoDB', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
                { name: 'PostgreSQL', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
                { name: 'VS Code', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
                { name: 'Git', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
                { name: 'GitHub', color: 'text-gray-300', bg: 'bg-gray-300/10 border-gray-300/20' },
                { name: 'Solana SDK', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
                { name: 'HTML', color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
                { name: 'Tailwind', color: 'text-cyan-300', bg: 'bg-cyan-300/10 border-cyan-300/20' },
                { name: 'Bootstrap', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
                { name: 'FastAPI', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
                { name: 'Django', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
                { name: 'React Native', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' }
              ].map((skill, index) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-lg border ${skill.bg} ${skill.color} font-medium text-sm`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Domains & Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="text-lg">•</span> Domains & Expertise
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Web Development', color: 'text-cyan-400', bg: 'bg-cyan-400/10 border-cyan-400/20' },
                { name: 'Blockchain Development (Solana, Ethereum)', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
                { name: 'App Development', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
                { name: 'Data Structures & Algorithm', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' }
              ].map((skill, index) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-lg border ${skill.bg} ${skill.color} font-medium text-sm`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Landing