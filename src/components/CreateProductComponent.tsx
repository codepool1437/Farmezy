// src/components/ProductForm.tsx
import React, { useState } from 'react';
import { useUser } from '../UserContext'; // Adjust the import based on your structure

const ProductForm = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState('');
    const { user } = useUser(); // Get the logged-in user

    const createProduct = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            console.error('User not logged in');
            return; // Handle case where user is not logged in
        }

        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_name: productName,
                description,
                price,
                quantity,
                category,
                user_id: user.id, // Use the user ID from context
            }),
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Product created:', data);
        } else {
            console.error('Error:', data.error);
        }
    };

    return (
        <form onSubmit={createProduct}>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <button type="submit">Create Product</button>
        </form>
    );
};

export default ProductForm;
