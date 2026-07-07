import { div, nav } from 'motion/react-client'
import { assets } from "../assets/assets.js";
import { Menu, X } from "lucide-react";
import { useState } from 'react';


const Navbar = () => {

    const [showMenu,setShowMenu]=useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm" >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-14 sm:h-16 md:h-20'>
        <div className='flex gap-2 lg:gap-3 justify-center items-center' >
            <img src={assets.logo} alt="image" className='w-6 h-6 sm:w-8 sm:h-8' />
           <span className='text-lg sm:text-xl md:text-2xl font-medium'>
            <span className='text-white' >Code</span>
            <span className='text-blue-400' >flow</span>
           </span>
           </div>
 
               {/*Navlinks*/}

           <div className='hidden md:flex space-x-6 lg:space-x-8'>
               <a href="#features" className='text-gray-300 hover:text-white text-sm lg:text-base' >Features</a>
               <a href="#pricing" className='text-gray-300 hover:text-white text-sm lg:text-base' >Pricing</a>
               <a href="#testimonials" className='text-gray-300 hover:text-white text-sm lg:text-base' >Testimonials</a>
           </div>

           <button onClick={()=>(setShowMenu((prev)=>!prev))} className='md:hidden p-2 text-gray-300 hover' >
            {showMenu?
            (<X className="w-5 h-5 sm:w-6 sm:h-6"/>
            ):(
              <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
            )}
           </button>

           </div>
      </div>

        {showMenu && <div className=' md:hidden space-x-6 lg:space-x-8 bg-slate-900/95 backdrop-blur-large border-t border-slate-800 animate-in slide-in-from-top duration-300'>
               <div className='flex flex-col gap-1 px-5 py-3 '>
               <a onClick={()=>(setShowMenu(false))} href="#features" className='text-gray-300 hover:text-white text-sm lg:text-base' >Features</a>
               <a onClick={()=>(setShowMenu(false))} href="#pricing" className='text-gray-300 hover:text-white text-sm lg:text-base' >Pricing</a>
               <a onClick={()=>(setShowMenu(false))}  href="#testimonials"className='text-gray-300 hover:text-white text-sm lg:text-base' >Testimonials</a>
           </div>
           </div>  }
           



    </nav>
  )
}

export default Navbar