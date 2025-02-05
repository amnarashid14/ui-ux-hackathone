import React from 'react'
import Image from 'next/image'
import styles from '@/styles/ProductCard.module.css'
const Discount = () => {
  return (
   <section className={styles.discountCard}>
   
      <div className="bg-[rgba(255,246,251,1)] ">
   <h1 className="font-semibold text-2xl text-center text-[rgba(21,24,117,1)] relative top-4 ">23% off in all products</h1>
   <p className="textOne underline lato-bold font-semibold text-basetext-center relative top-6 left-[4.8rem]">Shop Now</p>
   
   <Image src='/image/clockpicture.png' height={207} width={213} alt='Loading...' className={styles.clockCard} />
      </div>
   
      <div className="bg-[rgba(238,239,251,1)] ">
       <h1 className="font-semibold text-2xl text-center text-[rgba(21,24,117,1)] relative top-4 ">23% off in all products</h1>
   <p className="textOne underline lato-bold font-semibold text-basetext-center relative top-6 left-[4rem]">View Collection</p>
   
   <Image src='/image/cupboard2.png' height={100} width={100} alt='Loading...' className={styles.cupBoard}/>
   </div>
   
      <div className={styles.chairCard}>
       <div className="w-full flex items-center gap-1">
         <div className="w-1/4 bg-[rgba(245,246,248,1)]">
         <Image src='/image/seat1.png' height={100} width={100} alt='Chair Picture' className=''/></div>
         <h1 className="text-[rgba(21,24,117,1)]">
         Executive Seat chair
         <br/>$<del>32.00</del>
         </h1>
       </div>
   
       <div className="w-full flex items-center gap-1 ">
       <div className="w-1/4 bg-[rgba(245,246,248,1)]">
         <Image src='/image/seat1.png' height={100} width={100} alt='Chair Picture' className=''/></div>
         <h1 className="text-[rgba(21,24,117,1)]">
         Executive Seat chair
         <br/>$<del>32.00</del>
         </h1>
       </div>
       <div className="w-full flex items-center gap-1">
       <div className="w-1/4 bg-[rgba(245,246,248,1)]">
         <Image src='/image/seat1.png' height={100} width={100} alt='Chair Picture' className=''/></div>
         <h1 className="text-[rgba(21,24,117,1)]">
         Executive Seat chair
         <br/>$<del>32.00</del>
         </h1>
       </div>
      </div>
   </section>
  )
}

export default Discount
