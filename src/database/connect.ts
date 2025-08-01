import mysql, { Pool } from 'mysql2/promise';

const pool: Pool = mysql.createPool({
  host: 'localhost',
  user: 'jay',
  password: '1234',
  database: 'farmeasy',
  port: 3307,
  waitForConnections: true, // Ensures connection queueing
  connectionLimit: 10, // Max number of connections in the pool
  queueLimit: 0, // Unlimited connections in queue
});

// Function to test the database connection
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Database connected successfully');
    connection.release(); // Release connection back to the pool
  } catch (error) {
    console.error('Database connection failed:', error);
  }
})();

export default pool;
