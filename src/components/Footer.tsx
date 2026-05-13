import React from 'react';
import { Phone, Mail, Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[#D4AF37]/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold tracking-tighter text-[#D4AF37]">
              AI STUDIO <span className="text-white">GLASSES</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Defining the future of luxury eyewear through impeccable craftsmanship and 
              visionary design. From the heart of fashion to your eyes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-white/5 hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-white/5 hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 border border-white/5 hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wide">Collections</h3>
            <ul className="space-y-4">
              {['Men\'s Vision', 'Women\'s Style', 'Luxury Gold', 'New Arrivals', 'Limited Editions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wide">Exquisite Care</h3>
            <ul className="space-y-4">
              {['Virtual Try-On', 'Prescription Guide', 'Eye Exams', 'Fitting & Adjustments', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wide">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#D4AF37]/5 text-[#D4AF37]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold">Call Us</p>
                  <p className="text-sm text-white">03360220996</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#D4AF37]/5 text-[#D4AF37]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold">Inquiries</p>
                  <p className="text-sm text-white">hussaindayo481@gmail.com</p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs text-gray-500 italic">Curated by:</p>
                <p className="text-white font-serif">Hussain Dayo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-y border-white/5 py-12 mb-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-white font-serif text-xl">Join the Exclusive Circle</h4>
            <p className="text-gray-500 text-sm mt-1">Receive early access to collections and private events.</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] font-sans"
            />
            <button className="bg-[#D4AF37] hover:bg-white text-black px-6 py-3 uppercase tracking-widest text-xs font-bold transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            © 2026 AI Studio Glasses. All rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Security</a>
            <a href="#" className="text-gray-600 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Ethics</a>
            <a href="#" className="text-gray-600 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Global Delivery</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
