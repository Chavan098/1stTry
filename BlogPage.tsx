import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { format } from 'date-fns';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'recipes', name: 'Recipes' },
    { id: 'health', name: 'Health Tips' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ];

  const blogPosts = [
    {
      id: '1',
      title: '10 Superfoods to Include in Your Daily Diet',
      excerpt: 'Discover the power of superfoods and how they can transform your health. Learn about nutrient-dense foods that boost immunity and energy.',
      content: 'Full article content would go here...',
      author: 'Dr. Priya Sharma',
      date: new Date('2025-01-10'),
      readTime: '5 min read',
      category: 'nutrition',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['superfoods', 'nutrition', 'health']
    },
    {
      id: '2',
      title: 'The Art of Meal Planning: A Beginner\'s Guide',
      excerpt: 'Master the art of meal planning to save time, money, and eat healthier. Get practical tips and templates to start your meal planning journey.',
      content: 'Full article content would go here...',
      author: 'Chef Rajesh Kumar',
      date: new Date('2025-01-08'),
      readTime: '7 min read',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['meal planning', 'organization', 'healthy eating']
    },
    {
      id: '3',
      title: 'Traditional Indian Spices and Their Health Benefits',
      excerpt: 'Explore the incredible health benefits of traditional Indian spices. From turmeric to cardamom, discover how these spices can boost your wellness.',
      content: 'Full article content would go here...',
      author: 'Ayurveda Expert Meera Patel',
      date: new Date('2025-01-05'),
      readTime: '6 min read',
      category: 'health',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['spices', 'ayurveda', 'traditional medicine']
    },
    {
      id: '4',
      title: 'Quick and Healthy Breakfast Recipes for Busy Mornings',
      excerpt: 'Start your day right with these quick, nutritious breakfast recipes. Perfect for busy professionals who don\'t want to compromise on health.',
      content: 'Full article content would go here...',
      author: 'Nutritionist Anita Singh',
      date: new Date('2025-01-03'),
      readTime: '4 min read',
      category: 'recipes',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['breakfast', 'quick recipes', 'healthy eating']
    },
    {
      id: '5',
      title: 'Understanding Macronutrients: Carbs, Proteins, and Fats',
      excerpt: 'Get a comprehensive understanding of macronutrients and how to balance them for optimal health and energy throughout the day.',
      content: 'Full article content would go here...',
      author: 'Dr. Vikram Gupta',
      date: new Date('2025-01-01'),
      readTime: '8 min read',
      category: 'nutrition',
      image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['macronutrients', 'nutrition science', 'diet planning']
    },
    {
      id: '6',
      title: 'The Benefits of Eating Seasonal and Local Produce',
      excerpt: 'Discover why eating seasonal and local produce is better for your health, the environment, and your wallet. Plus, tips on finding local farmers.',
      content: 'Full article content would go here...',
      author: 'Sustainability Expert Ravi Sharma',
      date: new Date('2024-12-28'),
      readTime: '6 min read',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['seasonal eating', 'sustainability', 'local produce']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Food & Nutrition Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights on nutrition, healthy recipes, and wellness tips from our experts
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar size={16} className="mr-2" />
                {format(featuredPost.date, 'MMM dd, yyyy')}
                <Clock size={16} className="ml-4 mr-2" />
                {featuredPost.readTime}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User size={16} className="text-gray-400 mr-2" />
                  <span className="text-gray-600">{featuredPost.author}</span>
                </div>
                <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.category === 'nutrition' ? 'bg-green-100 text-green-700' :
                    post.category === 'recipes' ? 'bg-orange-100 text-orange-700' :
                    post.category === 'health' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={14} className="mr-1" />
                  {format(post.date, 'MMM dd')}
                  <Clock size={14} className="ml-3 mr-1" />
                  {post.readTime}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                    Read More
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Our Latest Articles
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest nutrition tips, healthy recipes, and wellness insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;