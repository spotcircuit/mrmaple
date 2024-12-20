'use client';

import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          {/* Promotional Message */}
          <div className="hidden md:block text-sm">
            Free Shipping on Orders Over $100
          </div>

          {/* Right Side Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link 
              href="/support" 
              className="hover:text-primary-yellow transition-colors"
            >
              Customer Support
            </Link>
            
            <Link 
              href="/account" 
              className="hover:text-primary-yellow transition-colors flex items-center gap-1"
            >
              <User size={16} />
              <span>Login / Sign Up</span>
            </Link>
            
            <Link 
              href="/cart" 
              className="hover:text-primary-yellow transition-colors flex items-center gap-1"
            >
              <ShoppingCart size={16} />
              <span className="hidden md:inline">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
