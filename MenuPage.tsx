import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, Leaf, Plus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

const MenuPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDiet, setSelectedDiet] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'thali', name: 'Thali' },
    { id: 'combo', name: 'Combo Meals' },
    { id: 'healthy', name: 'Healthy Options' },
    { id: 'bulk', name: 'Bulk Orders' },
    { id: 'snacks', name: 'Snacks' }
  ];

  const menuItems = [
    {
      id: '1',
      name: 'North Indian Thali',
      description: 'Complete meal with dal, sabzi, roti, rice, pickle, and papad',
      price: 149,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      prepTime: '25 min',
      isVeg: true,
      category: 'thali',
      calories: 650
    },
    {
      id: '2',
      name: 'South Indian Combo',
      description: 'Sambar rice, rasam, curd rice with traditional sides',
      price: 139,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      prepTime: '20 min',
      isVeg: true,
      category: 'combo',
      calories: 580
    },
    {
      id: '3',
      name: 'Protein Power Bowl',
      description: 'Grilled chicken, quinoa, vegetables, and healthy grains',
      price: 199,
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      prepTime: '30 min',
      isVeg: false,
      category: 'healthy',
      calories: 520
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
      category: 'thali',
      calories: 620
    },
    {
      id: '5',
      name: 'Office Bulk Meal (10 pax)',
      description: 'Mixed veg and non-veg meals perfect for office lunch',
      price: 1299,
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      prepTime: '45 min',
      isVeg: false,
      category: 'bulk',
      calories: 600
    },
    {
      id: '6',
      name: 'Healthy Salad Bowl',
      description: 'Fresh greens, grilled protein, nuts, and house dressing',
      price: 129,
      image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      prepTime: '15 min',
      isVeg: true,
      category: 'healthy',
      calories: 350
    },
    {
      id: '7',
      name: 'Samosa Chaat',
      description: 'Crispy samosas with chutneys and yogurt',
      price: 89,
      image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      prepTime: '10 min',
      isVeg: true,
      category: 'snacks',
      calories: 280
    },
    {
      id: '8',
      name: 'Chicken Biryani',
      description: 'Aromatic basmati rice with tender chicken and spices',
      price: 179,
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      prepTime: '35 min',
      isVeg: false,
      category: 'combo',
      calories: 720
    }
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesDiet = selectedDiet === 'all' || 
                         (selectedDiet === 'veg' && item.isVeg) ||
                         (selectedDiet === 'non-veg' && !item.isVeg);
      const matchesPrice = priceRange === 'all' ||
                          (priceRange === 'under-100' && item.price < 100) ||
                          (priceRange === '100-200' && item.price >= 100 && item.price <= 200) ||
                          (priceRange === 'above-200' && item.price > 200);
      
      return matchesSearch && matchesCategory && matchesDiet && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedDiet, priceRange]);

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      isVeg: item.isVeg
    });
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our delicious range of fresh, healthy meals prepared with love
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center px-4 py-3 bg-primary-600 text-white rounded-lg"
            >
              <Filter size={20} className="mr-2" />
              Filters
            </button>
          </div>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block mt-4 grid grid-cols-1 md:grid-cols-3 gap-4`}>
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Diet Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Diet</label>
              <select
                value={selectedDiet}
                onChange={(e) => setSelectedDiet(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All</option>
                <option value="veg">Vegetarian</option>
                <option value="non-veg">Non-Vegetarian</option>
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="under-100">Under ₹100</option>
                <option value="100-200">₹100 - ₹200</option>
                <option value="above-200">Above ₹200</option>
              </select>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  {item.isVeg ? (
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
                  <span className="text-xs font-medium">{item.rating}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {item.prepTime}
                  </div>
                  <div>
                    {item.calories} cal
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-primary-600">
                    ₹{item.price}
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;