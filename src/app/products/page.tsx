'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

// Product type definition
interface Product {
  id: string
  name: string
  price: number
  image: string
}

// Grouped Product Data by Category
const productCategories = [
  {
    title: 'Fruits',
    products: [
      { id: '1', name: 'Organic Apples', price: 2.99, image: 'https://media.istockphoto.com/id/1328405538/vector/red-apple-fruit-logo.jpg?s=612x612&w=0&k=20&c=igg5cMJB9xD5QVwIHN_-DGphhNrECZSh5i_tKqPR8dc=' },
      { id: '2', name: 'Bananas', price: 1.49, image: '/Bananas.jpg' },
      { id: '3', name: 'Oranges', price: 2.29, image: '/Oranges.jpg' },
    ],
    route: '/products/fruits',
  },
  {
    title: 'Vegetables',
    products: [
      { id: '4', name: 'Carrots', price: 1.99, image: '/carrot.jpg' },
      { id: '5', name: 'Spinach', price: 2.29, image: '/spinach.jpg' },
      { id: '6', name: 'Broccoli', price: 2.49, image: '/broccoli.jpg' },
    ],
    route: '/products/vegetables', // Updated path
  },
  {
    title: 'Dairy',
    products: [
      { id: '7', name: 'Fresh Milk', price: 3.49, image: '/milk.jpg' },
      { id: '8', name: 'Cheddar Cheese', price: 4.99, image: '/cheese.jpg' },
      { id: '9', name: 'Free-Range Eggs', price: 4.99, image: '/eggs.jpg' },
    ],
    route: '/products/dairy', // Updated path
  },
  {
    title: 'Grains',
    products: [
      { id: '13', name: 'Whole Wheat Bread', price: 2.99, image: '/bread.jpg' },
      { id: '14', name: 'Oatmeal', price: 3.99, image: '/oatmeal.jpg' },
      { id: '15', name: 'Brown Rice', price: 5.99, image: '/rice.jpg' },
    ],
    route: '/products/grains', // Updated path
  },
  {
    title: 'Herbs',
    products: [
      { id: '16', name: 'Basil Leaves', price: 1.99, image: '/basil.jpg' },
      { id: '17', name: 'Mint', price: 1.79, image: '/mint.jpg' },
      { id: '18', name: 'Cilantro', price: 1.99, image: '/cilantro.jpg' },
    ],
    route: '/products/herbs', // Updated path
  },
  {
    title: 'Other',
    products: [
      { id: '19', name: 'Honey', price: 6.99, image: '/honey.jpg' },
      { id: '20', name: 'Maple Syrup', price: 8.99, image: '/syrup.jpg' },
      { id: '21', name: 'Peanut Butter', price: 5.99, image: '/peanutbutter.jpg' },
    ],
    route: '/products/other', // Updated path
  },
]

const ProductsPage = () => {
  const renderCategory = (
    title: string,
    products: Product[],
    categoryRoute: string
  ) => (
    <div key={title} className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#6A6A6A]">{title}</h2>
        <Link href={categoryRoute}>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
            Explore
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="h-60 w-full relative">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-[#333] mb-2">{product.name}</h3>
              <p className="text-sm text-[#555] mb-4">&#8377;{product.price.toFixed(2)}</p>
              <Link href={`/products/fruits/apples`} passHref>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Check Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

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
            Our Products
          </h1>

          {productCategories.map(({ title, products, route }) =>
            renderCategory(title, products, route)
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductsPage
