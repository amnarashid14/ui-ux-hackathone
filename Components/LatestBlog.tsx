import React from 'react'
import { FaPenNib } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import Link from 'next/link';
import Image from 'next/image';


function LatestBlog() {
  const blogPost = [
    { 
      id: 1,    
      img: '/image/blog1.jpeg' ,
      author:"Saber Ali", 
      date:"21 August,2020", 
      head:"Top essential trends in 2021",
      discription: 'More off this less hello samlande lied much over tightly circa horse taped mightly',  
    },
    { 
      id: 2,  
      img: '/image/blog2.jpeg', 
      author:"Saber Ali", 
      date:"21 August,2020", 
      head:"Top essential trends in 2021", 
      discription: 'More off this less hello samlande lied much over tightly circa horse taped mightly',     
    },
    { 
      id: 3,   
      img: '/image/blog3.jpeg' ,
      author:"Saber Ali", 
      date:"21 August,2020", 
      head:"Top essential trends in 2021",
      discription: 'More off this less hello samlande lied much over tightly circa horse taped mightly',     
    },
  ];
  return (

<div className="w-screen h-[30.9rem] grid  grid-cols-3 pl-24 
sm:grid-cols-1 sm:pl-0 
md:grid-cols-1 md:pl-6 lg:pl-2  md:gap-y-5 md:h-[80rem] " >
{blogPost.map((post)=>(
  <div key={post.id} className="w-5/6 h-full  flex flex-col  hove justify-between md:h-96 sm:w-11/12 sm:h-full ">
    {/* Image  */}
<Image src={post.img} alt='Loading' height={100} width={100} className='w-full h-1/2  rounded-lg shadow-xl '/>
{/* Writer  */}
  <div className=" flex ">
     <span className="flex text-sm ">
      <FaPenNib className='textOne mr-2 ml-1 '/>{post.author}</span>
      <span className='flex ml-10 text-sm'><LuCalendarDays  className=' mr-2 ml-1 my-1'/>{post.date}</span >
      </div>

      <h1 className='text-lg font-bold textTwo blog-head'>{post.head}</h1>
      
      <p className="text-base text-[#72718F] lato-bold font-normal ">
{post.discription}
      </p>

      <Link  href="/"className="underline textTwo mb-2 blog-btn">Read More</Link>
 </div>
))}
  </div>

  )
}

export default LatestBlog
