import React from 'react'
import Image from 'next/image'
import { GiDiamonds } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";
import styles from '@/styles/ProductCard.module.css'

import ProductCard from './ProductCard';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/Components/ui/card";
import LatestProduct from './LatestProduct';
import ServiceCard from './ServiceCard';
import TrendyProduct from './TrendyProduct';
type text = {
  headingOne :string,
headingTwo:string,
headingThree:string,
headingFour:string,
}

const Hero = ({headingOne, headingTwo , headingThree , headingFour}: text ) => {
  return (
<>

{/* Main Hero  */}
    <div className='w-screen relative h-[50rem] bgColor border-2 border-black
  
   
    '>

      {/* Lamp Image */}
      <Image src='/image/heroleft.png' width={100} height={100} alt='Loading...' className='w-[28vw] h-[58vh] absolute top-0 
sm:hidden sm:w-0 sm:h-0 
md:h-[38vh]
xl:left-3 xl:w-[25vw] xl:h-[48vh]

      ' />

      {/* Hero Text  */}
      <div className="absolute 3xl:top-[46%] 3xl:left-[20vw] 3xl:w-1/2 


"
  id={styles.Hero}>
        <p className="textOne ">Best Furniture For Your Castle...</p>
        <h1 className="text-[53px] w-full  leading-[81px] sm:text-3xl md:text-5xl">New Furniture Collection Trends in 2020</h1>
        <p className='w-4/5 subText leading-[28px] lato-bold sm:text-sm sm:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in just o.</p>
        <button className="bg-[#FB2E86] text mt-5 px-6 py-2 rounded-[2px]" type='button'>Shop Now</button>
      </div>

{/* Sofa Image */}
      <div className="heroImage w-[33vw] h-[70vh] absolute top-[33%] left-[65%]
      3xl:top-[6%]
      md:left-[55%] 
      md:hidden
   "
   id={styles.Sofa}
   >
        <div className="relative w-full h-full sm:h-fit md:h-fit ">
          <Image src='/image/heroSofa.png' width={100} height={100} alt='Loading...' className=' absolute w-[85%] top-11' />
          <Image src='/image/disTag.png' width={100} height={100} alt='Loading...' className='absolute w-[20%] right-8 top-4  z-10' />
        </div>

      </div>

{/* Slide Changer  */}
<div className="flex absolute bottom-0 left-1/2 w-1/12 justify-between mb-5 ">
<GiDiamonds className=' text-[#FB2E86] '/>
<GiDiamonds className=' text-[#FB2E86] '/> 
<GiDiamonds className=' text-[#FB2E86] '/>
</div>
    </div>


    {/* Featured Product */}
    

<h1 className="text-center my-7 text-[#1A0B5B] text-[42px]">
  {headingOne}
</h1>
<div className=" " id={styles.featureprod}>


    <ProductCard source='/image/fp1.png' description='Cantilever chair' code='Code - Y523201' price='$42.00' className='w-[225px] h-[361px] rounded-lg '/>

{/* Customized Card Component  */}
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

            <ProductCard source='/image/fp1.png' description='Cantilever chair' code='Code - Y523201' price='$42.00' className='w-[225px] h-[361px] rounded-lg '/>

            <ProductCard source='/image/fp1.png' description='Cantilever chair' code='Code - Y523201' price='$42.00' className='w-[225px] h-[361px] rounded-lg '/>
        

            


    </div>



    {/* Latest Product  */}

    <LatestProduct/>

    {/* What Shopex Offers   */}

    <h1 className="text-center my-7 text-[#1A0B5B] text-[42px]">
  {headingTwo}
</h1>
<div className="grid gap-6  grid-cols-1 3xl:grid-cols-4 p-4" id={styles.services}>

      <ServiceCard source="/image/icon1.png" heading="24/7 Support" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
      <ServiceCard source="/image/icon2.png" heading="Secure Payment" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
      <ServiceCard source="/image/icon3.png" heading="Fast Delivery" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
      <ServiceCard source="/image/icon4.png" heading="Quality Assurance" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
    </div>


 
    <div className="bg-[#F1F0FF] w-screen h-[80vh] flex justify-center items-center">

      <div className="w-2/5 h-4/5 flex bg-[url('/image/Ellipse.png')] bg-no-repeat bg-contain bg-center"> 
      <Image src='/image/sofablue.png' width={200} height={200} alt='Loading' className='w-3/5 h-full ml-[21%] '/>
      
      </div>
      <div className="w-1/2 ">
      <h1 className=" my-7 text-[#1A0B5B] text-[35px] tracking-[1.5%]">
      Unique Features Of leatest &
      Trending Poducts
</h1>
<ul className="text-[#ACABC3] ">
  <li className="lato-bold text-base font-medium leading-[21.2px] tracking-[0.015em] text-left flex   
"><FaCircle className='text-[11px] text-[#F52B70] mt-1 mr-5 '/>All frames constructed with hardwood solids and laminates</li>
  <li className="lato-bold text-base font-medium leading-[21.2px] tracking-[0.015em] text-left  flex "><FaCircle className='text-[11px] text-[#2B2BF5] mt-1 mr-5'/>Reinforced with double wood dowels, glue, screw - nails corner 
  blocks and machine nails</li>
  <li className="lato-bold text-base font-medium leading-[21.2px] tracking-[0.015em] text-left flex "><FaCircle className='text-[11px] mt-1 mr-5 text-[#2BF5CC]'/>Arms, backs and seats are structurally reinforced</li>
  
</ul>

      </div>
    </div>

{/* Trendy Products  */}
{/* 
<h1 className="text-center my-7 text-[#1A0B5B] text-[42px]">
  {headingFour}
</h1>

<div className="">

  <TrendyProduct source='/public/image/tp1.png'/>
</div> */}
    </>
  )
}

export default Hero
