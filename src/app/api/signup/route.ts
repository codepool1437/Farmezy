// src/app/api/signup/route.ts
import pool from '../../../database/connect'; // Ensure this path is correct
import bcrypt from 'bcryptjs';
import { NextRequest } from 'next/server';
import { ResultSetHeader } from 'mysql2'; // Import ResultSetHeader type

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json(); // Parse the JSON body

  // Basic validation: Check if all required fields are present
  if (!name || !email || !password) {
    return new Response(JSON.stringify({ error: 'Please provide name, email, and password.' }), { status: 400 });
  }

  // Check if the password meets the strength requirements
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return new Response(JSON.stringify({ error: 'Password must be at least 8 characters long and include upper and lower case letters, numbers, and special characters.' }), { status: 400 });
  }

  try {
    // First, check if the email already exists
    const checkEmailQuery = 'SELECT COUNT(*) AS count FROM users WHERE email = ?';
    const [rows] = await pool.execute(checkEmailQuery, [email]);
    const existingUserCount = (rows as any)[0].count;

    if (existingUserCount > 0) {
      return new Response(JSON.stringify({ error: 'Email already in use' }), { status: 409 });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const [result] = await pool.execute<ResultSetHeader>(query, [name, email, hashedPassword]); // Specify ResultSetHeader type

    // Respond with success
    return new Response(JSON.stringify({ message: 'User registered successfully', userId: result.insertId }), { status: 201 });
  } catch (error: unknown) {
    console.error('Error registering user:', error);

    if (error instanceof Error) {
      // Check if it's a duplicate entry (this should be caught by the email check above)
      if ((error as any).code === 'ER_DUP_ENTRY') {
        return new Response(JSON.stringify({ error: 'Email already in use' }), { status: 409 });
      }
    }
    return new Response(JSON.stringify({ error: 'Error registering user' }), { status: 500 });
  }
}
