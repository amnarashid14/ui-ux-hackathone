import React from 'react'
import Image from 'next/image'
import { GiDiamonds } from "react-icons/gi";

import styles from '@/styles/ProductCard.module.css'

import FeaturedProduct from './FeaturedProduct';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/Components/ui/card";
import LatestProduct from './LatestProduct';
import ServiceCard from './ServiceCard';
import TrendyProduct from './TrendyProduct';
import Discount from './DiscountCard';
import Features from './Features';
import { FaCircle } from 'react-icons/fa';
import DiscountItems from './DiscountItems';
import DiscountCard from './DiscountCard';
import TopCatagories from './TopCatagories';
import LatestBlog from './LatestBlog';
type text = {
  headingOne: string,
  headingTwo: string,
  headingThree: string,
  headingFour: string,
  headingFive: string,
  headingSix:string,
  headingSeven:string,
}


const Hero = ({ headingOne, headingTwo, headingThree, headingFour, headingFive , headingSix , headingSeven }: text) => {
  return (
    <>

      {/* Main Hero  */}
      <div className='w-screen relative h-[50rem] bgColor' id={styles.mainHero}>

        {/* Lamp Image */}
        <Image src='/image/heroleft.png' width={100} height={100} alt='Loading...' className='w-[28vw] h-[58vh] absolute top-0 
sm:hidden sm:w-0 sm:h-0 
md:h-[38vh]
xl:left-3 xl:w-[25vw] xl:h-[48vh]

      ' />

        {/* Hero Text  */}
        <div className="absolute 3xl:top-[46%] 3xl:left-[20vw] 3xl:w-1/2 "
          id={styles.Hero}>
          <p className="textOne ">Best Furniture For Your Castle...</p>
          <h1 className="text-[53px] w-full  leading-[3rem] sm:text-xl md:text-[2.5rem] ">New Furniture Collection Trends in 2020</h1>
          <p className=' subText leading-[28px] lato-bold sm:text-sm sm:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
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
          <GiDiamonds className=' text-[#FB2E86] ' />
          <GiDiamonds className=' text-[#FB2E86] ' />
          <GiDiamonds className=' text-[#FB2E86] ' />
        </div>
      </div>


      {/* Featured Product */}


      <h1 className="text-center my-7 textTwo text-[42px] font-bold">
        {headingOne}
      </h1>




      <div id={styles.featureprod}>


        <FeaturedProduct source='/image/fp1.png' description='Cantilever chair' code='Code - Y523201' price='$42.00' className='w-[225px] h-[361px] rounded-lg Hov' />

        <FeaturedProduct source='/image/fp2.png' description='Cantilever chair' code='Code - Y523201' price='$42.00' className='w-[225px] h-[361px] rounded-lg Hov' />



        <FeaturedProduct source='/image/fp1.png' description='Cantilever chair' code='Code - Y523201' price='$42.00' className='w-[225px] h-[361px] rounded-lg Hov' />

        <FeaturedProduct source='/image/fp1.png' description='Cantilever chair' code='Code - Y523201' price='$42.00' className='w-[225px] h-[361px] rounded-lg Hov' />





      </div>



      {/* Latest Product  */}

      <LatestProduct />



      {/* What Shopex Offers   */}

      <h1 className="text-center  textTwo text-[42px] font-bold">
        {headingTwo}
      </h1>
      <ServiceCard />




      {/* Unique Features Of leatest & Trending Poducts */}

      <Features />




      {/* Trendy Products  */}

      <section>
        <h1 className="text-center my-7 textTwo text-[42px] font-bold">
          {headingFour}
        </h1>


        <div className="w-screen  grid  3xl:grid-cols-4 
md:grid-cols-3  justify-center 
" id={styles.trendy}>

          <TrendyProduct source="/image/trp1.png"
            name="Cantilever chair" price='$26.00 ' deletedPrice='$42.00' />

          <TrendyProduct source="/image/trp2.png"
            name="Cantilever chair" price='$26.00 ' deletedPrice='$42.00' />

          <TrendyProduct source="/image/trp3.png"
            name="Cantilever chair" price='$26.00 ' deletedPrice='$42.00' />

          <TrendyProduct source="/image/trp4.png"
            name="Cantilever chair" price='$26.00 ' deletedPrice='$42.00' />


        </div>
      </section>


      {/*   Special Discount Cards*/}
      <DiscountCard/>


      {/* Discount Item*/}
<section className="md:h-[50rem] md:border-2 md:border-blue-600">
      <h1 className="text-center my-7 textTwo text-[42px] font-bold sm:hidden">
            {headingFive}
          </h1>

          <DiscountItems/>
</section>

          {/* Top Categories */}

          <section className=' md:h-[45rem]  md:w-screen '>
      <h1 className="text-center my-7 textTwo text-[42px] font-bold
      sm:text-xl 
      md:text-3xl">
            {headingSix}
          </h1>
              <TopCatagories/>
</section>

{/*Get Leatest Update By Subscribe
 Our Newslater */}
 <section className="w-screen h-[19.5rem]  mt-36 relative" id={styles.newslaterSec}>
<div className="w-[45%]  text-center absolute top-[35%] left-[28%] sm:top-[25%] md:top-6">
  <h1 className="text-4xl tracking-[1.5%] text-center font-medium textTwo leading-[3.4rem] sm:text-xl md:text-2xl">Get Latest Update By Subscribe
  Our Newslater </h1>
  <button className="bg-[#FB2E86] text mt-5 px-6 py-2 rounded-[2px]" type='button'>Shop Now</button>
  </div>

</section>


{/* LOGO Five  */}
<section className=" w-screen px-44 py-14 sm:hidden md:hidden">
  <img src="/image/logo-five.png" className ="" alt="Loading..." />
</section>

{/* Latest Blog  */}
<section className="">
<h1 className="text-center my-7 textTwo text-[42px] font-bold
      sm:text-xl 
      md:text-3xl">
            {headingSeven}
          </h1> 
<LatestBlog  />
</section>
    </>
  )
}

export default Hero
