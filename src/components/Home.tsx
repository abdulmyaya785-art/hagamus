import React from 'react';
import { ArrowDown, Star, Award, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1445925/pexels-photo-1445925.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Premium fabrics background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-teal-900/70 to-purple-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
            <Star className="w-5 h-5 text-gold-400" />
            <span className="text-sm font-medium">Premium Quality Fabrics</span>
            <Star className="w-5 h-5 text-gold-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cream-100 via-gold-200 to-cream-100 bg-clip-text text-transparent leading-tight">
          HAGAMUS
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light mb-4 text-cream-100 tracking-wide">
          CLOTHING & FABRICS
        </h2>

        <p className="text-lg md:text-xl mb-8 text-cream-200 leading-relaxed max-w-3xl mx-auto">
          We specialize in premium fabrics like <span className="font-semibold text-gold-300">Atamfa</span>, 
          <span className="font-semibold text-teal-300"> Lace</span>, and 
          <span className="font-semibold text-purple-300"> Getzner VIP</span>, 
          hand-selected for elegance, durability, and tradition.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
            <Award className="w-5 h-5 text-gold-400" />
            <span className="text-sm">Quality you can feel</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
            <Heart className="w-5 h-5 text-teal-400" />
            <span className="text-sm">Style that speaks volumes</span>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="group bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Discover Our Fabrics
          <ArrowDown className="w-5 h-5 ml-2 inline-block group-hover:animate-bounce" />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gold-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-teal-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Home;