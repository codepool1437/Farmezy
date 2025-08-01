'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'
import Image from 'next/image' // Image optimization

// Product type definition
interface Product {
  id: string
  name: string
  price: number
  image: string
}

// Fruits Data
const fruits: Product[] = [
    { id: '1', name: 'Organic Apples', price: 2.99, image: '/organic_apples.jpg' },
    { id: '2', name: 'Bananas', price: 1.49, image: '/bananas.jpg' },
    { id: '3', name: 'Oranges', price: 2.29, image: '/oranges.jpg' },
    { id: '4', name: 'Grapes', price: 3.49, image: '/grapes.jpg' },
    { id: '5', name: 'Strawberries', price: 4.99, image: '/strawberries.jpg' },
    { id: '6', name: 'Watermelon', price: 5.49, image: '/watermelon.jpg' },
    { id: '7', name: 'Blueberries', price: 6.29, image: '/blueberries.jpg' },
    { id: '8', name: 'Pineapple', price: 3.99, image: '/pineapple.jpg' },
    { id: '9', name: 'Mango', price: 2.99, image: '/mango.jpg' },
    { id: '10', name: 'Peach', price: 3.49, image: '/peach.jpg' },
    { id: '11', name: 'Kiwi', price: 1.99, image: '/kiwi.jpg' },
    { id: '12', name: 'Avocado', price: 2.49, image: '/avocado.jpg' },
    { id: '13', name: 'Coconut', price: 4.99, image: '/coconut.jpg' },
    { id: '14', name: 'Pomegranate', price: 3.49, image: '/pomegranate.jpg' },
    { id: '15', name: 'Lychee', price: 5.49, image: '/lychee.jpg' },
    { id: '16', name: 'Plum', price: 2.99, image: '/plum.jpg' },
    { id: '17', name: 'Apricot', price: 3.49, image: '/apricot.jpg' },
    { id: '18', name: 'Fig', price: 2.29, image: '/fig.jpg' },
    { id: '19', name: 'Dragon Fruit', price: 4.99, image: '/dragon_fruit.jpg' },

]

const FruitsPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
            Fresh Fruits
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fruits.map((fruit) => (
              <motion.div
                key={fruit.id}
                className="group border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-60 w-full relative">
                  <Image
                    src={fruit.image}
                    alt={fruit.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-md"
                    priority // Ensures faster loading
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium text-[#333] mb-2">
                    {fruit.name}
                  </h3>
                  <p className="text-sm text-[#555] mb-4">
                   ₹{fruit.price.toFixed(2)}
                  </p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Check Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default FruitsPage
