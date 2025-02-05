import React from 'react'
import Image from 'next/image'

  
type Type={
    source:string,
    name:string,
    price:string,
    deletedPrice:string,
    
}
const TrendyProduct = (props:Type) => {

  return (
    <div className='w-full h-72  shadow-xl 
    shadow-[rgba(49,32,138,0.05)] flex flex-col items-center '>
     
          <div className="bg-[rgba(245,246,248,1)] px-2 py-3 w-11/12 flex justify-center h-56" >
           <Image src={props.source} width={100} height={100} alt={props.name}/>
            </div>

          <div className="lato-bold text-center">
            <h1 className="font-bold text-base leading-6 text-[rgba(21,24,117,1)] my-2">{props.name}</h1>
      
            <p className="text-[rgba(21,24,117,1)]">{props.price} &nbsp; <del className="text-[rgba(21,24,117,0.3)]">{props.deletedPrice}</del></p>
          </div>
        

    </div>
  )
}

export default TrendyProduct
