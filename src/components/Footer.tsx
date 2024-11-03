import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About LUXEBAGS</h3>
            <p className="text-gray-400 text-sm">
              Discover our curated collection of premium handbags, crafted with excellence
              and designed for the modern woman.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/bags" className="text-gray-400 hover:text-white text-sm">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-400 hover:text-white text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-gray-400 hover:text-white text-sm">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-400 hover:text-white text-sm">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white text-sm">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white text-sm">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <button
                type="submit"
                className="w-full bg-rose-600 text-white py-2 px-4 rounded hover:bg-rose-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LUXEBAGS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}