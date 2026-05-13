import React from 'react';
import { motion } from 'motion/react';

interface CategoryFilterProps {
  activeBrand: string;
  setActiveBrand: (brand: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  brands: string[];
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeBrand,
  setActiveBrand,
  priceRange,
  setPriceRange,
  brands,
}) => {
  return (
    <div className="space-y-8 p-6 bg-[#0A0A0A] border border-white/5 rounded-xl sticky top-24">
      {/* Brands */}
      <div>
        <h3 className="text-white font-serif text-lg mb-4 uppercase tracking-widest text-[10px] text-[#D4AF37]">
          Designer Brands
        </h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setActiveBrand('All')}
            className={`text-left px-3 py-2 text-sm uppercase tracking-widest transition-all ${
              activeBrand === 'All' ? 'text-white border-l-2 border-[#D4AF37] bg-white/5' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            All Collections
          </button>
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`text-left px-3 py-2 text-sm uppercase tracking-widest transition-all ${
                activeBrand === brand ? 'text-white border-l-2 border-[#D4AF37] bg-white/5' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-white font-serif text-lg mb-4 uppercase tracking-widest text-[10px] text-[#D4AF37]">
          Price Range (PKR)
        </h3>
        <div className="space-y-4">
          <input
            type="range"
            min="10000"
            max="150000"
            step="5000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-[#D4AF37] bg-gray-800 h-1 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-gray-400">
            <span>PKR {priceRange[0].toLocaleString()}</span>
            <span className="text-[#D4AF37]">PKR {priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Promotions */}
      <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-4 rounded-lg">
        <h4 className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">Exclusive Offer</h4>
        <p className="text-white text-sm font-serif">Get 10% off on your first purchase from the Luxury Collection.</p>
        <button className="mt-3 text-[10px] uppercase font-bold tracking-widest text-white border-b border-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
};
