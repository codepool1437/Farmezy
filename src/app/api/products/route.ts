// src/app/api/products/route.ts
import { NextResponse } from 'next/server';
import pool from '../../../database/connect';

export async function POST(req: Request) {
    const { user_id, product_name, description, price, quantity, category } = await req.json();

    if (!user_id || !product_name || !description || !price || !quantity || !category) {
        return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    try {
        const connection = await pool.getConnection();
        const query = 'INSERT INTO products (user_id, product_name, description, price, quantity, category) VALUES (?, ?, ?, ?, ?, ?)';
        const [result] = await connection.query(query, [user_id, product_name, description, price, quantity, category]);

        // Access insertId correctly
        const insertId = (result as any).insertId; // Use type assertion if necessary

        return NextResponse.json({ message: 'Product created successfully', productId: insertId }, { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
