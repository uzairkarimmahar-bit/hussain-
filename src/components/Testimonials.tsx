import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: "Ayesha Khan",
    location: "Karachi, PK",
    text: "The Ray-Ban Aviators I purchased are stunning. The packaging was top-notch, and the delivery was incredibly fast. A truly premium experience.",
    avatar: "https://i.pravatar.cc/150?u=ayesha"
  },
  {
    name: "Zayn Ahmed",
    location: "Lahore, PK",
    text: "AI Studio Glasses offers a level of sophistication I haven't found elsewhere. The Cartier collection is simply breathtaking. Highly recommended for luxury seekers.",
    avatar: "https://i.pravatar.cc/150?u=zayn"
  },
  {
    name: "Fatima Malik",
    location: "Islamabad, PK",
    text: "Impressed by the virtual styling assistance. My Gucci frames fit perfectly and look even better in person. The protective case is a beautiful touch.",
    avatar: "https://i.pravatar.cc/150?u=fatima"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">
            Our Distinguished Clients
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Reflections of Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/50 border border-white/5 p-8 rounded-2xl relative group hover:border-[#D4AF37]/30 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all cursor-pointer"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-serif font-bold">{review.name}</h4>
                  <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">{review.location}</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed italic font-serif">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
