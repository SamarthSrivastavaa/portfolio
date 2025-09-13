import React from 'react'

const Navbar = () => {
  return (
   
     <>
     <div className='pt-16 ml-6 flex space-x-40 items-center'>
        <div className='text-[20px] font-bold tracking-wider font-poppins'><span className='font-bold text-[25px] text-cyan-200 inline-block pb-0.5 transition-all duration-200 ease-out hover:scale-[1.04]'>SAMARTH SRIVASTAVA</span></div>
       
           <div className='text-[20px] tracking-wider font-poppins'> <a href="#about" className='font-bold inline-block pb-0.5 border-b border-white/40 text-white/90 hover:text-white hover:border-white transition-all duration-200 ease-out hover:scale-[1.06]'>ABOUT</a></div>
            <div className='text-[20px] tracking-wider font-poppins'> <a href="#projects" className='font-bold inline-block pb-0.5 border-b border-white/40 text-white/90 hover:text-white hover:border-white transition-all duration-200 ease-out hover:scale-[1.06]'>PROJECTS</a></div>
            <div className='text-[20px] tracking-wider font-poppins'> <a href="#socials" className='font-bold inline-block pb-0.5 border-b border-white/40 text-white/90 hover:text-white hover:border-white transition-all duration-200 ease-out hover:scale-[1.06]'>SOCIALS</a></div>
            <div className='text-[20px] tracking-wider font-poppins'> <a href="#contact" className='font-bold inline-block pb-0.5 border-b border-white/40 text-white/90 hover:text-white hover:border-white transition-all duration-200 ease-out hover:scale-[1.06]'>REACH OUT</a></div>
      
     </div>
     </>

  )
}

export default Navbar


