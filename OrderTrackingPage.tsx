import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Clock, 
  CheckCircle, 
  Truck, 
  MapPin,
  Star,
  Phone,
  MessageCircle
} from 'lucide-react';
import { format } from 'date-fns';

const OrderTrackingPage: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState('1');

  const orders = [
    {
      id: '1',
      orderNumber: 'FE2025001',
      date: new Date('2025-01-15T12:30:00'),
      status: 'delivered',
      total: 299,
      items: [
        { name: 'North Indian Thali', quantity: 2, price: 149 }
      ],
      deliveryAddress: '123 MG Road, Bangalore, Karnataka 560001',
      estimatedDelivery: new Date('2025-01-15T13:30:00'),
      actualDelivery: new Date('2025-01-15T13:25:00'),
      deliveryPartner: {
        name: 'Rajesh Kumar',
        phone: '+91 98765 43210',
        rating: 4.8
      }
    },
    {
      id: '2',
      orderNumber: 'FE2025002',
      date: new Date('2025-01-16T11:00:00'),
      status: 'out_for_delivery',
      total: 179,
      items: [
        { name: 'Chicken Biryani', quantity: 1, price: 179 }
      ],
      deliveryAddress: '456 Brigade Road, Bangalore, Karnataka 560025',
      estimatedDelivery: new Date('2025-01-16T12:30:00'),
      deliveryPartner: {
        name: 'Suresh Patel',
        phone: '+91 87654 32109',
        rating: 4.9
      }
    },
    {
      id: '3',
      orderNumber: 'FE2025003',
      date: new Date('2025-01-16T14:00:00'),
      status: 'preparing',
      total: 268,
      items: [
        { name: 'South Indian Combo', quantity: 1, price: 139 },
        { name: 'Healthy Salad Bowl', quantity: 1, price: 129 }
      ],
      deliveryAddress: '789 Koramangala, Bangalore, Karnataka 560034',
      estimatedDelivery: new Date('2025-01-16T15:30:00')
    }
  ];

  const getStatusSteps = (status: string) => {
    const steps = [
      { key: 'confirmed', label: 'Order Confirmed', icon: CheckCircle },
      { key: 'preparing', label: 'Preparing', icon: Package },
      { key: 'out_for_delivery', label: 'Out for Delivery', icon: Truck },
      { key: 'delivered', label: 'Delivered', icon: CheckCircle }
    ];

    const statusOrder = ['confirmed', 'preparing', 'out_for_delivery', 'delivered'];
    const currentIndex = statusOrder.indexOf(status);

    return steps.map((step, index) => ({
      ...step,
      completed: index <= currentIndex,
      active: index === currentIndex
    }));
  };

  const currentOrder = orders.find(order => order.id === selectedOrder);
  const statusSteps = currentOrder ? getStatusSteps(currentOrder.status) : [];

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
            Track Your Orders
          </h1>
          <p className="text-gray-600">
            Stay updated with real-time order tracking and delivery status
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <button
                    key={order.id}
                    onClick={() => setSelectedOrder(order.id)}
                    className={`w-full p-6 text-left hover:bg-gray-50 transition-colors ${
                      selectedOrder === order.id ? 'bg-primary-50 border-r-4 border-primary-500' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-gray-900">#{order.orderNumber}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === 'delivered' 
                          ? 'bg-secondary-100 text-secondary-700'
                          : order.status === 'out_for_delivery'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {order.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      {format(order.date, 'MMM dd, yyyy • h:mm a')}
                    </p>
                    <p className="text-gray-900 font-semibold">₹{order.total}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="lg:col-span-2">
            {currentOrder && (
              <motion.div
                key={currentOrder.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Order Status */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Order Status
                  </h3>
                  
                  <div className="relative">
                    {statusSteps.map((step, index) => (
                      <div key={step.key} className="flex items-center mb-8 last:mb-0">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed 
                            ? 'bg-secondary-500 text-white' 
                            : step.active
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}>
                          <step.icon size={20} />
                        </div>
                        
                        <div className="ml-4 flex-1">
                          <p className={`font-medium ${
                            step.completed || step.active ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {step.label}
                          </p>
                          {step.active && (
                            <p className="text-sm text-gray-600 mt-1">
                              {currentOrder.status === 'preparing' && 'Your order is being prepared with care'}
                              {currentOrder.status === 'out_for_delivery' && 'Your order is on the way'}
                            </p>
                          )}
                        </div>

                        {index < statusSteps.length - 1 && (
                          <div className={`absolute left-5 w-0.5 h-8 ${
                            step.completed ? 'bg-secondary-500' : 'bg-gray-200'
                          }`} style={{ top: `${(index + 1) * 64 - 32}px` }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Delivery Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-primary-600 mt-1 mr-3" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Delivery Address</p>
                        <p className="text-gray-600">{currentOrder.deliveryAddress}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="text-primary-600 mt-1 mr-3" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">
                          {currentOrder.status === 'delivered' ? 'Delivered At' : 'Estimated Delivery'}
                        </p>
                        <p className="text-gray-600">
                          {format(
                            currentOrder.status === 'delivered' 
                              ? currentOrder.actualDelivery! 
                              : currentOrder.estimatedDelivery, 
                            'MMM dd, yyyy • h:mm a'
                          )}
                
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Partner */}
                {currentOrder.deliveryPartner && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Delivery Partner
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-primary-600 font-semibold">
                            {currentOrder.deliveryPartner.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {currentOrder.deliveryPartner.name}
                          </p>
                          <div className="flex items-center">
                            <Star className="text-yellow-500 mr-1" size={16} />
                            <span className="text-gray-600">{currentOrder.deliveryPartner.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <a
                          href={`tel:${currentOrder.deliveryPartner.phone}`}
                          className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
                        >
                          <Phone size={20} />
                        </a>
                        <button className="p-2 bg-secondary-100 text-secondary-600 rounded-lg hover:bg-secondary-200 transition-colors">
                          <MessageCircle size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Order Items */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Order Items
                  </h3>
                  
                  <div className="space-y-4">
                    {currentOrder.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                      </div>
                    ))}
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold text-gray-900">Total</p>
                        <p className="text-lg font-bold text-primary-600">₹{currentOrder.total}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {currentOrder.status === 'delivered' && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Rate Your Experience
                    </h3>
                    <div className="flex space-x-4">
                      <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors">
                        Rate Order
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Reorder
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;