import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-[#3A3A3A]">
            <Facebook size={24} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-[#3A3A3A]">
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-[#3A3A3A]">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-[#3A3A3A]">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <div className="text-center text-[#4A4A4A]">
          © 2024 FARMEASY. All rights reserved.
        </div>
      </div>
    </footer>
  )
}