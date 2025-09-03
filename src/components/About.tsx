import React from 'react';
import { Shield, CheckCircle, Award, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const guarantees = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "100% Authentic Materials",
      description: "Every fabric is sourced directly from trusted suppliers"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Carefully Sourced Textiles",
      description: "Hand-selected for quality, durability, and beauty"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "No Fade, No Shrink",
      description: "Only the best materials that maintain their quality"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream-50 to-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-gold-500 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Fabric Quality & Guarantee
              </h2>
              <Sparkles className="w-8 h-8 text-gold-500 ml-3" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our fabrics are chosen for <span className="font-semibold text-purple-700">luxury</span>, 
                <span className="font-semibold text-teal-700"> longevity</span>, and 
                <span className="font-semibold text-gold-700"> beauty</span>. 
                Whether it's vibrant Atamfa, elegant Lace, or premium Getzner VIP, we guarantee excellence in every thread.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Promise to You</h3>
                <div className="space-y-6">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {guarantee.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {guarantee.title}
                        </h4>
                        <p className="text-gray-600">
                          {guarantee.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium fabric quality showcase"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md rounded-lg p-4">
                    <p className="text-gray-900 font-semibold text-center">
                      "Quality fabrics, trusted by professionals"
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-sm font-bold">Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '1000+', label: 'Happy Customers' },
              { number: '3', label: 'Fabric Types' },
              { number: '100%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;