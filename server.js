const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Your API endpoint
app.post('/api/products', async (req, res) => {
    console.log(req.body); // Log the request body to debug

    // Destructure fields from req.body
    const { name, description, price } = req.body;

    // Handle the case where body is undefined or fields are missing
    if (!name || !description || price == null) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Your database insertion logic goes here

    // Simulating a successful response
    res.status(201).json({ message: 'Product added successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
