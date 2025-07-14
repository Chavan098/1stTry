import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Award, MapPin } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '',
      label: 'Happy Customers',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      number: '1k',
      label: 'Meals Delivered',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Award,
      number: '4.8/5',
      label: 'Average Rating',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: MapPin,
      number: '2',
      label: 'Cities Served',
      color: 'from-secondary-500 to-secondary-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their daily meals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/90 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;