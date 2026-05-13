import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Eyewear"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-bold block mb-4">
              Premium Collection 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">
                Visionary Style
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
              Discover our curated selection of world-renowned luxury eyewear. From classic 
              silhouettes to contemporary masterpieces.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#D4AF37] hover:bg-[#B8962E] text-black px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
                Explore Men
              </button>
              <button className="border border-white/30 hover:border-[#D4AF37] text-white px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all backdrop-blur-sm group">
                Explore Women
                <span className="block h-0.5 w-0 bg-[#D4AF37] transition-all group-hover:w-full mt-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </motion.div>
    </section>
  );
};
