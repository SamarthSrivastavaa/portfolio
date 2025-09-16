import React from 'react'
import { motion } from 'framer-motion'
import { Timeline } from '../components/ui/timeline'

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col w-full bg-black text-white">
   
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
            {/* Header Section */}
            <motion.div
              className="mb-20 transform ml-4 sm:ml-6 md:ml-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h1 className="text-[70px] sm:text-[100px] font-extrabold text-amber-400 mb-6 tracking-wide">
                About Me
              </h1>
              <div className="h-[2px] w-24 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </motion.div>

       
            <div className="flex gap-8">
              <div className="max-w-3xl ml-4 sm:ml-6 md:ml-8 flex-1">
        
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="bg-slate-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                  <h2 className="text-[28px] font-bold text-sky-200 mb-6 tracking-wide">
                    You already know my name by now...
                  </h2>
                  <p className="text-[16px] leading-relaxed text-slate-300 mb-4">
                    I'm a passionate developer exploring the intersection of <span className="text-emerald-400 font-medium">Web2</span> and <span className="text-purple-400 font-medium">Web3</span>, 
                    with hands-on experience in <span className="text-purple-400 font-medium">Solidity</span> and a growing proficiency in <span className="text-orange-400 font-medium">Rust</span>. 
                    I enjoy building solutions that bridge the gap between traditional web platforms and decentralized technologies.
                  </p>
                  <p className="text-[16px] leading-relaxed text-slate-300 mb-4">
                    Occasionally diving into <span className="text-blue-400 font-medium">app development</span> to bring ideas to life across multiple ecosystems. 
                    Beyond coding, I'm carving my path in the <span className="text-amber-400 font-medium">freelance world</span>, tackling projects that 
                    challenge me to innovate and deliver real-world impact.
                  </p>
                  <p className="text-[16px] leading-relaxed text-slate-300 mb-4">
                    I thrive on learning new tools, experimenting with emerging tech, and turning complex concepts into 
                    <span className="text-sky-400 font-medium">seamless digital experiences</span>.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                    <span className="text-sky-200 font-medium text-sm">Always building, always learning, always growing</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🌐</span>
                      <h3 className="text-[20px] font-bold text-emerald-400">Web2</h3>
                    </div>
                    <p className="text-[14px] text-slate-300 mb-3">
                      Full-stack development with modern frameworks, and cool user experiences.
                    </p>
                    <div className="text-[12px] text-slate-400">
                      MERN • React Native • Next.js
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">⛓️</span>
                      <h3 className="text-[20px] font-bold text-purple-400">Web3 & Blockchain</h3>
                    </div>
                    <p className="text-[14px] text-slate-300 mb-3">
                      Smart contracts, DeFi protocols, and decentralized applications.
                    </p>
                    <div className="text-[12px] text-slate-400">
                      Solidity • Rust • EVM • Solana
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="bg-slate-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">🚀</span>
                    <h3 className="text-[24px] font-bold text-sky-200">Currently</h3>
                  </div>
                  <p className="text-[16px] leading-relaxed text-slate-300 mb-4">
                    Freelancing, exploring Web3, and <span className="text-amber-400 font-medium">building cool stuff</span> I imagine.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-green-300 text-sm">Available for projects</span>
                  </div>
                </div>
              </motion.div>

              </div>

              <div className="w-96 flex-shrink-0 h-[850px] overflow-y-auto scrollbar-hide ml-[300px]">
                <div className="sticky top-0 bg-black/90 backdrop-blur-sm z-10 pb-4 mb-6 text-center">
                  <h3 className="text-xl font-bold text-sky-300 tracking-wide">My Journey</h3>
                  <div className="h-[1px] w-16 bg-gradient-to-r from-sky-400 to-transparent mt-2 mx-auto"></div>
                </div>
                <div className="px-6">
                  <Timeline data={timelineData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const timelineData = [
  {
    title: "1st Sem 2024",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-slate-300">
          Aug - Dec 2024
        </p>
        <p className="text-xs text-slate-400 mb-4">
          Started my journey in full-stack development, exploring MERN stack and building foundational projects.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          ✅ React & Node.js fundamentals
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          ✅ Database design with MongoDB
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          ✅ First full-stack projects
        </div>
      </div>
    ),
  },
  {
    title: "2nd Sem 2025",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-slate-300">
          Jan - May 2025
        </p>
        <p className="text-xs text-slate-400 mb-4">
          Diving deeper into advanced web technologies and exploring blockchain development.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          ✅ Advanced React patterns
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          ✅ Solidity basics
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          ✅ Smart contract development
        </div>
      </div>
    ),
  },
  {
    title: "3rd Sem Current",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-slate-300">
          July - Nov 2025
        </p>
        <p className="text-xs text-slate-400 mb-4">
          Currently focusing on Web3 technologies, Rust programming, and freelance projects.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          🚀 Learning Rust & Solana
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          🚀 Building DeFi projects
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          🚀 Freelance development
        </div>
      </div>
    ),
  },
  {
    title: "Future",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-slate-300">
          The journey continues...
        </p>
        <p className="text-xs text-slate-400 mb-4">
          Exploring new technologies and building innovative solutions.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          🔮 Advanced Web3 development
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          🔮 Cross-chain solutions
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          🔮 Building the future
        </div>
      </div>
    ),
  },
]

export default About