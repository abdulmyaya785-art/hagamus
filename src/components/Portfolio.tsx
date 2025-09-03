import React from 'react';
import { Heart, Star, User } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Profile Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7679460/pexels-photo-7679460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Halima Garba Musa - Founder of HAGAMUS"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg border-4 border-cream-100">
                <User className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Halima Garba Musa
                </h3>
                <p className="text-xl text-purple-600 font-medium mb-6">
                  Founder & Visionary
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Meet <span className="font-semibold text-purple-700">Halima Garba Musa</span>, 
                  the visionary behind HAGAMUS. She is known for her honesty, calmness, and gentle spirit. 
                  Her customers describe her as trustworthy, dependable, and kind-hearted.
                </p>

                <div className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                  <p className="text-gray-800 italic text-center font-medium">
                    "May God help her continue flowing safe in her journey."
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Heart className="w-6 h-6" />, label: 'Honest', color: 'text-red-500' },
                  { icon: <Star className="w-6 h-6" />, label: 'Calm', color: 'text-blue-500' },
                  { icon: <User className="w-6 h-6" />, label: 'Gentle', color: 'text-green-500' }
                ].map((value, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className={`flex justify-center mb-2 ${value.color}`}>
                      {value.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{value.label}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="text-center lg:text-left">
                <blockquote className="text-xl text-gray-600 italic">
                  "Building relationships through quality fabrics and honest service."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;