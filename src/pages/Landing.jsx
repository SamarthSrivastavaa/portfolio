import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-black text-white"> {/*bg-[#22242E] */}
      <div className="w-full px-6">
        <Navbar />
      </div>

      <div className='flex justify-center items-center'>
      <div className='items-center justify-center mt-20'>
        <div className='text-[28px] text-orange-400 font-bold tracking-wider font-poppins'>
          <span className='inline-block hover:text-white hover:border-white transition-colors duration-200'>hey there, I'm SAMARTH SRIVASTAVA</span>
        </div>
      </div> 
      </div>

      <div className="mt-24 ml-24 mr-24">
        <div className="w-full flex items-start gap-10">
          {/* Left: Headings */}
          <div className="flex-1">
            <div className="bg-black space-y-6 tracking-[12px]">
              <p className="text-white text-[150px] font-black font-sans leading-none">
                a web & app
              </p>
              <p className="text-white text-[150px] font-black font-sans leading-none">
                developer
              </p>
            </div>
            <div className='mt-20 text-[25px]'>
              <p><span className='tracking-[6px]'>FullStack Dev</span>  <span className='ml-[6px] mr-[6px]'>||</span> <span className=' tracking-[6px]'>   App Dev</span>  <span className='ml-[6px] mr-[6px]'>||</span> <span className='tracking-[6px]'> Blockchain Dev </span></p>
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
    <div className="relative w-[420px] h-[560px] mt-6">
      {/* Socials card (behind by default) */}
      <button
        onClick={() => setFront('socials')}
        className={`${commonCard} ${cardSize} ${front === 'socials' ? 'z-20 rotate-[-2deg] translate-x-[18px] translate-y-[8px]' : 'z-10 rotate-[-8deg] -translate-x-[6px] translate-y-[24px] opacity-80 hover:opacity-100'} transition-transform duration-300 ease-out`}
        aria-label="Show socials card"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="text-xl tracking-widest uppercase opacity-80">Socials</div>
          <div className="mt-4 border-t border-white/20"></div>

          <div className="mt-6 space-y-4 text-lg">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="block group">
              <span className="border-b border-white/30 group-hover:border-white transition-colors">GitHub</span>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="block group">
              <span className="border-b border-white/30 group-hover:border-white transition-colors">LinkedIn</span>
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" className="block group">
              <span className="border-b border-white/30 group-hover:border-white transition-colors">X (Twitter)</span>
            </a>
          </div>

          <div className="mt-auto text-sm opacity-70">Click card to bring to front</div>
        </div>
      </button>

      {/* Resume card (front by default) */}
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

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="opacity-70">Stack</div>
              <div>React, Node, Tailwind</div>
            </div>
            <div>
              <div className="opacity-70">Focus</div>
              <div>UI/UX, Performance</div>
            </div>
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