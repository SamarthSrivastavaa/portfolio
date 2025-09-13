import React, { useState } from 'react'
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
          <div className='text-[28px] text-purple-400 font-bold tracking-wider font-poppins'>
            <span className='inline-block hover:text-white hover:border-white transition-colors duration-200'>hey there, I'm SAMARTH SRIVASTAVA</span>
          </div>
          <div className='flex-1'></div>
        </div>
      </div>

      <div className="mt-24 ml-24 mr-24">
        <div className="w-full flex items-start gap-10">
          {/* Left: Headings */}
          <div className="flex-1">
            <div className="bg-black space-y-6 tracking-[12px]">
              <p className="text-orange-400 text-[150px] font-black font-sans leading-none">
                a web & app
              </p>
              <p className="text-white text-[150px] font-black font-sans leading-none">
                developer
              </p>
            </div>
            <div className='mt-20 text-[25px]'>
              <p><span className='tracking-[6px] text-purple-400'>FullStack Dev</span>  <span className='ml-[6px] text-or mr-[6px]'>||</span> <span className=' tracking-[6px] text-purple-400'>   App Dev</span>  <span className='ml-[6px] mr-[6px]'>||</span> <span className='tracking-[6px] text-purple-400'> Blockchain Dev </span></p>
            </div>
          </div>

          {/* Right: Interactive Card Stack */}
          <RightCardStack />
        </div>
      </div>
        

    </div>
  )
}

// Right-side card stack component
const RightCardStack = () => {
  const [front, setFront] = useState('resume') // 'resume' | 'socials'

  const commonCard = 'absolute rounded-2xl border border-white/40 bg-black/60 backdrop-blur-sm text-white shadow-[0_8px_40px_rgba(0,0,0,0.6)] select-none'
  const cardSize = 'w-[360px] h-[520px]'

  return (
    <div className="relative w-[420px] h-[560px] -mt-[24px] -ml-[20px]">
      {/* Socials card'll be (behind by default) */}
      <button
        onClick={() => setFront('socials')}
        className={`${commonCard} ${cardSize} ${front === 'socials' ? 'z-20 rotate-[-2deg] translate-x-[18px] translate-y-[8px]' : 'z-10 rotate-[-8deg] -translate-x-[6px] translate-y-[24px] opacity-80 hover:opacity-100'} transition-transform duration-300 ease-out`}
        aria-label="Show socials card"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="text-xl tracking-widest uppercase opacity-80">Socials</div>
          <div className="mt-4 border-t border-white/20"></div>

          <div className="mt-6 flex flex-col items-center text-center space-y-4 text-lg">
            <a href="https://github.com/samarthSrivastavaa" target="_blank" rel="noreferrer" className="block group">
              <span className="border-b border-white/30 group-hover:border-white transition-colors">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/samarth-srivastava-426051283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="block group">
              <span className="border-b border-white/30 group-hover:border-white transition-colors">LinkedIn</span>
            </a>
            <a href="https://x.com/SamarthS_1101" target="_blank" rel="noreferrer" className="block group">
              <span className="border-b border-white/30 group-hover:border-white transition-colors">X (Twitter)</span>
            </a>
          </div>

          <div className="mt-6 text-sm opacity-80 italic">feel free to reach out</div>
        </div>
      </button>

      {/* Resume card gotta be (front by default) */}
      <button
        onClick={() => setFront('resume')}
        className={`${commonCard} ${cardSize} ${front === 'resume' ? 'z-30 rotate-[4deg] -translate-x-[6px]' : 'z-10 rotate-[10deg] translate-x-[24px] translate-y-[14px] opacity-80 hover:opacity-100'} transition-transform duration-300 ease-out`}
        aria-label="Show resume card"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="text-xl tracking-widest uppercase opacity-80">Resume</div>
          <div className="mt-4 border-t border-white/20"></div>

          <div className="mt-6 space-y-2">
            <div className="text-2xl font-bold tracking-wide">Samarth Srivastava</div>
            <div className="opacity-80">Web & App Developer</div>
            <div className="opacity-70 text-sm">FullStack • App • Blockchain</div>
          </div>

          <div className="mt-6">
            <p className="text-sm leading-relaxed opacity-90">
              Hi there, I'm Samarth Srivastava-an undergrad at IIIT Sonepat. I love to build
              and design web and mobile apps, and am currently working across
              blockchain projects as well.
            </p>
            <p className="mt-4 text-sm opacity-80">
              Blockchains: EVM chains, Solana
            </p>
            <p className="mt-4 text-sm opacity-80">
              Web: MERN ,Next.js, Nest.Js
            </p>
            <p className="mt-4 text-sm opacity-80">
              App: React Native
            </p>
          </div>

          <div className="mt-auto">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 border border-white/40 px-4 py-2 rounded-lg hover:border-white transition-colors"
            >
              <span>View Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
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