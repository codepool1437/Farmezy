'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'
import { useHeader } from '@/contexts/HeaderContext'

export default function Component() {
  const { setIsTransparent } = useHeader()
  const heroRef = useRef<HTMLElement>(null)
  const featuredProducts = [
    { id: '1', name: 'Organic Apples', price: 2.99, image: '/placeholder.svg?height=300&width=300' },
    { id: '2', name: 'Fresh Tomatoes', price: 1.99, image: '/placeholder.svg?height=300&width=300' },
    { id: '3', name: 'Grass-fed Beef', price: 9.99, image: '/placeholder.svg?height=300&width=300' },
  ]

  useEffect(() => {
    setIsTransparent(true) // Set to transparent on homepage

    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom
        setIsTransparent(heroBottom > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setIsTransparent])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section ref={heroRef}>
          <Hero />
        </section>
        
        {/* Rest of the component remains unchanged */}
      </main>
      <Footer />
    </div>
  )
}