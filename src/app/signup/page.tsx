'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const router = useRouter() // Initialize the router
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('') // State for error messages
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('') // Reset error message
  
    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and include upper and lower case letters, numbers, and special characters.')
      return
    }
  
    if (password !== confirmPassword) {
      setError('Passwords do not match!')
      return
    }
  
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })
  
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json()
        if (data.error) {
          setError(data.error) // Set the error message from the server
        } else {
          setError('Something went wrong')
        }
      }
    } catch (error) {
      console.error('Signup error:', error)
      setError('An unexpected error occurred.')
    }
  }
  

  useEffect(() => {
    if (isSubmitted) {
      router.push('/signin')
    }
  }, [isSubmitted, router])

  return (
    <div className="min-h-screen flex flex-col">
      <Header hideSearch={true} />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-[#4A4A4A] mb-6">Sign Up</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4A4A4A]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#4A4A4A]">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#4A4A4A]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#4A4A4A] text-white py-2 px-4 rounded-md hover:bg-[#3A3A3A] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-[#4A4A4A]">
                Already have an account?{' '}
                <Link href="/signin" className="text-[#4A4A4A] font-bold hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
