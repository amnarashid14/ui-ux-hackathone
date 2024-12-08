import React from 'react'
import Image from 'next/image'
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
    className:string,

}

const ProductCard = (props: cardDescription) => {
    
    return (
        <div >
            <Card className={props.className}>
                <CardHeader className='bgColor'>
                    <CardDescription className='bgColor rounded-t-lg'><Image src={props.source} width={100} height={100} alt='Loading...' className='w-[178px] h-[178px]' /></CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col items-center'>
                    <p className='text-[#FB2E86] lato-bold text-lg text-center '>{props.description}</p>
                    <div className="flex w-16 gap-3 h-1  my-2">
                        <div className="w-4 rounded-lg bg-[#05E6B7] "></div>
                        <div className="w-4 rounded-lg bg-[#F701A8]"></div>
                        <div className="w-4 rounded-lg bg-[#FFEAC1]"></div>
                    </div>
                    <p className='text-[#151875] my-2 '> {props.code}</p>
                    <p className='text-[#151875] my-2 '> {props.price}</p>
                </CardContent>

            </Card>
        </div>




    );
}




export default ProductCard
