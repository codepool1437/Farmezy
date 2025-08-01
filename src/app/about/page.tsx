'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
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
            <h1 className="text-3xl font-bold text-[#4A4A4A] mb-6">About Farmezy</h1>
            <div className="space-y-4">
              <p>
                Farmezy is a revolutionary platform designed to empower farmers by providing them with direct access to the market. Our mission is to create a sustainable and efficient agricultural ecosystem that benefits both farmers and consumers.
              </p>
              <p>
                Founded in 2024 By Guardians of Github, Farmezy will quickly grow to become a trusted partner for farmers across the country. We leverage cutting-edge technology to streamline the process of bringing fresh, high-quality produce from farm to table.
              </p>
              <p>
                Our platform offers a range of services, including:
              </p>
              <ul className="list-disc list-inside">
                <li>Direct marketplace for farmers to sell their produce</li>
                <li>Tools for inventory management and pricing optimization</li>
                <li>Logistics support for efficient delivery</li>
                <li>Educational resources to help farmers improve their yields and business practices</li>
              </ul>
              <p>
                At Farmezy, we believe in the power of community and sustainable agriculture. Join us in our mission to revolutionize the agricultural industry and support local farmers.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}