// In /pages/api/products/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../database/connect';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const [rows] = await pool.query('SELECT * FROM products');
            res.status(200).json(rows);
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ message: 'Failed to load products' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
