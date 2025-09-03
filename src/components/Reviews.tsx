import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Aisha Textiles",
      role: "Fashion House",
      content: "Her fabrics are top-tier and the service is even better. Highly recommended for anyone looking for quality materials.",
      rating: 5,
      image: "https://images.pexels.com/photos/7679466/pexels-photo-7679466.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "ZY Fashion Boutique",
      role: "Retail Partner",
      content: "Halima is reliable and delivers on time. We've worked with her for over 5 years and she never disappoints.",
      rating: 5,
      image: "https://images.pexels.com/photos/7679727/pexels-photo-7679727.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Kano Tailors Association",
      role: "Professional Guild",
      content: "The quality of fabrics from HAGAMUS is unmatched. Our members always come back for more.",
      rating: 5,
      image: "https://images.pexels.com/photos/7679463/pexels-photo-7679463.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Royal Fashion House",
      role: "Luxury Boutique",
      content: "Premium quality fabrics with exceptional customer service. Halima understands our needs perfectly.",
      rating: 5,
      image: "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      name: "Abuja Fashion Week",
      role: "Event Organizer",
      content: "HAGAMUS provided fabrics for our fashion show. The quality was outstanding and delivery was prompt.",
      rating: 5,
      image: "https://images.pexels.com/photos/7679724/pexels-photo-7679724.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Maiduguri Textiles",
      role: "Wholesale Partner",
      content: "Working with Halima has been a blessing. Her honesty and quality fabrics make her our preferred supplier.",
      rating: 5,
      image: "https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-gold-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-cream-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our valued customers and partners say about our fabrics and service
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div 
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-cream-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-purple-400" />
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{review.content}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img 
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cream-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                      <Building2 className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">5★</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-gold-600 mb-2">95%</div>
                <p className="text-gray-600">Repeat Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;