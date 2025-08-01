// pages/products/fruits/apples.tsx

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const OrganicApplesPage = () => (
  <div className="min-h-screen flex flex-col" style={{ marginTop: '60px' }}>
    <Header />
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <div className="w-1/2">
          <Image
            src="https://media.istockphoto.com/id/1328405538/vector/red-apple-fruit-logo.jpg?s=612x612&w=0&k=20&c=igg5cMJB9xD5QVwIHN_-DGphhNrECZSh5i_tKqPR8dc="
            alt="Organic Apples"
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="w-1/2 pl-8" style={{ marginTop: '60px' }}>
  <h2 className="text-2xl font-semibold text-[#333]">Price: &#8377;2.99</h2>
  <p className="text-lg text-[#555] mb-4">
    Organic Apples are a fresh, crisp, and healthy choice for any meal or snack. These apples are grown without synthetic pesticides or fertilizers, making them the perfect choice for health-conscious individuals.
  </p>
  <div className="text-md text-[#666]">
    <strong>Nutritional Information:</strong>
    <ul className="list-disc pl-5 mt-2">
      <li>Calories: 95</li>
      <li>Carbs: 25g</li>
      <li>Fiber: 4g</li>
      <li>Sugar: 19g</li>
      <li>Fat: 0g</li>
    </ul>
  </div>
  
  {/* Separate bold section for Quantity */}
  <div className="mt-4">
    <strong className="text-lg">Available Quantity: 5kg</strong> {/* You can update this dynamically */}
  </div>
</div>

      </div>

      <div className="bg-green-100 p-6 rounded-md mt-8">
        <h3 className="text-xl font-semibold text-[#333]">Why Choose Organic Apples?</h3>
        <p className="text-md text-[#555] mt-4">
          Organic Apples are not only a healthier option, but they also help support sustainable farming practices. By choosing organic, you're contributing to environmental preservation while enjoying a naturally sweet and healthy fruit.
        </p>
      </div>

      <div className="mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </main>
    <Footer />
  </div>
)

export default OrganicApplesPage
