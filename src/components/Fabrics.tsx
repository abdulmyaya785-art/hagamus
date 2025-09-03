import React, { useState } from 'react';
import { Sparkles, Eye } from 'lucide-react';

const Fabrics: React.FC = () => {
  const [selectedFabric, setSelectedFabric] = useState<string | null>(null);

  const fabrics = [
    {
      id: 'atamfa',
      name: 'Atamfa',
      description: 'Traditional Nigerian fabric known for its vibrant colors and intricate patterns. Perfect for cultural ceremonies and special occasions.',
      image: 'https://images.pexels.com/photos/7679464/pexels-photo-7679464.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Vibrant Colors', 'Traditional Patterns', 'Cultural Significance', 'Durable Material'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'lace',
      name: 'Lace',
      description: 'Elegant and sophisticated lace fabrics that add a touch of luxury to any garment. Available in various patterns and colors.',
      image: 'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Elegant Design', 'Luxury Feel', 'Versatile Patterns', 'Premium Quality'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'getzner',
      name: 'Getzner VIP',
      description: 'Premium imported fabric from Austria, renowned worldwide for its exceptional quality and exclusive designs.',
      image: 'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Austrian Quality', 'Exclusive Designs', 'Premium Import', 'World-Class Standard'],
      color: 'from-teal-500 to-blue-600'
    }
  ];

  return (
    <section id="fabrics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Fabrics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of world-class fabrics, each chosen for its unique beauty and exceptional quality.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Fabrics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {fabrics.map((fabric, index) => (
              <div 
                key={fabric.id}
                className="group cursor-pointer"
                onClick={() => setSelectedFabric(selectedFabric === fabric.id ? null : fabric.id)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={fabric.image}
                      alt={fabric.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${fabric.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    
                    {/* View Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{fabric.name}</h3>
                    <p className="text-sm text-cream-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Click to learn more
                    </p>
                  </div>
                </div>

                {/* Expanded Content */}
                {selectedFabric === fabric.id && (
                  <div className="mt-6 bg-gradient-to-br from-cream-50 to-white rounded-xl p-6 shadow-lg border border-cream-200 animate-fadeIn">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{fabric.name}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {fabric.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {fabric.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-gold-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-teal-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Premium Quality?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your fabric needs and place your order
            </p>
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fabrics;