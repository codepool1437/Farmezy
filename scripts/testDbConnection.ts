import dbConnect from '../src/lib/mongodb'

async function testConnection() {
  try {
    const conn = await dbConnect()
    console.log('Connected to MongoDB!')
    process.exit(0)
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    process.exit(1)
  }
}

testConnection()