'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Organic Apples', price: 2.99, quantity: 2 },
    { id: '2', name: 'Fresh Milk', price: 3.49, quantity: 1 },
  ])

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const updateQuantity = (id: string, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-[#4A4A4A] mb-6">Your Cart</h1>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="bg-[#4A4A4A] text-white w-6 h-6 rounded-full"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="bg-[#4A4A4A] text-white w-6 h-6 rounded-full"
                        >
                          +
                        </button>
                        <span className="ml-4">
                          &#8377;{(item.quantity * item.price).toFixed(2)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Total:</span>
                    <span className="text-xl font-bold">&#8377;{total.toFixed(2)}</span>
                  </div>
                </div>
                <motion.button
                  className="mt-6 w-full bg-[#4A4A4A] text-white py-2 px-4 rounded-md hover:bg-[#3A3A3A] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Proceed to Checkout
                </motion.button>
              </>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}