import { radialGradient, section } from 'motion/react-client'
import React, { useEffect, useState } from 'react'
import { assets } from "../assets/assets.js";
import { ArrowRight } from "lucide-react"
import { Play } from "lucide-react";

const Hero = () => {
  const [mousePosition,setmousePosition]=useState({x:0,y:0})
   
  useEffect(()=>{
    function handleMouse(e){
    setmousePosition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener("mousemove",handleMouse)
    return ()=> {window.removeEventListener("mousemove",handleMouse)
    };
  },[])


  return (
    <section className='relative flex min-h-screen bg-slate-950 items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6  lg:px-8 overflow-hidden ' >
      <div className='absolute inset-0 opacity-30' style={{
        background:`radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,256,0.15),transparent 40% )`
      }} /> 
     <div className='flex flex-col sm:flex-row sm:gap-30 justify-center items-center'>
      <div className='flex flex-col justify-center items-center' >

          <div className='flex flex-row gap-1 justify-center items-center rounded-full bg-slate-900/65 px-2 py-2 border-blue-900/40 border-2 ' >
          <img src={assets.logo2} alt='image' className='w-4 h-4 sm:w-6 sm:h-6' />
          <div>Introducing CodeFlow Ai 2.0</div>
          </div>

          {/*headings?*/}

          <div className='flex flex-col justify-center items-center' >
            <h1 className='text-4xl font-medium '>Code Faster</h1>
             <h1 className='text-4xl font-medium text-blue-400' >Build Better</h1>
              <h1 className='text-4xl font-medium'>With CodeFlow Ai</h1>
           </div>
             
             {/*para*/}

              <div className='flex  flex-col justify-center items-center my-3' >
                <div className=' text-[10px] md:text-xl' >Accelerate your workflow with intelligent code completion,automated</div>
                 <div className=' text-[10px] md:text-xl' >testing and smart debugging,ship production ready code 10x faster </div>
              </div>

              {/*buttons*/}

            <div className='flex flex-col gap-2 w-full' >
            <div className= "min-w-full py-1 bg-gradient-to-r from-blue-500 to-blue-700  flex justify-center items-center gap-2 border-1 rounded-full">
              <button className='text-sm' >Start Coding free</button>
              <ArrowRight className='w-6 h-6 sm:w-5 sm:h-5' />
            </div>

            <div className='flex py-1  gap-2 min-w-full bg-gradient-to-r from-blue-500 to-blue-700 justify-center items-center  border-1 rounded-full' >
              <Play className='w-6 h-6 sm:w-5 sm:h-5  ' />
              <button className='text-sm' >Watch Demo</button>
            </div>
                  </div>  
</div>

{/*second box*/}
               
               <div className="w-full p-2 h-80 bg-gray-500 mt-10" >
                      <div className='bg-gray-800 w-full h-full' >
                          <div className='bg-gray-400 p-2'>
                            <div className='flex flex-row gap-1' >
                                <img src={assets.logo2} alt="image" className=' w-5 h-5' />
                                <h1>CodeFlow Ai</h1>
                            </div>
                          </div>
                          

                      </div>
               </div>
              
</div>
    
    </section>
  )
}

export default Hero