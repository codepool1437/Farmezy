'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useUser } from '@/UserContext';
import { useRouter } from 'next/navigation';

const categories = [
    'Fruits',
    'Vegetables',
    'Dairy',
    'Meat',
    'Grains',
    'Herbs',
    'Other',
];

export default function SellPage() {
    const { user } = useUser(); // Get user context
    const router = useRouter(); // Initialize router

    // Debugging: Check the user object
    console.log('User:', user); // Log user data for debugging

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (!user || !user.id) {
            setErrorMessage('Please sign in to list a product.');
            return; 
        }
    
        const productData = {
            user_id: user.id,
            product_name: productName,
            description: description,
            price: price,
            quantity: quantity,
            category: category,
        };
    
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setSuccessMessage('Product listed successfully!');
    
            // Reset form fields if necessary
            setProductName('');
            setDescription('');
            setPrice('');
            setQuantity('');
            setCategory('');
            setErrorMessage('');
        } catch (error) {
            console.error('Error creating product:', error);
            setErrorMessage('An error occurred while listing the product. Please try again.');
        }
    };
    

    return (
        <div className="min-h-screen flex flex-col">
            <Header hideSearch={true} />
            <main className="flex-grow pt-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl font-bold text-[#4A4A4A] mb-6">List Your Product</h1>

                        {errorMessage && (
                            <div className="mb-4 text-red-600">{errorMessage}</div>
                        )}

                        {successMessage && (
                            <div className="mb-4 text-green-600">{successMessage}</div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="productName" className="block text-sm font-medium text-[#4A4A4A]">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    id="productName"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-[#4A4A4A]">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-[#4A4A4A]">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    rows={4}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                                />
                            </div>
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-[#4A4A4A]">
                                    Price (₹)
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                    min="0"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                                />
                            </div>
                            <div>
                                <label htmlFor="quantity" className="block text-sm font-medium text-[#4A4A4A]">
                                    Quantity Available
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required
                                    min="1"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#4A4A4A] text-white py-2 rounded-md hover:bg-[#333]"
                            >
                                List Product
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
