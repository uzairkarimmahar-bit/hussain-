import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0A0A0A] border-l border-[#D4AF37]/20 z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-[#D4AF37]" />
                <h2 className="text-xl font-serif text-white">Your Selection</h2>
              </div>
              <button onClick={onClose} className="p-2 text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag size={64} className="text-gray-800 mb-4" />
                  <p className="text-gray-500 font-serif text-lg">Your cart is as light as air.</p>
                  <button
                    onClick={onClose}
                    className="mt-6 text-[#D4AF37] uppercase tracking-widest text-xs font-bold border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-32 bg-gray-900 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.model}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] text-[#D4AF37] tracking-widest uppercase font-bold">
                            {item.brand}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-600 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <h3 className="text-white font-serif mt-1">{item.model}</h3>
                        <p className="text-[#D4AF37] font-mono text-sm mt-1">
                          PKR {item.price.toLocaleString()}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-white/10 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-[#D4AF37] transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-mono text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-[#D4AF37] transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-black border-t border-white/5">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-gray-500 uppercase tracking-widest text-xs">Total Amount</span>
                  <span className="text-2xl text-white font-mono">
                    PKR {totalPrice.toLocaleString()}
                  </span>
                </div>
                <button
                  className="w-full bg-[#D4AF37] hover:bg-white text-black py-4 uppercase tracking-[0.2em] font-bold text-sm transition-all shadow-lg hover:shadow-[#D4AF37]/20"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={onClose}
                  className="w-full mt-4 text-gray-500 text-xs uppercase tracking-widest hover:text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
