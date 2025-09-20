import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Socials = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      username: "@samarth-srivastava",
      description: "Check out my code repositories, open source contributions, and latest projects",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: "https://github.com/samarth-srivastava", // Update with your actual GitHub
      color: "#ffffff",
      bgGradient: "from-gray-700/20 to-gray-900/20",
      hoverGradient: "from-gray-600/30 to-gray-800/30"
    },
    {
      id: 2,
      name: "LinkedIn",
      username: "Samarth Srivastava",
      description: "Connect with me professionally and see my career journey and achievements",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: "https://linkedin.com/in/samarth-srivastava", // Update with your actual LinkedIn
      color: "#0077B5",
      bgGradient: "from-blue-600/20 to-blue-800/20",
      hoverGradient: "from-blue-500/30 to-blue-700/30"
    },
    {
      id: 3,
      name: "Twitter",
      username: "@samarthdev",
      description: "Follow my thoughts on tech, development insights, and industry trends",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: "https://twitter.com/samarthdev", // Update with your actual Twitter
      color: "#1DA1F2",
      bgGradient: "from-blue-400/20 to-blue-600/20",
      hoverGradient: "from-blue-300/30 to-blue-500/30"
    },
    {
      id: 4,
      name: "Discord",
      username: "samarth#1234",
      description: "Join me in tech communities and collaborative development discussions",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0188 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
        </svg>
      ),
      url: "https://discord.com/users/samarth#1234", // Update with your actual Discord
      color: "#5865F2",
      bgGradient: "from-indigo-500/20 to-purple-600/20",
      hoverGradient: "from-indigo-400/30 to-purple-500/30"
    },
    {
      id: 5,
      name: "Instagram",
      username: "@samarth.codes",
      description: "Behind-the-scenes content, coding setups, and tech lifestyle moments",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: "https://instagram.com/samarth.codes", // Update with your actual Instagram
      color: "#E4405F",
      bgGradient: "from-pink-500/20 to-red-600/20",
      hoverGradient: "from-pink-400/30 to-red-500/30"
    },
    {
      id: 6,
      name: "Medium",
      username: "@samarthsrivastava",
      description: "Technical articles, tutorials, and insights on modern development practices",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
      url: "https://medium.com/@samarthsrivastava", // Update with your actual Medium
      color: "#00ab6c",
      bgGradient: "from-green-500/20 to-emerald-600/20",
      hoverGradient: "from-green-400/30 to-emerald-500/30"
    }
  ]

  return (
    <div className="relative flex flex-col w-full bg-black text-white">
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
        <div className="flex-1 px-6 pt-24 pb-8">
          <div className="w-full ml-20">
            {/* Header Section */}
            <motion.div
              className="mb-12 transform ml-4 sm:ml-6 md:ml-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h1 className="text-[70px] sm:text-[100px] font-extrabold text-sky-300 mb-6 tracking-wide" 
                  style={{WebkitTextStroke: '2px white', textStroke: '2px white'}}>
                Socials
              </h1>
              <div className="h-[2px] w-24 bg-gradient-to-r from-sky-300 to-transparent"></div>
              <p className="text-slate-400 mt-8 text-lg max-w-2xl">
                Connect with me across different platforms and stay updated with my journey
              </p>
            </motion.div>

            {/* Socials Grid */}
            <div className="px-8 relative">
              {/* Subtle background fade */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-radial from-slate-800/15 via-slate-900/8 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/5 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-radial from-sky-900/4 via-transparent to-transparent"></div>
              </div>
              
              <div className="relative z-10 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.id}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      onClick={() => window.open(social.url, '_blank')}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: [0.22, 0.61, 0.36, 1] 
                      }}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      {/* Social Card */}
                      <div className={`bg-gradient-to-br ${social.bgGradient} backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-500 group-hover:border-sky-300/30 group-hover:shadow-sky-400/10 group-hover:shadow-2xl h-48 flex flex-col justify-between`}>
                        
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div 
                              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                              style={{ 
                                backgroundColor: `${social.color}20`,
                                color: social.color 
                              }}
                            >
                              {social.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
                                {social.name}
                              </h3>
                              <p className="text-sm text-slate-400">
                                {social.username}
                              </p>
                            </div>
                          </div>
                          
                          {/* External Link Icon */}
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="w-6 h-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {social.description}
                        </p>

                        {/* Bottom Accent */}
                        <div 
                          className="h-1 w-full rounded-full opacity-50 group-hover:opacity-100 transition-all duration-300"
                          style={{ backgroundColor: social.color }}
                        ></div>
                      </div>

                      {/* Hover Glow Effect */}
                      {hoveredSocial === index && (
                        <motion.div
                          className="absolute -inset-1 rounded-2xl pointer-events-none"
                          style={{
                            background: `radial-gradient(circle, ${social.color}20 0%, ${social.color}10 40%, transparent 70%)`,
                            boxShadow: `0 0 30px ${social.color}30, 0 0 60px ${social.color}20`,
                          }}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Section */}
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="bg-slate-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-sky-300 mb-4">Let's Connect!</h3>
                  <p className="text-slate-400 leading-relaxed">
                    I'm always excited to connect with fellow developers, designers, and tech enthusiasts. 
                    Feel free to reach out on any platform - I'd love to hear from you!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Socials
