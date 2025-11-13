import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              SciQuest Heroes
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/how-it-works" className="text-gray-700 hover:text-primary-600">How It Works</Link>
              <Link to="/topics" className="text-gray-700 hover:text-primary-600">Topics</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-primary-600">Pricing</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600">About</Link>
              <Link to="/coppa" className="text-gray-700 hover:text-primary-600">COPPA & Privacy</Link>
            </nav>
            <div className="flex space-x-3">
              <Link to="/auth/login" className="px-4 py-2 text-primary-600 hover:text-primary-700">
                Login
              </Link>
              <Link to="/auth/signup" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/legal/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link to="/legal/terms" className="hover:text-white">Terms</Link></li>
                <li><Link to="/coppa" className="hover:text-white">COPPA</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/support" className="hover:text-white">Contact</Link></li>
                <li><Link to="/support#faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link to="/topics" className="hover:text-white">Topics</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} SciQuest Heroes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
