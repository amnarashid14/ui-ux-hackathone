import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { PiMagnifyingGlass } from "react-icons/pi";
import Link from 'next/link';
import { SquareMenu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet"
const Navbar = () => {
  return (
    <>
    <div className='w-screen heading leading-[34px] flex justify-between items-center py-6
    md:justify-between
    
    '>
      {/* Logo */}
      <div className="font-bold text-[34px] w-[10%]
      
      ">Hekto</div>

      {/* Nav Tabs */}
      <ul className="flex justify-between  w-2/5 
      md:hidden
      ">
      <li className="flex color "><Link href='/' className="flex">Home<IoIosArrowDown className='mt-2'/></Link></li>
      <li className="color"><Link href='/pages'>Pages</Link></li>
      <li className="color"><Link href='/products'>Products</Link></li>
      <li className="color"><Link href='/blog'>Blog</Link></li>
      <li className="color"><Link href='/shop'>Shop</Link></li>
      <li className="color"><Link href='/about'>Contact</Link></li>
      </ul>

{/* Hamburger Menu for small screens */}

      <ul className="hidden md:flex order-3 ">
        <li className="">
      <Sheet >
  <SheetTrigger className=''><SquareMenu className=' text-[#FB2E86]'/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Hekto </SheetTitle>
      <SheetDescription>
      <div className="flex   w-full 
      justify-start
      md:flex-col md:items-start
      "> 
     
      <Link href='/' className="flex color ">Home<IoIosArrowDown className='mt-2 md:hidden'/></Link>
      <Link href='/pages' className="color">Pages</Link>
      <Link href='/products' className="color">Products</Link>
      <Link href='/blog' className="color">Blog</Link>
      <Link href='/shop' className="color">Shop</Link>
      <Link href='/contact' className="color">Contact</Link>
     
      <div className="  flex w-full justify-end "><input type='search' placeholder={undefined} className='border-2 border-[#E7E6EF] w-full  md:w-full  sm:w-full'/><PiMagnifyingGlass className='bg-[#FB2E86] text-[38px] p-1 text-[#F3F9FF]'/>
      </div>
         </div>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet></li>
      </ul>

      {/* Search bar */}
      <div className="  flex w-1/4 justify-end md:hidden  "><input type='search' placeholder={undefined} className='border-2 border-[#E7E6EF] w-2/3 md:w-3/4'/><PiMagnifyingGlass className='bg-[#FB2E86] text-[38px] p-1 text-[#F3F9FF]'/></div>
    </div>

    {/* Toggle Button */}

 


</>

  )
}

export default Navbar
