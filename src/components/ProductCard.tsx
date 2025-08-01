// src/components/ProductCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, image } = product; // Destructure product object

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2 font-playfair">{name}</h3>
        <p className="text-[#4A4A4A] mb-4 font-lora">${price.toFixed(2)}</p>
        <Link
          href={`/products/${id}`}
          className="bg-[#4A4A4A] text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300 inline-block"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}
