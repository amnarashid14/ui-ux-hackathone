
import Header from '@/Components/Header'
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Footer from '@/Components/Footer';
export default function Home() {
  return (
    <>
     <div className='flex flex-col justify-center items-center '>
    <Header/>
    <Navbar/>
    <Hero headingOne='Featured Product' headingTwo='What Shopex Offer!'  headingFour='Trending Products'
    headingFive='Discount Item'
    headingSix='Top Categories' 
    headingSeven='Latest Blog'/>
    <Footer/>
    </div >
    </>
  );
}
