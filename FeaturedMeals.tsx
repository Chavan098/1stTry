import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Clock, Leaf } from 'lucide-react';

const FeaturedMeals: React.FC = () => {
  const featuredMeals = [
    {
      id: '1',
      name: 'Maharashtrian Thali',
      description: 'Complete meal with dal, sabzi, roti, rice, and pickle',
      price: 159,
      image: 'Maha.png',
      rating: 4.8,
      prepTime: '30 min',
      isVeg: true,
      category: 'Thali'
    },
    {
      id: '2',
      name: 'Maharashtrian Mutton Thali',
      description: 'Complete meal with Mutton sukkha, Mutton rassa, rice, Bhakri, Salad',
      price: 299,
      image: 'Mutton.png',
      rating: 4.9,
      prepTime: '60 min',
      isVeg: false,
      category: 'Thali'
    },
    {
      id: '3',
      name: 'Maharashtrian Chicken Thali',
      description: 'Complete meal with Chicken sukkha, Chicken rassa, rice, Bhakri, Salad',
      price: 249,
      image: 'Chicken.png',
      rating: 4.9,
      prepTime: '30 min',
      isVeg: false,
      category: 'healthy'
    },
    {
      id: '4',
      name: 'Gujarati Thali',
      description: 'Traditional Gujarati meal with dhokla, kadhi, and sweets',
      price: 159,
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      prepTime: '25 min',
      isVeg: true,
      category: 'thali'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Featured Meals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular dishes, crafted with love and the finest ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMeals.map((meal, index) => (
            <motion.div
              key={meal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  {meal.isVeg ? (
                    <div className="bg-secondary-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Leaf size={12} className="mr-1" />
                      Veg
                    </div>
                  ) : (
                    <div className="bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Non-Veg
                    </div>
                  )}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star className="text-yellow-500 mr-1" size={12} />
                  <span className="text-xs font-medium">{meal.rating}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {meal.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {meal.description}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {meal.prepTime}
                  </div>
                  <div className="text-lg font-bold text-primary-600">
                    ₹{meal.price}
                  </div>
                </div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/menu"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMeals;