import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/WhatsApp Image 2025-07-12 at 21.12.05_b6705986.jpg" 
              alt="SS HomeDecor Logo" 
              className="h-12 w-12 object-cover rounded-lg shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                SS HomeDecor
              </h1>
              <p className="text-xs text-gray-600">Home is a dream & we will decor your dream</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">About</a>
            <a href="#portfolio" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors">Portfolio</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;