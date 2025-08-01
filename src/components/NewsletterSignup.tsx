'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    setEmail('')
    alert('Thank you for signing up!')
  }

  return (
    <motion.div 
      className="bg-[#F5F5F5] py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#4A4A4A] mb-4">Stay Updated</h2>
        <p className="text-xl text-[#4A4A4A] mb-6">
          Sign up for our newsletter to receive the latest updates and offers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A4A4A]"
          />
          <motion.button
            type="submit"
            className="bg-white text-[#4A4A4A] border border-[#4A4A4A] px-6 py-2 rounded hover:bg-[#4A4A4A] hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}