// src/app/layout.tsx
import { HeaderProvider } from '@/contexts/HeaderContext';
import { AuthProvider } from '@/AuthContext'; 
import { UserProvider } from '../UserContext'; // Make sure this path is correct
import { Roboto, Inter, Poppins, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--font-roboto' });
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], display: 'swap', variable: '--font-poppins' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Farmezy - Empowering Farmers',
  description: 'Connect directly with markets and thrive in today\'s agricultural landscape',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable} ${poppins.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <AuthProvider>
          <HeaderProvider>
            <UserProvider> {/* Ensure UserProvider is here */}
              {children}
            </UserProvider>
          </HeaderProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
