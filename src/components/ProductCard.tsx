import React from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Heart, ShieldCheck } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0A0A0A] border border-white/5 overflow-hidden rounded-xl"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.hasCase && (
            <div className="bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-1 flex items-center gap-1 rounded-sm uppercase tracking-tighter">
              <ShieldCheck size={12} />
              Case Included
            </div>
          )}
          {product.price > 100000 && (
            <div className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-tighter">
              Bespoke Luxury
            </div>
          )}
        </div>

        {/* Floating Actions */}
        <div className="absolute -bottom-12 group-hover:bottom-4 left-0 w-full px-4 transition-all duration-300 flex gap-2">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-[#D4AF37] hover:bg-white text-black py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`p-3 border ${isWishlisted ? 'bg-red-500 border-red-500 text-white' : 'bg-black/40 border-white/20 text-white'} hover:bg-white hover:text-black transition-colors`}
          >
            <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] text-[#D4AF37] uppercase tracking-[0.2em] font-bold">
            {product.brand}
          </span>
          <div className="flex items-center gap-1">
            <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-[10px] text-gray-400 font-bold">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-white font-serif text-lg mb-2 group-hover:text-[#D4AF37] transition-colors">
          {product.model}
        </h3>
        
        <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-600 uppercase tracking-widest leading-none mb-1">Price</span>
            <span className="text-white font-mono text-xl">
              PKR {product.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
