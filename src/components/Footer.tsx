import React from 'react';
import { Scissors, Heart, Star, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-purple-600 rounded-lg">
                  <Scissors className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">HAGAMUS</h3>
                  <p className="text-cream-200 text-sm">CLOTHING & FABRICS</p>
                </div>
              </div>
              
              <p className="text-cream-200 leading-relaxed max-w-md">
                Premium fabrics like Atamfa, Lace, and Getzner VIP, hand-selected for elegance, 
                durability, and tradition. Quality you can feel, style that speaks volumes.
              </p>
              
              <div className="flex items-center space-x-2 text-cream-200">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm">Serving customers with love and dedication</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#fabrics', label: 'Fabrics' },
                  { href: '#portfolio', label: 'Portfolio' }
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-cream-200 hover:text-teal-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <div className="text-sm">
                    <p className="text-cream-200">070 3378 3813</p>
                    <p className="text-cream-200">080 6166 1225</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-purple-400 mt-1" />
                  <div className="text-sm">
                    <p className="text-cream-200">halimagarba@gmail.com</p>
                    <p className="text-cream-200">hagamus@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-cream-200 text-sm">
                  © {currentYear} HAGAMUS CLOTHING & FABRICS. All rights reserved.
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-gold-400" />
                <span className="text-cream-200 text-sm">Made with care in Nigeria</span>
                <Star className="w-4 h-4 text-gold-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;