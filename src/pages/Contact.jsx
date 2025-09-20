import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactMethods = [
    {
      id: 1,
      title: "Email",
      subtitle: "samarth.dev@gmail.com",
      description: "Drop me a line for collaborations, opportunities, or just to say hello",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: () => window.open('mailto:samarth.dev@gmail.com', '_blank'),
      color: "#3B82F6",
      gradient: "from-blue-500/20 to-blue-700/20"
    },
    {
      id: 2,
      title: "WhatsApp",
      subtitle: "Quick Message",
      description: "For urgent matters or quick discussions about projects",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      action: () => window.open('https://wa.me/1234567890', '_blank'), // Update with your WhatsApp number
      color: "#25D366",
      gradient: "from-green-500/20 to-green-700/20"
    },
    {
      id: 3,
      title: "Calendar",
      subtitle: "Schedule a Meeting",
      description: "Book a 30-minute slot to discuss your project or collaboration ideas",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      action: () => window.open('https://calendly.com/samarth-dev', '_blank'), // Update with your Calendly link
      color: "#8B5CF6",
      gradient: "from-purple-500/20 to-purple-700/20"
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.open(`mailto:samarth.dev@gmail.com?subject=${subject}&body=${body}`, '_blank')
  }

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
                Reach Out
              </h1>
              <div className="h-[2px] w-24 bg-gradient-to-r from-sky-300 to-transparent"></div>
              <p className="text-slate-400 mt-8 text-lg max-w-2xl">
                Ready to bring your ideas to life? Let's discuss your next project or collaboration opportunity
              </p>
            </motion.div>

            <div className="px-8 relative">
              {/* Subtle background fade */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-radial from-slate-800/15 via-slate-900/8 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/5 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-radial from-sky-900/4 via-transparent to-transparent"></div>
              </div>
              
              <div className="relative z-10 py-12">
                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                  
                  {/* Contact Methods */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                    >
                      <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
                      <div className="space-y-6">
                        {contactMethods.map((method, index) => (
                          <motion.div
                            key={method.id}
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={method.action}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: 0.3 + index * 0.1,
                              ease: [0.22, 0.61, 0.36, 1] 
                            }}
                            whileHover={{ 
                              x: 8,
                              transition: { duration: 0.3, ease: "easeOut" }
                            }}
                          >
                            <div className={`bg-gradient-to-br ${method.gradient} backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-500 group-hover:border-sky-300/30 group-hover:shadow-sky-400/10`}>
                              <div className="flex items-start gap-4">
                                <div 
                                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                  style={{ 
                                    backgroundColor: `${method.color}20`,
                                    color: method.color 
                                  }}
                                >
                                  {method.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
                                      {method.title}
                                    </h3>
                                    <svg className="w-4 h-4 text-slate-400 group-hover:text-sky-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </div>
                                  <p className="text-sm font-medium text-sky-400 mb-2">
                                    {method.subtitle}
                                  </p>
                                  <p className="text-sm text-slate-300 leading-relaxed">
                                    {method.description}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Hover Glow Effect */}
                            {hoveredCard === index && (
                              <motion.div
                                className="absolute -inset-1 rounded-2xl pointer-events-none"
                                style={{
                                  background: `radial-gradient(circle, ${method.color}20 0%, ${method.color}10 40%, transparent 70%)`,
                                  boxShadow: `0 0 30px ${method.color}30, 0 0 60px ${method.color}20`,
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
                    </motion.div>
                  </div>

                  {/* Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <div className="bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                      <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300"
                            placeholder="What's this about?"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 resize-none"
                            placeholder="Tell me about your project, ideas, or just say hello..."
                          />
                        </div>
                        
                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-sky-500/25"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Send Message
                        </motion.button>
                      </form>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Info Section */}
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="bg-slate-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-sky-300 mb-4">Let's Build Something Amazing</h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Whether you have a project in mind, want to collaborate, or just want to chat about tech, 
                    I'm always excited to connect with fellow innovators and creators.
                  </p>
                  <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                    <span>🌍 Available worldwide</span>
                    <span>⚡ Quick response time</span>
                    <span>🤝 Open to collaborations</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
