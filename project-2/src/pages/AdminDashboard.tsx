import React, { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Phone, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const stats = {
    totalProviders: 1247,
    totalClients: 8934,
    totalBookings: 15678,
    totalRevenue: 2456789,
    pendingVerifications: 23,
    activeDisputes: 5
  };

  const recentProviders = [
    { id: 1, name: 'John Kamau', service: 'Plumbing', status: 'pending', joinDate: '2024-01-15' },
    { id: 2, name: 'Grace Wanjiku', service: 'Cleaning', status: 'verified', joinDate: '2024-01-14' },
    { id: 3, name: 'David Ochieng', service: 'Electrical', status: 'rejected', joinDate: '2024-01-13' }
  ];

  const recentBookings = [
    { id: 1, client: 'Sarah Johnson', provider: 'John Kamau', service: 'Plumbing', amount: 800, status: 'completed' },
    { id: 2, client: 'Michael Brown', provider: 'Grace Wanjiku', service: 'Cleaning', amount: 1500, status: 'active' },
    { id: 3, client: 'Mary Wilson', provider: 'David Ochieng', service: 'Electrical', amount: 1200, status: 'pending' }
  ];

  const disputes = [
    { id: 1, client: 'Sarah J.', provider: 'John K.', issue: 'Service quality', status: 'investigating' },
    { id: 2, client: 'Michael B.', provider: 'Grace W.', issue: 'Payment dispute', status: 'resolved' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your FundiConnect platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-green-600">{stats.totalProviders.toLocaleString()}</div>
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-sm text-gray-600">Total Providers</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-blue-600">{stats.totalClients.toLocaleString()}</div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-sm text-gray-600">Total Clients</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-purple-600">{stats.totalBookings.toLocaleString()}</div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-sm text-gray-600">Total Bookings</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-yellow-600">KES {(stats.totalRevenue / 1000).toFixed(0)}K</div>
              <DollarSign className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="text-sm text-gray-600">Total Revenue</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-orange-600">{stats.pendingVerifications}</div>
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-sm text-gray-600">Pending Verifications</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-red-600">{stats.activeDisputes}</div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-sm text-gray-600">Active Disputes</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview' },
                { id: 'providers', name: 'Providers' },
                { id: 'clients', name: 'Clients' },
                { id: 'bookings', name: 'Bookings' },
                { id: 'disputes', name: 'Disputes' },
                { id: 'analytics', name: 'Analytics' }
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
                  {/* Recent Provider Applications */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Recent Provider Applications</h3>
                    <div className="space-y-3">
                      {recentProviders.map(provider => (
                        <div key={provider.id} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium">{provider.name}</h4>
                              <p className="text-sm text-gray-600">{provider.service}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              provider.status === 'verified' ? 'bg-green-100 text-green-800' :
                              provider.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {provider.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">Applied: {provider.joinDate}</p>
                        </div>
                      ))}
                    </div>
                  </div>

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
                              booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                              booking.status === 'active' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">Provider: {booking.provider}</p>
                            <p className="font-medium text-green-600">KES {booking.amount}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'providers' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Provider Management</h3>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search providers..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                      <Filter className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Name</th>
                        <th className="text-left py-2">Service</th>
                        <th className="text-left py-2">Status</th>
                        <th className="text-left py-2">Join Date</th>
                        <th className="text-left py-2">Rating</th>
                        <th className="text-left py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentProviders.map(provider => (
                        <tr key={provider.id} className="border-b">
                          <td className="py-3">{provider.name}</td>
                          <td className="py-3">{provider.service}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              provider.status === 'verified' ? 'bg-green-100 text-green-800' :
                              provider.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {provider.status}
                            </span>
                          </td>
                          <td className="py-3">{provider.joinDate}</td>
                          <td className="py-3">4.8</td>
                          <td className="py-3">
                            <div className="flex gap-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="text-green-600 hover:text-green-800">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'disputes' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Dispute Management</h3>
                <div className="space-y-4">
                  {disputes.map(dispute => (
                    <div key={dispute.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">Dispute #{dispute.id}</h4>
                          <p className="text-sm text-gray-600">{dispute.issue}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          dispute.status === 'resolved' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {dispute.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">
                          {dispute.client} vs {dispute.provider}
                        </p>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                          Review
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Platform Analytics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Revenue Growth</h4>
                    <div className="text-2xl font-bold text-green-600 mb-2">+15.3%</div>
                    <p className="text-sm text-gray-600">Compared to last month</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">User Acquisition</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">+8.7%</div>
                    <p className="text-sm text-gray-600">New users this month</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Booking Success Rate</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-2">92.4%</div>
                    <p className="text-sm text-gray-600">Successfully completed bookings</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Average Rating</h4>
                    <div className="text-2xl font-bold text-yellow-600 mb-2">4.6/5</div>
                    <p className="text-sm text-gray-600">Platform-wide rating</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;