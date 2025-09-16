import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("ABOUT")

  const navItems = [
    { name: "ABOUT", url: "#about" },
    { name: "PROJECTS", url: "#projects" },
    { name: "SOCIALS", url: "#socials" },
    { name: "REACH OUT", url: "#contact" }
  ]

  return (
    <div className='pt-16 ml-6 flex justify-between items-center w-full pr-6'>
      {/* Navigation Items with Lamp Effect - Increased Size */}
      <div className="flex items-center gap-6 bg-black/20 border border-slate-800/50 backdrop-blur-lg py-3 px-5 rounded-full shadow-lg">
        {navItems.map((item) => {
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-base font-semibold px-8 py-3 rounded-full transition-colors tracking-wider font-poppins",
                "text-white/80 hover:text-sky-300",
                isActive && "bg-slate-800/30 text-sky-300"
              )}
            >
              <span>{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-sky-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-sky-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-sky-400/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-sky-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-sky-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>

      {/* Name Box on the Right */}
      <div className="bg-gradient-to-r from-sky-500/10 to-blue-600/10 border border-sky-400/30 backdrop-blur-lg px-12 py-5 rounded-2xl shadow-lg -translate-y-1">
        <div className="text-sky-300 font-bold text-base tracking-wider font-poppins text-center">
          SAMARTH SRIVASTAVA
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-sky-400/50 via-sky-300/30 to-transparent mt-2"></div>
      </div>
    </div>
  )
}

export default Navbar


