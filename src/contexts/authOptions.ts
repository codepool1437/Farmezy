import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { Session, User } from 'next-auth'; // Import User type

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'example@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Validate credentials
        const res = await fetch('https://your-api-url.com/auth', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });

        // Check if response is okay
        if (!res.ok) {
          console.error('Error during authorization:', await res.text());
          return null; // Return null if not authorized
        }

        const user = await res.json();

        // Ensure user object contains necessary fields
        if (user && user.id) {
          return user; // Return user object that will be saved in the session
        }

        return null; // Return null if no valid user object
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
  },
  session: {
    strategy: 'jwt', // Use JWT for session strategy
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      // Store user ID in the token
      if (user) {
        token.id = user.id; // Ensure id is a string
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Attach user ID from token to session
      if (token) {
        session.user.id = token.id as string; // Ensure id is a string
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Secret for JWT signing
};

export default authOptions;
