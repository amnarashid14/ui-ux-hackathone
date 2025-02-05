import React from 'react'
import Image from 'next/image'
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/Components/ui/card"
type cardDescription = {
    source: string,
    description: string,
    code: string,
    price: string,
    className: string,
 

}

const ProductCard = (props: cardDescription) => {

    return (

  
        <Card className={props.className} >
            <CardHeader className='bgColor'>

                <CardDescription className='     rounded-t-lg w-screen h-[11.1rem]'>
     <div className="flex w-full items-center gap-3 text-[rgba(19,137,255,1)] ">
                        <button className='flex  ' type='button'><BsCart />.</button>
                        <button className='flex  ' type='button'><IoIosHeartEmpty />.</button>
                        <button className='flex  ' type='button'><HiMiniMagnifyingGlassPlus />.</button>
                    </div>
                    <Image src={props.source} width={100} height={100} alt='Loading...' className='w-[178px] h-[178px]' />


               
                </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col  items-center one '>
                <p className='text-[#FB2E86] lato-bold text-lg text-center '>{props.description}</p>
                <div className="flex w-16 gap-2 h-3  my-[0.6rem]">
                    <div className="w-4 rounded-lg bg-[#05E6B7]  h-1"></div>
                    <div className="w-4 rounded-lg bg-[#F701A8] h-1"></div>
                    <div className="w-4 rounded-lg bg-[#FFEAC1] h-1"></div>
                </div>
                <p className='text-[#151875] my-2  two'> {props.code}</p>
                <p className='text-[#151875] my-2 two'> {props.price}</p>
            </CardContent>

        </Card>





    );
}




export default ProductCard
