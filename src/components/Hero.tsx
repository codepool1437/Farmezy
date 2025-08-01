import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Component() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <Image
        src="/wallpaperflare.com_wallpaper.jpg"
        alt="Beautiful farm landscape"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-white">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Farmers
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-lora"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Connect directly with markets and thrive in today's agricultural landscape
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/products" className="bg-white text-[#4A4A4A] font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300 mr-4">
            Explore Products
          </Link>
          <Link href="/sell" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-[#4A4A4A] transition duration-300">
            Start Selling
          </Link>
        </motion.div>
      </div>
    </section>
  )
}