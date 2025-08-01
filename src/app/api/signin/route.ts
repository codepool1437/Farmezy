// src/app/api/signin/route.ts

import { NextResponse } from 'next/server';
import pool from '../../../database/connect'; // Adjust the import based on your directory structure
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
    // Parse the JSON body from the request
    const { email, password } = await req.json();

    // Check if email and password are provided
    if (!email || !password) {
        console.error('Validation error: Missing email or password');
        return NextResponse.json(
            { error: 'Please provide email and password.' },
            { status: 400 }
        );
    }

    try {
        const connection = await pool.getConnection();

        // Query the user by email
        const [rows]: [any[], any] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0) {
            // No user found with that email
            return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
        }

        const user = rows[0];

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
            // Password does not match
            return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
        }

        // On successful authentication
        return NextResponse.json({ message: 'Login successful', user: { id: user.id, email: user.email } }, { status: 200 });
    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
