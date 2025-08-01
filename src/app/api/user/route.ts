// src/app/api/user/route.ts
import { NextResponse } from 'next/server';
import pool from '../../../database/connect'; // Adjust this path as needed

export async function GET(req: Request) {
    // Implement your user retrieval logic here
    const userId = req.headers.get('user-id'); // Use headers, cookies, or sessions based on your auth method

    if (!userId) {
        return NextResponse.json({ user: null }, { status: 401 }); // User is not authenticated
    }

    try {
        const connection = await pool.getConnection();
        const [rows]: [any[], any] = await connection.query('SELECT id, name, email FROM users WHERE id = ?', [userId]);

        if (rows.length === 0) {
            return NextResponse.json({ user: null }, { status: 404 });
        }

        return NextResponse.json({ user: rows[0] }); // Return user data
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
