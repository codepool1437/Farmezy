import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Received Request:', req.method, req.body); // Log request
  
  if (req.method === 'POST') {
    return res.status(200).json({ message: 'Test POST successful' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
