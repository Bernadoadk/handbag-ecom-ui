import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Bags', path: '/bags' },
    { name: 'Selections', path: '/selections' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-rose-600" />
              <span className="text-xl font-semibold text-gray-900">LUXEBAGS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search bags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-rose-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium ${
                  location.pathname === link.path
                    ? 'text-rose-600'
                    : 'text-gray-700 hover:text-rose-600'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-rose-600"
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative px-3 pb-3">
              <input
                type="text"
                placeholder="Search bags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-rose-500"
              />
              <Search className="absolute left-6 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}