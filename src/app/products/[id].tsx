import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

const ProductDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    if (id) {
      // Example data fetching, replace with actual API call
      const fetchProduct = async () => {
        const response = await fetch(`/api/listing/${id}`)
        const data = await response.json()
        
        if (data.category === 'Fruits') {
          data.description = `${data.name} is a fresh and organic product directly sourced...`
        } else {
          data.description = 'This is a great product with high quality.'
        }
        setProduct(data)
      }
      fetchProduct()
    }
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl">&#8377;{product.price.toFixed(2)}</p>
      <p className="mt-4">{product.description}</p>
      <img src={product.image} alt={product.name} className="mt-6" />
    </div>
  )
}

export default ProductDetails
