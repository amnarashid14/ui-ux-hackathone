import React from 'react'
import Image from 'next/image'
type Properties ={
    source :string ,
   heading :string ,
   desc :string ,
}
const ServiceCard = ({source, heading, desc}:Properties) => {
  return (
//     <div className=' w-[270px] h-[320px]'>
//       <Image src={props.source} width={100} height={100} alt='Loading' className='w-[65px] h-[65px] '/>

//       <h1 className="text-center text-[#1A0B5B] ">
//   {props.heading}
// </h1>

// <p className="lato-bold text-base text-[#1A0B5B4D]">{props.desc}</p>
//     </div>

<div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center">
<Image src={source} width={80} height={80} alt={heading} className="mb-4" />
<h3 className="text-lg font-semibold text-blue-900">{heading}</h3>
<p className="text-gray-500 mt-2 text-sm">{desc}</p>
</div>




  )
}

export default ServiceCard
