import React from 'react'
import styles from '@/styles/ProductCard.module.css'
import Link from 'next/link';
const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Comfort Handy Craft', price: '$42.00', discount: '$65.00', img: '/image/lp1.png ' },
    { id: 2, name: 'Comfort Handy Craft', price: '$46.00', discount: '$68.00', img: '/image/lp2.png ', isSale: true },
    { id: 3, name: 'Comfort Handy Craft', price: '$41.00', discount: '$60.00', img: '/image/lp3.png ' },
    { id: 4, name: 'Comfort Handy Craft', price: '$42.00', discount: '$65.00', img: '/image/lp4.png ' },
    { id: 5, name: 'Comfort Handy Craft', price: '$48.00', discount: '$66.00', img: '/image/lp5.png ' },
    { id: 6, name: 'Comfort Handy Craft', price: '$42.00', discount: '$65.00', img: '/image/lp6.png ' },
  ];

  return (


    <div className="min-h-screen  p-4 mt-4">

      <div className="text-center my-8">

        {/*Heading */}
      <h1 className="text-center my-7 text-[#1A0B5B] text-[42px] font-bold">
 Latest Product
</h1>

       {/*Navbar */}
        <div className="flex justify-center space-x-4 mt-2 sm:text-sm">
          <Link href='/' className=" font-semibold color">New Arrival</Link>
          <Link href='/' className='color'>Best Seller</Link>
          <Link href='/' className='color'>Featured</Link>
          <Link href='/' className='color'>Special Offer</Link>
        </div>
      </div>

      <div className="grid gap-6 
      3xl:grid-cols-3 3xl:grid-rows-2
      " id={styles.latestProd}>

        {/*using map method  */}
        {products.map((product) => (


          <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg relative">
            {/* Sale  */}
            {product.isSale && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                Sale
              </div>
            )}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-contain rounded-md"
            />
            <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-blue-500 font-semibold">{product.price}</span>
              <span className="line-through text-gray-400">{product.discount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default ProductGrid
