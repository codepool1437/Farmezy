'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useHeader } from '@/contexts/HeaderContext';
import { useAuth } from '@/AuthContext'; // Import useAuth

interface HeaderProps {
  hideSearch?: boolean;
}

export default function Header({ hideSearch = false }: HeaderProps) {
  const { isAuthenticated, signOut } = useAuth(); // Get the authentication state and signOut function
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { isTransparent } = useHeader();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';
  const isSignInPage = pathname === '/signin';
  const isSignUpPage = pathname === '/signup';
  const isAboutPage = pathname === '/about';
  const isCartPage = pathname === '/cart';
  const isSellPage = pathname === '/sell';
  const isProductsPage = pathname === '/products';
  const isOrdersPage = pathname === '/order'; // Track if user is on orders page

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
    isTransparent && !isScrolled && isHomePage ? 'bg-transparent' : 'bg-white shadow-md'
  }`;

  const linkClasses = `text-lg font-display hover:text-primary transition-colors ${
    isTransparent && !isScrolled && isHomePage ? 'text-white' : 'text-text'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`text-2xl md:text-3xl font-bold font-serif ${
            isTransparent && !isScrolled && isHomePage ? 'text-white' : 'text-primary'
          }`}
        >
          FARMEZY
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {/* Conditionally render Sign Out or Sign In link */}
          {isAuthenticated ? (
            <button
              onClick={signOut}
              className={`${linkClasses} focus:outline-none`}
            >
              Sign Out
            </button>
          ) : (
            !isSignInPage &&
            !isSignUpPage && (
              <Link href="/signin" className={linkClasses}>
                Sign in
              </Link>
            )
          )}
          <Link href="/yieldshare" className={linkClasses}>
            YieldShare
          </Link>
          {!isProductsPage && (
            <Link href="/products" className={linkClasses}>
              Browse Products
            </Link>
          )}
          {!isOrdersPage && (
            <Link href="/order" className={linkClasses}>
              My Orders
            </Link>
          )}
          {!isAboutPage && (
            <Link href="/about" className={linkClasses}>
              About us
            </Link>
          )}
          {!isSellPage && (
            <Link href="/sell" className={linkClasses}>
              Sell
            </Link>
          )}
          {!isCartPage && (
            <Link
              href="/cart"
              className={`${
                isTransparent && !isScrolled && isHomePage ? 'text-white' : 'text-primary'
              } hover:text-primary-dark transition-colors`}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </Link>
          )}
        </nav>
        <button
          className={`md:hidden z-50 ${
            isTransparent && !isScrolled && isHomePage ? 'text-white' : 'text-text'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Search bar */}
      {!hideSearch && !isSignInPage && !isSignUpPage && (
        <div className="container mx-auto px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary font-body"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-20 flex flex-col space-y-6">
          <Link href="/" className="text-2xl font-bold font-serif text-primary">
            FARMEZY
          </Link>
          {isAuthenticated ? (
            <button
              onClick={signOut}
              className="text-lg font-display text-text hover:text-primary transition-colors focus:outline-none"
            >
              Sign Out
            </button>
          ) : (
            !isSignInPage &&
            !isSignUpPage && (
              <Link
                href="/signin"
                className="text-lg font-display text-text hover:text-primary transition-colors"
              >
                Sign in
              </Link>
            )
          )}
          <Link
            href="/yieldshare"
            className="text-lg font-display text-text hover:text-primary transition-colors"
          >
            YieldShare
          </Link>
          {!isProductsPage && (
            <Link
              href="/products"
              className="text-lg font-display text-text hover:text-primary transition-colors"
            >
              Browse Products
            </Link>
          )}
          {!isOrdersPage && (
            <Link
              href="/order"
              className="text-lg font-display text-text hover:text-primary transition-colors"
            >
              My Orders
            </Link>
          )}
          {!isAboutPage && (
            <Link
              href="/about"
              className="text-lg font-display text-text hover:text-primary transition-colors"
            >
              About us
            </Link>
          )}
          {!isSellPage && (
            <Link
              href="/sell"
              className="text-lg font-display text-text hover:text-primary transition-colors"
            >
              Sell
            </Link>
          )}
          {!isCartPage && (
            <Link
              href="/cart"
              className="text-lg font-display text-text hover:text-primary transition-colors"
            >
              Cart
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
