import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Intro")

  const navItems = [
    { name: "Intro", url: "#intro" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Experience", url: "#experience" },
    { name: "Contact", url: "#contact" }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full font-bold text-lg">
            S
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.name

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name)
                    scrollToSection(item.url.slice(1))
                  }}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar