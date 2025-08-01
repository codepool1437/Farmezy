export default function simpleHandler(req, res) {
    console.log('Received request:', req.method);
    res.status(200).json({ message: 'Simple API route working!' });
  }
  