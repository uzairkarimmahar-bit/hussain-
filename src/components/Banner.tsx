import React from 'react';
import { motion } from 'motion/react';

export const Banner: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px]" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="border border-[#D4AF37]/20 bg-gradient-to-r from-black via-[#0A0A0A] to-black p-12 md:p-20 text-center rounded-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
              Exclusive Privilege
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
              Summer of Elegance: <br className="hidden md:block" />
              Up to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">25% Off</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-serif italic">
              Indulge in our curated selection of luxury frames. Limited time offer 
              on premium brands including Ray-Ban, Gucci, and Cartier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#D4AF37] hover:bg-white text-black px-10 py-4 uppercase tracking-[0.2em] font-bold text-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                Shop the Collection
              </button>
              <button className="border border-white/20 hover:border-white text-white px-10 py-4 uppercase tracking-[0.2em] font-bold text-sm transition-all backdrop-blur-sm">
                View Lookbook
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
