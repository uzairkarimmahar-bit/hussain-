import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Heart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartOpen: () => void;
  onWishlistOpen: () => void;
  onSearch: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartOpen, onWishlistOpen, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart, wishlist } = useCart();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Men', href: '#men' },
    { name: 'Women', href: '#women' },
    { name: 'Luxury Collection', href: '#luxury' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-serif font-bold tracking-tighter text-[#D4AF37]">
              AI STUDIO <span className="text-white">GLASSES</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
            >
              <Search size={20} />
            </button>
            <button
              onClick={onWishlistOpen}
              className="p-2 text-gray-300 hover:text-[#D4AF37] transition-colors relative"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button
              onClick={onCartOpen}
              className="p-2 text-gray-300 hover:text-[#D4AF37] transition-colors relative"
            >
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
            <button className="hidden sm:block p-2 text-gray-300 hover:text-[#D4AF37] transition-colors">
              <User size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-[#D4AF37]/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-black/95 border-b border-[#D4AF37]/20 p-4"
          >
            <div className="max-w-3xl mx-auto relative">
              <input
                type="text"
                placeholder="Search premium eyewear..."
                className="w-full bg-white/5 border border-[#D4AF37]/30 text-white px-4 py-3 pr-12 focus:outline-none focus:border-[#D4AF37] font-sans"
                onChange={(e) => onSearch(e.target.value)}
                autoFocus
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" size={20} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
