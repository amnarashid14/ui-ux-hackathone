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
    <div className='w-[99vw] heading leading-[34px] flex justify-between items-center py-6
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
      <li className="color"><Link href='/'>Pages</Link></li>
      <li className="color"><Link href='/'>Products</Link></li>
      <li className="color"><Link href='/'>Blog</Link></li>
      <li className="color"><Link href='/'>Shop</Link></li>
      <li className="color"><Link href='/'>Contact</Link></li>
      </ul>

{/* Hamburger Menu */}

      <ul className="hidden md:flex order-3 ">
        <li className="">
      <Sheet >
  <SheetTrigger className=''><SquareMenu className=' text-[#FB2E86]'/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Hekto </SheetTitle>
      <SheetDescription>
      <nav className="flex justify-between  w-2/5 
      md:flex-col md:items-start
      "> 
      <ul className="">
      <li className="flex color "><Link href='/' className="flex">Home<IoIosArrowDown className='mt-2 md:hidden'/></Link></li>
      <li className="color"><Link href='/'>Pages</Link></li>
      <li className="color"><Link href='/'>Products</Link></li>
      <li className="color"><Link href='/'>Blog</Link></li>
      <li className="color"><Link href='/'>Shop</Link></li>
      <li className="color"><Link href='/'>Contact</Link></li>
     
      <li className="  flex w-full justify-end "><input type='search' placeholder={undefined} className='border-2 border-[#E7E6EF] w-2/3 md:w-3/4 sm:w-full'/><PiMagnifyingGlass className='bg-[#FB2E86] text-[38px] p-1 text-[#F3F9FF]'/>
      </li>
      </ul>
      </nav>

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