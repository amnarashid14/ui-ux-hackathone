import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaCircle } from 'react-icons/fa';
import styles from '@/styles/ProductCard.module.css'
const DiscountItems = () => {
  return (
  <section className="w-[98vw] pl-2 h-screen sm:hidden  ">
        
          <div className=" flex justify-center gap-x-5 ">
            <span className="lato-bold font-normal text-lg  md:text-base  color cursor-pointer underline flex items-center gap-1">Wood Chair <FaCircle className='text-[0.40rem] ' /> </span>

            <span className="lato-bold font-normal text-lg  cursor-pointer color md:text-base">Plastic Chair </span>

            <span className="lato-bold font-normal text-lg  cursor-pointer color md:text-base">Sofa Collection</span>

          </div>
  
          <div className="w-[97vw]  h-full flex items-center justify-around"  id={styles.discountItem}>

            <div className=" w-[43%] h-4/6 flex flex-col  justify-around" id={styles.disc_text}>
              <h1 className='textTwo text-[2.24rem] leading-[2.89rem]' >20% Discount Of All Products</h1>
              <p className="textOne text-[1.26rem] leading-[1.73rem] tracking-widest">Eams Sofa Compact</p>
              <p className="text-[#B7BACB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
              </p>
              <ul className="text-[#B8B8DC] grid grid-cols-2 gap-y-3">
                <li className="flex "><FaCheck className='text-[#7569B2] ' /><p className='ml-[0.2rem] '>Material expose like metals</p></li>
                <li className="flex "><FaCheck className='text-[#7569B2] ' /><p className='ml-[0.2rem] '>Clear lines and geomatric figures</p></li>
                <li className="flex "><FaCheck className='text-[#7569B2] ' /><p className='ml-[0.2rem] '>Simple neutral colours.</p></li>
                <li className="flex "><FaCheck className='text-[#7569B2] ' /><p className='ml-[0.2rem] '>Material expose like metals</p></li>
              </ul>
  
              <button className="bg-[#FB2E86] text text-base  px-6 py-3 rounded-[2px] w-40 " type='button'>Shop Now</button>

            </div>


            <div className="w-1/2 h-full  relative  " id={styles.picBox}>
{/* <div className="" > */}
                <div className="rounded-full h-[25.5rem] w-[25.5rem] bg-[#FCECF1] absolute z-0 top-[3.5rem] left-[8rem]" id={styles.peech_circle}></div>

                <img src='/image/tortuga-01-b 1.png' width={100} height={100} alt='Sofa Picture ' className='absolute z-10  w-[43.5rem] h-[33rem] left-7 ' id={styles.dis_sofa}/>

              </div>

            {/* </div> */}
         
          </div>
  
  
  
        </section>
  )
}

export default DiscountItems


