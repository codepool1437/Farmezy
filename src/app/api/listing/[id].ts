import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../database/connect';
import { RowDataPacket } from 'mysql2';

type Product = {
    id: number;
    product_name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        // Run the query and ensure TypeScript understands this will return RowDataPacket[]
        const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM products WHERE id = ?', [id]);
        
        // Cast rows to Product[] for TypeScript
        const products = rows as Product[];

        if (products.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        res.status(200).json(products[0]);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Failed to load product' });
    }
};
