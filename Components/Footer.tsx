import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram , FaTwitter } from "react-icons/fa6"


const Footer = () => {
  return (
    <footer className="text-gray-600 body-font mt-8">
    <div className="  px-5 py-24 mx-auto bg-[#EEEFFB] ">
      <div className="grid grid-cols-4 
       footer" >
{/* Mail box  lg:w-1/4 md:w-1/2 lg:border-red-500 md:border-purple-500*/}
      <div className=" w-full px-4 mb-4
      sm:w-full 
       ">
          <h2 className=" font-bold   text-[2.38rem] leading-[2.783rem]">Hekto</h2>

          <div className="w-full flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap items-end md:justify-start">
            <div className="relative w-full sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 sm:flex-row">
            
              <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Email:</label>

              <span className="w-full flex sm:flex-row input-email ">
              <input type="text" id="footer-field" name="footer-field" 
              placeholder='Enter Email address'
              className="w-full bg-gray-100  rounded  text-sm outline-none text-[#8A8FB9] p-1 leading-5 lato-bold"/>
                  <button className="bg-[#FB2E86] text px-6 py-1 rounded-[2px] text-base sm:mt-2" type='button'>Signup </button></span>
            </div>
        
          </div>
          <p className=" text-[#8A8FB9]   text-base font-normal mt-2 md:text-left sm:text-sm">Contact Info
            <br className="text-[#8A8FB9]   text-base font-normal "/>17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
{/*  */}

        <div className="sm:w-full  w-full px-4  ">
          <h2 className="title-font font-medium text-black  text-2xl mb-3">Catagories</h2>
          <ul className="list-none mb-10">
            <li>
              <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Laptops and Computers</Link>
            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Camera & Photography</Link>
            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Smart Phones & Tables</Link>            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Video Games & Consoles</Link>
            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Waterproof Headphones</Link>
            </li>
          </ul>
        </div>

        {/*  */}
        <div className="sm:w-full  w-full px-4  ">
          <h2 className="title-font font-medium text-black  text-2xl mb-3">Customer Care</h2>
          <ul className="list-none mb-10">
            <li>
              <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">My Account</Link>
            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Discount</Link>
            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Returns</Link>            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Order History</Link>
            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Order Tracking</Link>
            </li>
          </ul>
        </div>

        {/*  */}
        <div className="sm:w-full  w-full px-4  ">
          <h2 className="title-font font-medium text-black  text-2xl mb-3">Pages</h2>
          <ul className="list-none mb-10">
            <li>
              <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Blogs</Link>
            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Browse the Shop</Link>
            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Catagory</Link>            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Pre-Built Pages</Link>
            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">Visual Composer Elements</Link>
            </li>
            <li>
                <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">WooCommerce Pages</Link>
            </li>
          </ul>
        </div>
        </div>
    </div>
    {/*  */}
    <div className="bg-[#E7E4F8] ">
      <div className="container px-5 py-6 mx-auto flex items-center flex-row justify-between sm:flex-col
      sm:justify-evenly sm:w-1/2 sm:h-full footerTwo
      " >
    
        <p className="text-base text-[#9DA0AE]  sm:mt-0 mt-4">© Webecy - All Rights Reserved 
        </p>
        <span className="inline-flex  w-1/12  sm:w-full  sm:mt-0 mt-4 justify-evenly sm:justify-evenly iconBox" >
        <FaFacebookF  className='bg-[#151875] rounded-full w-1/4 h-full text-white p-1'/>
<FaInstagram className='bg-[#151875] rounded-full w-1/4 h-full text-white p-1'/>
<FaTwitter  className='bg-[#151875] rounded-full w-1/4 h-full text-white p-1'/>
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer


