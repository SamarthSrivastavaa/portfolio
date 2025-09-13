import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-black text-white"> {/*bg-[#22242E] */}
      <div className="w-full px-6">
        <Navbar />
      </div>

      <div className='w-full mt-20'>
        <div className='w-full px-6 flex items-center'>
          <div className='ml-6 hidden sm:block flex-1 mr-6'>
            <div className='h-[2px] bg-gradient-to-r from-gray-400/40 via-gray-300/25 to-transparent shadow-[0_0_12px_2px_rgba(56,189,248,0.25)]'></div>
          </div>
          <div className='text-[28px] text-cyan-300 font-bold tracking-wider font-poppins'>
            <Typewriter text={"  hey there, I'm SAMARTH SRIVASTAVA"} speed={22} className='inline-block hover:text-white hover:border-white transition-colors duration-200' />
          </div>
          <div className='flex-1'></div>
        </div>
      </div>

      <div className="mt-24 ml-24 mr-24">
        <div className="w-full flex items-start gap-10">
          {/* Left: Headings */}
          <div className="flex-1">
            <div className="bg-black space-y-6 tracking-[12px]">
              <motion.p
                className="text-orange-400 text-[150px] font-black font-sans leading-none"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 0.61, 0.36, 1] }}
              >
                a web & app
              </motion.p>
              <motion.p
                className="text-white text-[150px] font-black font-sans leading-none"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
              >
                developer
              </motion.p>
            </div>
            <motion.div
              className='mt-20 text-[25px]'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p>
                <span className='tracking-[6px] text-cyan-200 inline-block transition-transform duration-150 ease-out hover:scale-[1.04]'>FullStack Dev</span>
                <span className='ml-[6px] mr-[6px]'>||</span>
                <span className='tracking-[6px] text-cyan-200 inline-block transition-transform duration-150 ease-out hover:scale-[1.04]'>App Dev</span>
                <span className='ml-[6px] mr-[6px]'>||</span>
                <span className='tracking-[6px] text-cyan-200 inline-block transition-transform duration-150 ease-out hover:scale-[1.04]'>Blockchain Dev</span>
              </p>
            </motion.div>
          </div>

          {/* Right: Interactive Card Stack */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <RightCardStack />
          </motion.div>
        </div>
      </div>
        

    </div>
  )
}

// Right-side card stack component
const RightCardStack = () => {
  const [front, setFront] = useState('resume') //resume n socials

  const commonCard = 'absolute rounded-2xl border border-white/30 bg-black/60 backdrop-blur-sm text-white shadow-[0_8px_40px_rgba(0,0,0,0.6)] select-none'
  const cardSize = 'w-[360px] h-[520px]'

  return (
    <div className="relative w-[420px] h-[560px] -mt-[24px] -ml-[20px]">
      {/* Socials card'll be (behind by default) */}
      <button
        onClick={() => setFront('socials')}
        className={`${commonCard} ${cardSize} ${front === 'socials' ? 'z-20 rotate-[-2deg] translate-x-[18px] translate-y-[8px]' : 'z-10 rotate-[-8deg] -translate-x-[6px] translate-y-[24px] opacity-80 hover:opacity-100 border-cyan-200/70 shadow-[0_0_32px_rgba(165,243,252,0.35)]'} transition-transform duration-300 ease-out hover:scale-[1.02]`}
        aria-label="Show socials card"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="text-xl tracking-widest uppercase text-blue-300">Socials</div>
          <div className="mt-4 h-px bg-gradient-to-r from-cyan-400/50 via-cyan-300/25 to-transparent"></div>

          <div className="mt-6 flex flex-col items-center text-center space-y-4 text-lg">
            <a href="https://github.com/samarthSrivastavaa" target="_blank" rel="noreferrer" className="block group text-white hover:text-cyan-200 transition-colors">
              <span className="border-b border-white/60 group-hover:border-cyan-300 transition-colors">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/samarth-srivastava-426051283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="block group text-white hover:text-cyan-200 transition-colors">
              <span className="border-b border-white/60 group-hover:border-cyan-300 transition-colors">LinkedIn</span>
            </a>
            <a href="https://x.com/SamarthS_1101" target="_blank" rel="noreferrer" className="block group text-white hover:text-cyan-200 transition-colors">
              <span className="border-b border-white/60 group-hover:border-cyan-300 transition-colors">X (Twitter)</span>
            </a>
          </div>

          <div className="mt-6 text-sm italic text-white/90">feel free to reach out</div>
        </div>
      </button>

      {/* Resume card gotta be (front by default) */}
      <button
        onClick={() => setFront('resume')}
        className={`${commonCard} ${cardSize} ${front === 'resume' ? 'z-30 rotate-[4deg] -translate-x-[6px]' : 'z-10 rotate-[10deg] translate-x-[24px] translate-y-[14px] opacity-80 hover:opacity-100 border-cyan-200/70 shadow-[0_0_32px_rgba(165,243,252,0.35)]'} transition-transform duration-300 ease-out hover:scale-[1.02]`}
        aria-label="Show resume card"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="text-xl tracking-widest uppercase text-blue-300">Resume</div>
          <div className="mt-4 h-px bg-gradient-to-r from-cyan-400/50 via-cyan-300/25 to-transparent"></div>

          <div className="mt-6 space-y-2">
            <div className="text-2xl font-bold tracking-wide text-white">Samarth Srivastava</div>
            <div className="text-cyan-200">Web & App Developer</div>
            <div className="text-cyan-200/80 text-sm">FullStack • App • Blockchain</div>
          </div>

          <div className="mt-6">
            <p className="text-sm leading-relaxed opacity-90">
              Hi there, I'm Samarth Srivastava-an undergrad at IIIT Sonepat. I love to build
              and design web and mobile apps, and am currently working across
              blockchain projects as well.
            </p>
            <p className="text-orange-300 mt-4 text-sm opacity-80">
              Blockchains: EVM chains, Solana
            </p>
            <p className="text-orange-300 mt-4 text-sm opacity-80">
              Web: MERN ,Next.js, Nest.Js
            </p>
            <p className="text-orange-300 mt-4 text-sm opacity-80">
              App: React Native
            </p>
          </div>

          <div className="mt-auto">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 border border-cyan-400/60 px-4 py-2 rounded-lg hover:border-cyan-300 text-white hover:text-cyan-200 transition-colors"
            >
              <span>View Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-200">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </button>
    </div>
  )
}

// Simple typewriter text component
const Typewriter = ({ text, speed = 24, className = '' }) => {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let index = 0
    setDisplayed('')
    const timer = setInterval(() => {
      setDisplayed(prev => prev + text.charAt(index))
      index += 1
      if (index >= text.length) {
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])

  return (
    <span className={className}>{displayed}</span>
  )
}

export default Landing