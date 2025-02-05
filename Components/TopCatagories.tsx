import React from 'react'
import styles from '@/styles/ProductCard.module.css'

const TopCatagories = () => {
  const products = [
    { id: 1, name: '24/7 Support',  price:'$56.00', img: '/image/topcat1.png' },
    { id: 2, name: '24/7 Support',   price:'$56.00', img: '/image/lp3.png' },
    { id: 3, name: '24/7 Support', price:'$56.00', img: '/image/tp1.png' },
    { id: 4, name: '24/7 Support', price:'$56.00', img: '/image/topcat1.png  ' },
  ];
  return (
  
       <div className="grid   w-screen grid-cols-4 pl-[1%]   h-[19rem] sm:border-2 sm:h-full sm:pl-10 "  id={styles.topCat}>

        {/* Map Function  */}
    {products.map((product) => (
<span className=' w-[18vw]  h-[40vh]  text-center  hove sm:w-3/4 sm:h-5/6 sm:gap-y-7 sm:p-1  sm:justify-center ' key={product.id} id={styles.box} >
           <div className='rounded-full  bg-[#f6f7fb] w-full h-full flex flex-col justify-center items-center div-btn mb-3 '>

            <img src={product.img} 
            className='w-3/4 sm:w-9/12'  alt={product.name} />

             <button className='text-white  bg-[#08D15F] py-1 px-2 view-btn sm:text-xs sm:m-1 lg:m-3' type="button"> View More</button>
              </div>
             <p className='text-[rgba(21,24,117,1)] mb-1 '>{product.name}</p>

            <p className="text-[rgba(21,24,117,1)] sm:mb-12">{product.price}</p>
             
             </span> 
              ))}
</div>

  )
}

export default TopCatagories
