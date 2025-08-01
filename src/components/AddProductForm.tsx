// AddProductForm.tsx
'use client';

import { useState } from 'react';

const categories = [
  'Fruits',
  'Vegetables',
  'Dairy',
  'Meat',
  'Grains',
  'Herbs',
  'Other',
];

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userId = '1'; // Replace this with the actual user ID

    const productData = {
      userId,        // Use camelCase
      productName,   // Use camelCase
      description,
      price: parseFloat(price), // Keep price as a number
      quantity,      // Keep as string to allow free text
      category,
    };

    console.log('Submitting with:', productData); // Log to check the data before sending

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Product listed successfully with ID:', data.productId);
        // Reset the form fields after successful submission
        setProductName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setCategory('');
      } else {
        const errorData = await response.json();
        console.error('Failed to list product:', errorData.error);
        setErrorMessage(errorData.error); // Display error message
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An unexpected error occurred.'); // Handle unexpected errors
    }
  };

  return (
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
          type="text" // Change this to text to allow free-form input
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
          type="text" // Keep this as text to allow inputs like '20 litres'
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
        />
      </div>
      {errorMessage && (
        <div className="mb-4 text-red-600">{errorMessage}</div>
      )}
      <button
        type="submit"
        className="w-full bg-[#4A4A4A] text-white py-2 rounded-md hover:bg-[#333]"
      >
        List Product
      </button>
    </form>
  );
};

export default AddProductForm;
