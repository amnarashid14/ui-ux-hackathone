import React from 'react'
import Image from 'next/image'
import { FaCircle } from "react-icons/fa";
const Features = () => {
  return (
   <div className="bg-[#F1F0FF]   h-full flex py-3 w-full   justify-evenly items-center 
    sm:flex-col md:flex-col 
    ">
   
           <div className=" flex bg-[url('/image/Ellipse.png')] bg-no-repeat bg-contain bg-center  w-1/2 h-full ">
             
             <Image src='/image/sofablue.png' width={370} height={100} alt='Loading' className=' h-full ml-[34%]' />
           </div>
   
           {/* Unique Features Of leatest & Trending Poducts */}
   
           <div className="  h-full w-1/2  md:w-full sm:w-full   flex flex-col   ">
             <h1 className=" my-4 text-[#1A0B5B] text-[35px] tracking-[1.5%] font-bold sm:text-lg md:text-[1.5rem]">
               Unique Features Of leatest & Trending Poducts
             </h1>
             <ul className="text-[#ACABC3] sm:text-xs md:text-xs">
               
               <li className="lato-bold text-base font-medium leading-10 tracking-[0.015em] text-left flex"><FaCircle className='text-[11px] text-[#F52B70] mt-[0.8rem] mr-5 ' />All frames constructed with hardwood solids and laminates</li>
               <li className="lato-bold text-base font-medium leading-10 tracking-[0.015em] text-left flex   
   "><FaCircle className='text-[12px] text-[#2B2BF5] mt-[0.8rem] mr-3 ' />Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails</li>
            
               <li className="lato-bold text-base font-medium leading-10 tracking-[0.015em] text-left flex "><FaCircle className='text-[11px] mt-[0.8rem] mr-5 text-[#2BF5CC]' />Arms, backs and seats are structurally reinforced</li>
             </ul>
   
             <div className="flex items-center  ">
               <button type='submit' className='bg-[#FB2E86] text-white rounded-md px-6 py-3 text-base'>Add To Cart</button>
               <p className=' px-6 py-3 text-base text-[#151875]'>
                 B&B Italian Sofa <br />
                 $32.00</p>
             </div>
           </div>
         </div>
   
  )
}

export default Features
