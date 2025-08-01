'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@/UserContext'; // Import useUser from your context
import { useAuth } from '@/AuthContext'; // Import useAuth from your AuthContext

export default function SignInPage() {
  const { setUser } = useUser(); // Get setUser from UserContext
  const { signIn } = useAuth(); // Get signIn from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);
  
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response data:', errorText);
        try {
          const data = JSON.parse(errorText);
          setErrorMessage(data.error || 'Something went wrong.');
        } catch {
          setErrorMessage('Unexpected error occurred.');
        }
        return;
      }
  
      const data = await response.json();
      console.log('Sign-in successful:', data);
  
      setUser(data.user); // Update user context with the authenticated user
      localStorage.setItem('user', JSON.stringify(data.user)); // Optionally store user in local storage
  
      // Call the signIn function from context
      signIn(); // This updates the authentication state
  
      router.push('/'); // Redirect to home or dashboard
    } catch (error) {
      console.error('Sign-in error:', error);
      setErrorMessage('Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-[#4A4A4A] mb-6">Sign In</h1>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#4A4A4A]">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A4A4A] focus:border-[#4A4A4A]"
                />
              </div>

              <motion.button
                type="submit"
                className={`w-full py-2 px-4 rounded-md text-white transition-colors ${
                  loading ? 'bg-gray-400' : 'bg-[#4A4A4A] hover:bg-[#3A3A3A]'
                }`}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                disabled={loading} // Disable button when loading
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </motion.button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-[#4A4A4A]">
                Don't have an account?{' '}
                <Link href="/signup" className="text-[#4A4A4A] font-bold hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
