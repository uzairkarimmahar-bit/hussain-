/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { CategoryFilter } from './components/CategoryFilter';
import { Banner } from './components/Banner';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { products } from './data/products';
import { CartProvider } from './context/CartContext';
import { Filter, SlidersHorizontal, ArrowRight } from 'lucide-react';

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([10000, 150000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const brands = useMemo(() => Array.from(new Set(products.map(p => p.brand))), []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesBrand = activeBrand === 'All' || product.brand === activeBrand;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch = product.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesPrice && matchesSearch;
    });
  }, [activeBrand, priceRange, searchQuery]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black font-sans">
      <Navbar 
        onCartOpen={() => setIsCartOpen(true)} 
        onWishlistOpen={() => {}} // Placeholder
        onSearch={setSearchQuery}
      />
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      <main>
        <Hero />

        {/* Featured Section Header */}
        <section className="py-24 bg-black border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-xl">
                <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">
                  Masterpieces of Vision
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                  Iconic Designs, <br />
                  <span className="italic-serif text-gray-500 font-light">Unrivaled Quality.</span>
                </h2>
              </div>
              <button 
                onClick={() => setIsFilterVisible(!isFilterVisible)}
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-full border border-white/10 transition-all group lg:hidden"
              >
                <SlidersHorizontal size={20} className="text-[#D4AF37]" />
                <span className="uppercase tracking-widest text-xs font-bold">Filter Collections</span>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar Filters - Visible on Desktop */}
              <aside className={`lg:w-1/4 ${isFilterVisible ? 'block' : 'hidden lg:block'}`}>
                <CategoryFilter 
                  activeBrand={activeBrand}
                  setActiveBrand={setActiveBrand}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  brands={brands}
                />
              </aside>

              {/* Product Grid */}
              <div className="lg:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </AnimatePresence>
                </div>
                
                {filteredProducts.length === 0 && (
                  <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
                    <p className="text-gray-500 font-serif text-xl italic">No luxury frames found matching your criteria.</p>
                    <button 
                      onClick={() => {
                        setActiveBrand('All');
                        setPriceRange([10000, 150000]);
                        setSearchQuery('');
                      }}
                      className="mt-6 text-[#D4AF37] uppercase tracking-widest text-xs font-bold border-b border-[#D4AF37] pb-1"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}

                {/* Show more / pagination style placeholder */}
                <div className="mt-20 flex justify-center">
                  <button className="flex items-center gap-4 group">
                    <span className="text-white uppercase tracking-[0.3em] text-sm font-bold border-b-2 border-[#D4AF37] pb-2 group-hover:pr-4 transition-all">
                      Discover Full Collection
                    </span>
                    <ArrowRight size={20} className="text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Banner />
        
        {/* Why Choose Us Section */}
        <section className="py-24 bg-[#0A0A0A]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              {[
                { title: 'Bespoke Fitting', desc: 'Precision adjustments by master opticians' },
                { title: 'Global Warranty', desc: 'Protected across all international boutiques' },
                { title: 'Secure Handling', desc: 'White-glove delivery in protective armor' },
                { title: 'Curated Brands', desc: 'Only the most prestigious luxury houses' }
              ].map((feature, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6 rotate-45 border border-[#D4AF37]/30">
                    <div className="-rotate-45 text-[#D4AF37] font-serif text-lg">{i + 1}</div>
                  </div>
                  <h3 className="text-white font-serif text-xl">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <WhatsAppButton />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

