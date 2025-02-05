import Image from 'next/image';

export default function ShopGrid() {
  return (

    <>
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-gray-600 text-sm mb-4">
          Home / Pages / <span className="text-red-500">Shop Grid Default</span>
        </nav>
        
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Ecommerce Accessories & Fashion Items</h2>
        
        {/* Sorting & Filtering */}
        <div className="flex justify-between items-center mb-6">
          <p>Pay later | Sort by: <select className="border p-1 ml-2"><option>Latest</option></select></p>
          <input type="text" placeholder="Search..." className="border p-1" />
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <div className="relative w-full h-40">
                <Image src="/placeholder.png" alt="Product Image" layout="fill" objectFit="contain" />
              </div>
              <h3 className="mt-4 text-center text-gray-700 font-medium">Product Name</h3>
              <p className="text-center text-sm text-gray-500">$200 <span className="text-red-500">$150</span></p>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-10 bg-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold">Hekto</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded">Sign Up</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded">Contact</button>
          </div>
        </div>
      </div>
    </div></>
  );
}
