import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { Button } from '../components/ui/moving-border'

const Landing = () => {
  return (
    <div className="relative min-h-screen flex flex-col w-full bg-black text-white"> {/*bg-neutral slate*/}
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
      <div className="w-full px-6">
        <Navbar />
      </div>

      <div className='w-full mt-16'>
        <div className='w-full px-6 flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Button
              borderRadius="1.75rem"
              className="bg-slate-900/[0.8] border border-slate-800 text-white text-lg font-semibold tracking-wider h-20 w-96"
              containerClassName="h-20 w-96"
              borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--amber-500)_40%,transparent_60%)]"
              duration={3000}
            >
              Hey there, I'm SAMARTH SRIVASTAVA
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="px-6 flex-1">
        <div className="w-full ml-20 flex items-center ">
          {/* Left: Headings */}
          <div className="flex-1 transform ml-4 sm:ml-6 md:ml-8 -translate-y-8 lg:-translate-y-[20px]">
            <div className="bg-transparent space-y-6 tracking-[8px]">
              <motion.p
                className="text-sky-300 text-[71px] sm:text-[103px] md:text-[135px] font-extrabold font-mono leading-[0.9] drop-shadow-[0_2px_0_rgba(0,0,0,0.25)]"
                style={{WebkitTextStroke: '2px white', textStroke: '2px white'}}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 0.61, 0.36, 1] }}
              >
                A web & app
              </motion.p>
              <motion.p
                className="text-sky-300 text-[71px] sm:text-[103px] md:text-[135px] font-extrabold font-mono leading-[0.9]"
                style={{WebkitTextStroke: '2px white', textStroke: '2px white'}}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
              >
                developer
              </motion.p>
            </div>
            <motion.div
              className='mt-10 text-[25px] sm:text-[27px] text-slate-300'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p>
                <span className='tracking-[3px] text-white inline-block'>FullStack Dev</span>
                <span className='ml-[6px] mr-[6px] text-slate-400/80'> | </span>
                <span className='tracking-[3px] text-white inline-block'>App Dev</span>
                <span className='ml-[6px] mr-[6px] text-slate-400/80'> | </span>
                <span className='tracking-[3px] text-white inline-block'>  Blockchain Dev</span>
              </p>
            </motion.div>
          </div>

          {/* Right: Interactive Card Stack */}
          <motion.div
            className='mt-5 sm:mt-10 md:mt-20 lg:mt-20 mr-[250px] -translate-y-4'
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <RightCardStack />
          </motion.div>
        </div>
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
            <p className="text-yellow-300 mt-4 text-sm opacity-80">
              Blockchains: EVM chains, Solana
            </p>
            <p className="text-yellow-300 mt-4 text-sm opacity-80">
              Web: MERN ,Next.js, Nest.Js
            </p>
            <p className="text-yellow-300 mt-4 text-sm opacity-80">
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


export default Landing