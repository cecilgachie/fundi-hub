import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Star, 
  Users, 
  DollarSign, 
  Phone, 
  MapPin,
  Settings,
  Bell,
  TrendingUp,
  CheckCircle,
  XCircle
} from 'lucide-react';

const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const providerStats = {
    totalBookings: 127,
    rating: 4.8,
    earnings: 45600,
    completedJobs: 118,
    pendingBookings: 5,
    activeBookings: 4
  };

  const recentBookings = [
    {
      id: 1,
      client: 'Mary Johnson',
      service: 'Pipe Repair',
      date: '2024-01-15',
      time: '10:00',
      status: 'confirmed',
      amount: 800
    },
    {
      id: 2,
      client: 'David Wilson',
      service: 'Toilet Installation',
      date: '2024-01-16',
      time: '14:00',
      status: 'pending',
      amount: 1200
    },
    {
      id: 3,
      client: 'Sarah Brown',
      service: 'Sink Repair',
      date: '2024-01-17',
      time: '09:00',
      status: 'completed',
      amount: 600
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Provider Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back, John Kamau</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-green-600">{providerStats.totalBookings}</div>
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-sm text-gray-600">Total Bookings</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-yellow-500">{providerStats.rating}</div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-blue-600">KES {providerStats.earnings.toLocaleString()}</div>
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-sm text-gray-600">Total Earnings</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-green-600">{providerStats.completedJobs}</div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-sm text-gray-600">Completed Jobs</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-orange-500">{providerStats.pendingBookings}</div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-purple-600">{providerStats.activeBookings}</div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-sm text-gray-600">Active</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview' },
                { id: 'bookings', name: 'Bookings' },
                { id: 'earnings', name: 'Earnings' },
                { id: 'reviews', name: 'Reviews' },
                { id: 'profile', name: 'Profile' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Recent Bookings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
                    <div className="space-y-3">
                      {recentBookings.map(booking => (
                        <div key={booking.id} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium">{booking.client}</h4>
                              <p className="text-sm text-gray-600">{booking.service}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                              booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {booking.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {booking.time}
                            </div>
                            <div className="ml-auto font-medium text-green-600">
                              KES {booking.amount}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Chart */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Performance This Month</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Bookings Completed</span>
                          <span className="font-medium">12/15</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Client Satisfaction</span>
                          <span className="font-medium">4.8/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Response Time</span>
                          <span className="font-medium">{"< 2 hrs"}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">All Bookings</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Client</th>
                        <th className="text-left py-2">Service</th>
                        <th className="text-left py-2">Date</th>
                        <th className="text-left py-2">Time</th>
                        <th className="text-left py-2">Status</th>
                        <th className="text-left py-2">Amount</th>
                        <th className="text-left py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map(booking => (
                        <tr key={booking.id} className="border-b">
                          <td className="py-3">{booking.client}</td>
                          <td className="py-3">{booking.service}</td>
                          <td className="py-3">{booking.date}</td>
                          <td className="py-3">{booking.time}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                              booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-3 font-medium text-green-600">KES {booking.amount}</td>
                          <td className="py-3">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Earnings Summary</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">This Month</h4>
                    <div className="text-2xl font-bold text-green-600">KES 12,400</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Last Month</h4>
                    <div className="text-2xl font-bold text-gray-600">KES 9,800</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Total Earnings</h4>
                    <div className="text-2xl font-bold text-blue-600">KES 45,600</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  {[
                    { client: 'Mary Johnson', rating: 5, comment: 'Excellent service! Very professional and fixed the issue quickly.' },
                    { client: 'David Wilson', rating: 4, comment: 'Good work, arrived on time and completed the job efficiently.' },
                    { client: 'Sarah Brown', rating: 5, comment: 'Highly recommend! Great attention to detail and fair pricing.' }
                  ].map((review, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{review.client}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue="John Kamau"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        defaultValue="+254 712 345 678"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        defaultValue="john.kamau@email.com"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input 
                        type="text" 
                        defaultValue="Nairobi"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Services Offered</label>
                    <textarea 
                      rows={3}
                      defaultValue="Professional plumbing services including pipe repairs, installations, and maintenance."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                    Update Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;