import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Package, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+12%',
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Revenue',
      value: '₹2,45,678',
      change: '+8%',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Active Users',
      value: '856',
      change: '+15%',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Avg. Delivery Time',
      value: '28 min',
      change: '-5%',
      icon: Clock,
      color: 'bg-orange-500'
    }
  ];

  const recentOrders = [
    {
      id: 'FE2025001',
      customer: 'John Doe',
      items: 'North Indian Thali x2',
      amount: 298,
      status: 'delivered',
      time: '2 hours ago'
    },
    {
      id: 'FE2025002',
      customer: 'Jane Smith',
      items: 'Chicken Biryani x1',
      amount: 179,
      status: 'preparing',
      time: '30 min ago'
    },
    {
      id: 'FE2025003',
      customer: 'Mike Johnson',
      items: 'South Indian Combo x1',
      amount: 139,
      status: 'out_for_delivery',
      time: '15 min ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-700';
      case 'preparing':
        return 'bg-yellow-100 text-yellow-700';
      case 'out_for_delivery':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'orders', label: 'Orders' },
    { id: 'customers', label: 'Customers' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your food delivery platform efficiently
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      <p className={`text-sm mt-1 ${
                        stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <stat.icon className="text-white" size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts and Recent Orders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Revenue Chart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Overview</h3>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="text-gray-400 mx-auto mb-2" size={48} />
                    <p className="text-gray-500">Chart visualization would go here</p>
                  </div>
                </div>
              </motion.div>

              {/* Recent Orders */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h3>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">#{order.id}</p>
                        <p className="text-gray-600 text-sm">{order.customer}</p>
                        <p className="text-gray-500 text-xs">{order.items}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">₹{order.amount}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status.replace('_', ' ')}
                        </span>
                        <p className="text-gray-500 text-xs mt-1">{order.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Management</h3>
            <p className="text-gray-600">Order management interface would be implemented here with features like:</p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>View all orders with filtering and sorting</li>
              <li>Update order status</li>
              <li>Assign delivery partners</li>
              <li>Handle refunds and cancellations</li>
              <li>Print order receipts</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'customers' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Management</h3>
            <p className="text-gray-600">Customer management interface would include:</p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Customer database with search and filters</li>
              <li>Order history for each customer</li>
              <li>Customer support ticket management</li>
              <li>Loyalty program management</li>
              <li>Customer analytics and insights</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'inventory' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Inventory Management</h3>
            <p className="text-gray-600">Inventory management features would include:</p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Menu item management (add, edit, delete)</li>
              <li>Stock level tracking</li>
              <li>Ingredient management</li>
              <li>Supplier management</li>
              <li>Low stock alerts</li>
              <li>Pricing management</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Reports</h3>
            <p className="text-gray-600">Analytics dashboard would provide:</p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Sales analytics and trends</li>
              <li>Customer behavior insights</li>
              <li>Popular menu items analysis</li>
              <li>Delivery performance metrics</li>
              <li>Revenue forecasting</li>
              <li>Custom report generation</li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;