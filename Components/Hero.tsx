import React from 'react'
import Image from 'next/image'
import { GiDiamonds } from "react-icons/gi";
import ProductCard from './ProductCard';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/Components/ui/card";
import ProductGrid from './ProductGrid';
type text = {
  headingOne :string
}

const Hero = (props: text ) => {
  return (
<>

{/* Main Hero  */}
    <div className='w-[99vw] relative h-[50rem] bgColor border-2 border-black
  
   
    '>

      {/* Lamp Image */}
      <Image src='/image/heroleft.png' width={100} height={100} alt='Loading...' className='w-[28vw] h-[58vh] absolute top-0 
sm:hidden sm:w-0 sm:h-0

      ' />

      {/* Hero Text  */}
      <div className="absolute top-[26%] left-64 w-1/2 
 md:left-3 md:w-screen md:top-[50%]
  sm:top-0
      
      ">
        <p className="textOne ">Best Furniture For Your Castle...</p>
        <h1 className="text-[53px] w-full  leading-[81px] sm:text-3xl">New Furniture Collection Trends in 2020</h1>
        <p className='w-4/5 subText leading-[28px] lato-bold sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in just o.</p>
        <button className="bg-[#FB2E86] text mt-5 px-6 py-2 rounded-[2px]" type='button'>Shop Now</button>
      </div>

{/* Sofa Image */}
      <div className="heroImage w-[33vw] h-[70vh] absolute top-[33%] left-[65%]
      md:left-[55%] 
      sm:hidden
      md:hidden
   ">
        <div className="relative w-full h-full sm:h-fit md:h-fit ">
          <Image src='/image/heroSofa.png' width={100} height={100} alt='Loading...' className=' absolute w-[85%] top-11' />
          <Image src='/image/disTag.png' width={100} height={100} alt='Loading...' className='absolute w-[20%] right-8 top-4  z-10' />
        </div>

      </div>

{/* Slide Changer  */}
<div className="flex absolute bottom-0 left-1/2 w-1/12 justify-between mb-5">
<GiDiamonds className=' text-[#FB2E86] '/>
<GiDiamonds className=' text-[#FB2E86] '/>
<GiDiamonds className=' text-[#FB2E86] '/>
</div>
    </div>


    {/* Featured Product */}
    

<h1 className="text-center my-7 text-[#1A0B5B] text-[42px]">
  {props.headingOne}
</h1>
<div className="w-screen grid grid-rows-1 grid-cols-4 

 lg:grid-cols-3 lg:gap-y-5 
 md:grid-cols-2
sm:grid-cols-1
">

<ProductCard source='/image/fp1.png' description='Cantilever chair' code='Code - Y523201' price='$42.00' className='w-[225px] h-[361px] rounded-lg'/>


<Card className='w-[240px] h-[361px] '>
                <CardHeader className='bgColor'>
                    <CardDescription className='bgColor w-[178px] h-[178px] Product-Card'>

                   </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col w-[240px] h-[135px] rounded-b-lg items-center bg-[#2F1AC4] '>
                    <p className='text-[#FB2E86] lato-bold text-lg text-center '>Cantilever chair</p>
                    <div className="flex w-16 gap-2 h-3  my-2 ">
                        <div className="w-4 rounded-lg bg-[#05E6B7] h-1"></div>
                        <div className="w-4 rounded-lg bg-[#F701A8] h-1"></div>
                        <div className="w-4 rounded-lg bg-[#FFEAC1] h-1"></div>
                    </div>
                    <p className='text-[#F1F1F1] my-2 '> Code - Y523201</p>
                    <p className='text-[#F1F1F1] my-2 '> $42.00</p>
                </CardContent>

            </Card>

            <ProductCard source='/image/fp1.png' description='Cantilever chair' code='Code - Y523201' price='$42.00' className='w-[225px] h-[361px] rounded-lg md:hidden'/>

            <ProductCard source='/image/fp1.png' description='Cantilever chair' code='Code - Y523201' price='$42.00' className='w-[225px] h-[361px] rounded-lg lg:hidden mg:inline'/>


    </div>



    {/* Latest Product  */}


    <ProductGrid/>
    </>
  )
}

export default Hero
