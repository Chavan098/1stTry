import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Star, Calendar } from 'lucide-react';
import toast from 'react-hot-toast';

const SubscriptionPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [selectedMealType, setSelectedMealType] = useState('lunch');

  const plans = [
    {
      id: 'daily',
      name: 'Daily',
      duration: '1 Day',
      price: 149,
      originalPrice: 179,
      savings: 30,
      popular: false,
      features: [
        'Fresh daily meal',
        'On-time delivery',
        'Quality guarantee',
        'Customer support'
      ]
    },
    {
      id: 'weekly',
      name: 'Weekly',
      duration: '7 Days',
      price: 899,
      originalPrice: 1253,
      savings: 354,
      popular: false,
      features: [
        'All daily features',
        '7 days meal plan',
        'Flexible delivery',
        'Menu customization',
        'Priority support'
      ]
    },
    {
      id: 'monthly',
      name: 'Monthly',
      duration: '30 Days',
      price: 3599,
      originalPrice: 5370,
      savings: 1771,
      popular: true,
      features: [
        'All weekly features',
        '30 days meal plan',
        'Maximum savings',
        'Dedicated support',
        'Free delivery',
        'Meal customization'
      ]
    }
  ];

  const mealTypes = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      time: '8:00 AM - 10:00 AM',
      description: 'Start your day with nutritious breakfast options'
    },
    {
      id: 'lunch',
      name: 'Lunch',
      time: '12:00 PM - 2:00 PM',
      description: 'Complete meals to fuel your afternoon'
    },
    {
      id: 'dinner',
      name: 'Dinner',
      time: '7:00 PM - 9:00 PM',
      description: 'Wholesome dinners to end your day right'
    },
    {
      id: 'combo',
      name: 'Lunch + Dinner',
      time: 'Both meals',
      description: 'Complete daily nutrition with both meals'
    }
  ];

  const handleSubscribe = () => {
    const plan = plans.find(p => p.id === selectedPlan);
    const mealType = mealTypes.find(m => m.id === selectedMealType);
    
    toast.success(`Subscribed to ${plan?.name} ${mealType?.name} plan!`);
  };

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
            Subscription Plans
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect meal plan that fits your lifestyle and budget
          </p>
        </motion.div>

        {/* Meal Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select Meal Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mealTypes.map((mealType) => (
              <button
                key={mealType.id}
                onClick={() => setSelectedMealType(mealType.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedMealType === mealType.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center mb-2">
                  <Clock size={16} className="text-primary-600 mr-2" />
                  <span className="font-semibold text-gray-900">{mealType.name}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{mealType.time}</p>
                <p className="text-xs text-gray-500">{mealType.description}</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.duration}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-primary-600">₹{plan.price}</span>
                    <span className="text-gray-500 ml-2">/{plan.duration.toLowerCase()}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-400 line-through">₹{plan.originalPrice}</span>
                    <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full text-sm ml-2">
                      Save ₹{plan.savings}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-secondary-500 mr-3 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    selectedPlan === plan.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Why Subscribe with FoodieExpress?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Fresh ingredients and hygienic preparation standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-secondary-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Pause, skip, or modify your subscription anytime</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer support for all subscribers</p>
            </div>
          </div>
        </motion.div>

        {/* Subscribe Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={handleSubscribe}
            className="bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Subscribe Now
          </button>
          <p className="text-gray-600 mt-4">
            Cancel anytime • No hidden fees • 100% satisfaction guarantee
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SubscriptionPage;