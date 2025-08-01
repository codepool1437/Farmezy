import session from 'express-session';
import { NextApiRequest, NextApiResponse } from 'next';

const sessionMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (err?: Error | null) => void // Allow for `null` in the error parameter
) => {
  // Define the session configuration as a plain object
  const sessionOptions = {
    secret: 'your-secret', // Replace with your own secret
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
      httpOnly: true, // Prevent client-side access to the cookie
      maxAge: 1000 * 60 * 60 * 24, // 1 day expiration
    },
  };

  session(sessionOptions)(req, res, next);
};

export default sessionMiddleware;
