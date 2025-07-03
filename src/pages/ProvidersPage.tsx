import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Phone, 
  Shield, 
  Clock,
  ChevronDown
} from 'lucide-react';

const ProvidersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'cleaning', name: 'Cleaning' },
    { id: 'tutoring', name: 'Tutoring' },
    { id: 'carpentry', name: 'Carpentry' },
    { id: 'painting', name: 'Painting' },
    { id: 'gardening', name: 'Gardening' },
    { id: 'security', name: 'Security' },
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'nairobi', name: 'Nairobi' },
    { id: 'mombasa', name: 'Mombasa' },
    { id: 'kisumu', name: 'Kisumu' },
    { id: 'nakuru', name: 'Nakuru' },
    { id: 'eldoret', name: 'Eldoret' },
  ];

  const providers = [
    {
      id: 1,
      name: 'John Kamau',
      service: 'Plumbing',
      location: 'Nairobi',
      rating: 4.8,
      reviews: 127,
      price: 'KES 500-1500/hr',
      availability: 'Available Now',
      verified: true,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional plumber with 10+ years experience. Specializes in residential and commercial plumbing.',
    },
    {
      id: 2,
      name: 'Grace Wanjiku',
      service: 'House Cleaning',
      location: 'Nairobi',
      rating: 4.9,
      reviews: 89,
      price: 'KES 800-2000/day',
      availability: 'Available Today',
      verified: true,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Experienced cleaner offering thorough house cleaning services. Eco-friendly products available.',
    },
    {
      id: 3,
      name: 'David Ochieng',
      service: 'Electrical',
      location: 'Mombasa',
      rating: 4.7,
      reviews: 156,
      price: 'KES 600-2000/hr',
      availability: 'Available Tomorrow',
      verified: true,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Licensed electrician with expertise in wiring, installations, and repairs. Safety certified.',
    },
    {
      id: 4,
      name: 'Sarah Muthoni',
      service: 'Math Tutoring',
      location: 'Nairobi',
      rating: 4.9,
      reviews: 43,
      price: 'KES 300-800/hr',
      availability: 'Available Now',
      verified: true,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mathematics teacher with 8 years experience. Specializes in KCSE and university level math.',
    },
    {
      id: 5,
      name: 'Peter Njoroge',
      service: 'Carpentry',
      location: 'Nakuru',
      rating: 4.6,
      reviews: 78,
      price: 'KES 400-1200/hr',
      availability: 'Available This Week',
      verified: true,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Custom furniture maker and carpenter. Quality workmanship with attention to detail.',
    },
    {
      id: 6,
      name: 'Mary Akinyi',
      service: 'Painting',
      location: 'Kisumu',
      rating: 4.8,
      reviews: 92,
      price: 'KES 350-1000/hr',
      availability: 'Available Now',
      verified: true,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional painter specializing in interior and exterior painting. Color consultation available.',
    },
  ];

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           provider.service.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || 
                           provider.location.toLowerCase() === selectedLocation.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Trusted Service Providers</h1>
          <p className="text-xl text-gray-600">Connect with verified professionals in your area</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or service..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Found {filteredProviders.length} provider{filteredProviders.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Provider Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map(provider => (
            <div key={provider.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                {/* Provider Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{provider.name}</h3>
                      <p className="text-gray-600 text-sm">{provider.service}</p>
                    </div>
                  </div>
                  {provider.verified && (
                    <div className="bg-green-100 p-1 rounded-full">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                  )}
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{provider.rating}</span>
                  </div>
                  <span className="text-gray-500">({provider.reviews} reviews)</span>
                </div>

                {/* Location and Availability */}
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{provider.availability}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{provider.description}</p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-lg font-semibold text-green-600">{provider.price}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    to={`/booking/${provider.id}`}
                    className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Book Now
                  </Link>
                  <button className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProviders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No providers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProvidersPage;