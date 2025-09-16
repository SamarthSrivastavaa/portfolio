import React, { useState } from 'react'
import { motion } from 'framer-motion'

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null)

  const techCategories = [
    {
      title: "Frontend",
      techs: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
        { name: "TanStack Query", icon: "https://tanstack.com/_build/assets/logo-color-600w-Bx4vtR8J.png", color: "#FF4154" },
      ]
    },
    {
      title: "Backend",
      techs: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
        { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg", color: "#E0234E" },
      ]
    },
    {
      title: "Database",
      techs: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
      ]
    },
    {
      title: "Blockchain",
      techs: [
        { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg", color: "#363636" },
        { name: "Ethereum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg", color: "#627EEA" },
        { name: "Solana", icon: "https://solana.com/_next/static/media/logotype-dark.f79d530d.svg", color: "#00FFA3" },
        { name: "Wagmi", icon: "https://wagmi.sh/logo-dark.svg", color: "#1C1C1C" },
      ]
    },
    {
      title: "Development Tools",
      techs: [
        { name: "Hardhat", icon: "https://hardhat.org/assets/img/hardhat-logo.svg", color: "#FFF100" },
        { name: "Foundry", icon: "https://book.getfoundry.sh/images/foundry-banner.png", color: "#FF6B35" },
        { name: "Ganache", icon: "https://trufflesuite.com/img/ganache-logo-dark.svg", color: "#E4A663" },
      ]
    },
    {
      title: "Languages",
      techs: [
        { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg", color: "#CE422B" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#A8B9CC" },
      ]
    }
  ]

  return (
    <div className="relative min-h-screen flex flex-col w-full bg-black text-white">
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
        <div className="flex-1 px-6 pt-44 pb-12">
          <div className="w-full ml-20">
            {/* Header Section - Left Aligned */}
            <motion.div
              className="mb-20 transform ml-4 sm:ml-6 md:ml-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h1 className="text-[70px] sm:text-[100px] font-extrabold text-sky-300 mb-6 tracking-wide" 
                  style={{WebkitTextStroke: '2px white', textStroke: '2px white'}}>
                Tech Stack
              </h1>
              <div className="h-[2px] w-24 bg-gradient-to-r from-sky-300 to-transparent"></div>
              <p className="text-slate-400 mt-8 text-lg max-w-2xl">
                The technologies I use to build amazing digital experiences
              </p>
            </motion.div>

          
            <div className="px-8 relative">
              {/* Edge Fading Background */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Main radial fade from center to edges */}
                <div className="absolute inset-0 bg-gradient-radial from-slate-800/25 via-slate-900/15 via-slate-900/8 to-transparent"></div>
                
                {/* Edge vignette effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/8 to-transparent"></div>
                
                {/* Color accent fade */}
                <div className="absolute inset-0 bg-gradient-radial from-sky-900/6 via-transparent via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-radial from-purple-900/4 via-transparent via-transparent to-transparent"></div>
                
                {/* Subtle backdrop blur for glass effect */}
                <div className="absolute inset-0 backdrop-blur-[1px] bg-slate-900/3"></div>
                
                {/* Pattern that fades at edges */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.1) 1px, transparent 0),
                    radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.8) 100%)
                  `,
                  backgroundSize: "40px 40px, 100% 100%"
                }}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 py-16">
              {/* First Row - 7 icons */}
              <div className="flex justify-center mb-16">
                <div className="grid grid-cols-7 gap-12">
                {techCategories.flatMap(category => category.techs).slice(0, 7).map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredTech(index)}
                    onMouseLeave={() => setHoveredTech(null)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.03,
                      ease: [0.22, 0.61, 0.36, 1] 
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -8,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  >
                    {/* Tech Card */}
                    <div className="bg-gradient-to-br from-slate-800/25 via-slate-900/30 to-slate-800/25 backdrop-blur-sm border border-white/10 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center shadow-xl transition-all duration-300 group-hover:border-sky-300/40 group-hover:shadow-sky-400/20 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-sky-900/15 group-hover:via-slate-800/35 group-hover:to-purple-900/15">
                      <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        <img 
                          src={tech.icon} 
                          alt={tech.name}
                          className="w-full h-full object-contain filter transition-all duration-300 group-hover:drop-shadow-lg"
                          style={{
                            filter: hoveredTech === index 
                              ? `drop-shadow(0 0 16px ${tech.color}80) brightness(1.2) saturate(1.3)` 
                              : 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-300 text-center leading-tight group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>

                        {/* Hover Glow Effect */}
                        {hoveredTech === index && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                              background: `radial-gradient(circle, ${tech.color}40 0%, ${tech.color}20 40%, transparent 70%)`,
                              boxShadow: `0 0 30px ${tech.color}60, 0 0 60px ${tech.color}30, 0 0 100px ${tech.color}20`,
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          />
                        )}
                        
                        {/* Additional outer glow ring */}
                        {hoveredTech === index && (
                          <motion.div
                            className="absolute -inset-2 rounded-3xl pointer-events-none"
                            style={{
                              background: `radial-gradient(circle, transparent 60%, ${tech.color}15 70%, transparent 90%)`,
                              filter: `blur(8px)`,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                        )}
                  </motion.div>
                ))}
                </div>
              </div>

              {/* Second Row - 8 icons */}
              <div className="flex justify-center mb-16">
                <div className="grid grid-cols-8 gap-12">
                {techCategories.flatMap(category => category.techs).slice(7, 15).map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredTech(index + 8)}
                    onMouseLeave={() => setHoveredTech(null)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index + 8) * 0.03,
                      ease: [0.22, 0.61, 0.36, 1] 
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -8,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  >
                    {/* Tech Card */}
                    <div className="bg-gradient-to-br from-slate-800/25 via-slate-900/30 to-slate-800/25 backdrop-blur-sm border border-white/10 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center shadow-xl transition-all duration-300 group-hover:border-sky-300/40 group-hover:shadow-sky-400/20 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-sky-900/15 group-hover:via-slate-800/35 group-hover:to-purple-900/15">
                      <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        <img 
                          src={tech.icon} 
                          alt={tech.name}
                          className="w-full h-full object-contain filter transition-all duration-300 group-hover:drop-shadow-lg"
                          style={{
                            filter: hoveredTech === index + 8 
                              ? `drop-shadow(0 0 16px ${tech.color}80) brightness(1.2) saturate(1.3)` 
                              : 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-300 text-center leading-tight group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>

                    {/* Hover Glow Effect */}
                    {hoveredTech === index + 8 && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, ${tech.color}40 0%, ${tech.color}20 40%, transparent 70%)`,
                          boxShadow: `0 0 30px ${tech.color}60, 0 0 60px ${tech.color}30, 0 0 100px ${tech.color}20`,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                    
                    {/* Additional outer glow ring */}
                    {hoveredTech === index + 8 && (
                      <motion.div
                        className="absolute -inset-2 rounded-3xl pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, transparent 60%, ${tech.color}15 70%, transparent 90%)`,
                          filter: `blur(8px)`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    )}
                  </motion.div>
                ))}
                </div>
              </div>

              {/* Third Row - 7 icons */}
              <div className="flex justify-center">
                <div className="grid grid-cols-7 gap-12">
                {techCategories.flatMap(category => category.techs).slice(15, 22).map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredTech(index + 15)}
                    onMouseLeave={() => setHoveredTech(null)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index + 15) * 0.03,
                      ease: [0.22, 0.61, 0.36, 1] 
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -8,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  >
                    {/* Tech Card */}
                    <div className="bg-gradient-to-br from-slate-800/25 via-slate-900/30 to-slate-800/25 backdrop-blur-sm border border-white/10 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center shadow-xl transition-all duration-300 group-hover:border-sky-300/40 group-hover:shadow-sky-400/20 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-sky-900/15 group-hover:via-slate-800/35 group-hover:to-purple-900/15">
                      <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        <img 
                          src={tech.icon} 
                          alt={tech.name}
                          className="w-full h-full object-contain filter transition-all duration-300 group-hover:drop-shadow-lg"
                          style={{
                            filter: hoveredTech === index + 15 
                              ? `drop-shadow(0 0 16px ${tech.color}80) brightness(1.2) saturate(1.3)` 
                              : 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-300 text-center leading-tight group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>

                    {/* Hover Glow Effect */}
                    {hoveredTech === index + 15 && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, ${tech.color}40 0%, ${tech.color}20 40%, transparent 70%)`,
                          boxShadow: `0 0 30px ${tech.color}60, 0 0 60px ${tech.color}30, 0 0 100px ${tech.color}20`,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                    
                    {/* Additional outer glow ring */}
                    {hoveredTech === index + 15 && (
                      <motion.div
                        className="absolute -inset-2 rounded-3xl pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, transparent 60%, ${tech.color}15 70%, transparent 90%)`,
                          filter: `blur(8px)`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    )}
                  </motion.div>
                ))}
                </div>
              </div>
              </div>
            </div>

            {/* Bottom Section */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="bg-slate-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-sky-300 mb-4">Always Learning</h3>
                <p className="text-slate-400 leading-relaxed">
                  Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
                  frameworks, and methodologies to stay at the forefront of development.
                </p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                  <span className="text-sky-200 font-medium text-sm">Continuously expanding my toolkit</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
