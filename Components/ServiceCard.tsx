import Image from 'next/image';
import React from 'react'
const ServiceCard = () => {
  const products = [
    { id: 1, name: '24/7 Support',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.', img: '/image/icon1.png ' },
    { id: 2, name: '24/7 Support',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.', img: '/image/icon2.png  ', isSale: true },
    { id: 3, name: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.', img: '/image/icon3.png ' },
    { id: 4, name: '24/7 Support',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.', img: '/image/icon4.png  ' },
  ];


  
  return (


    <div className="min-h-max  p-4 mt-4  mb-2 ">

      <div className="grid serviceCard gap-6 
      place-items-center 
      p-3 
      ">

        {products.map((product) => (

          <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg relative  flex flex-col justify-center items-center ">
            
            <Image width={100} height={100}
              src={product.img}
              alt={product.name}
              className="w-1/4 h-48  object-contain rounded-md "
            />

            <h3 className="mt-1 text-xl font-bold text-[#151875] mb-3">{product.name}</h3>

            <div className="flex justify-between items-center mt-2">
              <span className="text-base font-bold text-center text-gray-400">{product.description}</span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default ServiceCard

