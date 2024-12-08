import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
const Header = () => {
    return (
        <div className='w-[99vw] bg-[#7E33E0] h-11 flex justify-between px-3 text 
        md:w-screen
        md:flex-col md:items-center 
        md:h-full
        sm:px-0
        '>


{/* Contact */}
            <ul className="flex items-center gap-8  w-[40%] 
             lg:justify-start lg:gap-10 
             md:self-end md:w-fit
             sm:px-4
            ">
                <li className=" font-semibold text-base flex gap-3 sm:text-xs sm:text-center"> <FaRegEnvelope className='mt-[3px]' /> mhhasanul@gmail.com</li>
                <li className=" font-semibold text-base flex gap-3 sm:text-xs sm:text-center">
                    <FiPhoneCall className='mt-[3px]' /><p className=''>(12345)67890</p></li>
            </ul>

{/* Other Info */}
            <ul className=" flex items-center w-[40%] justify-between 
            
    md:gap-2 md:self-start
    sm:w-screen  sm:gap-4
            ">
                <li className="flex gap-[2px]">English
                    <IoIosArrowDown className='mt-[5px]' /></li>
                <li className="flex gap-[2px]">USD
                    <IoIosArrowDown className='mt-[5px]' /></li>
                <li className="flex gap-[2px]">Login
                    <RiUser3Line className='mt-[2px]' /></li>
                <li className="flex gap-[3px]">Wishlist
                    <FaRegHeart className='mt-[2px]' /></li>
                <li className="lg:ml-3">
                    <BsCart2 /></li>
            </ul>
        </div>
    )
}

export default Header
