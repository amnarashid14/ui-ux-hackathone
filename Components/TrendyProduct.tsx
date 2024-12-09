import React from 'react'
import Image from 'next/image'
type Type={
    source:string,


}
const TrendyProduct = (props:Type) => {
  return (
    <div className='w-[270px] h-[350px] p-2 '>
        <Image src={props.source} width={247} height={244} alt='Loading...'/>

<p className="lato-bold text-base text-center ">Cantilever chair</p><br/>
<p className="lato-bold text-base text-center ">Cantilever chair</p>

    </div>
  )
}

export default TrendyProduct
