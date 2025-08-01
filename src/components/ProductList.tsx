import ProductCard from './ProductCard'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product} // Pass the entire product object
        />
      ))}
    </div>
  )
}
