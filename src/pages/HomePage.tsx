import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Shield, 
  Star, 
  Users, 
  Clock, 
  MapPin,
  CheckCircle,
  Smartphone,
  CreditCard,
  UserCheck
} from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Connect with Trusted
              <span className="block text-green-200">Service Providers</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-green-100">
              Book verified fundis, cleaners, tutors, and freelancers in Kenya through WhatsApp. 
              Safe, secure, and simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/providers"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-200 shadow-lg"
              >
                Find a Provider
              </Link>
              <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors duration-200 border-2 border-green-600">
                Become a Provider
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-gray-600">Verified Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to connect with the best service providers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Search on WhatsApp</h3>
              <p className="text-gray-600">
                Send a message to our WhatsApp number describing the service you need
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Choose Provider</h3>
              <p className="text-gray-600">
                Browse verified providers with ratings, reviews, and instant availability
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Book & Pay</h3>
              <p className="text-gray-600">
                Schedule your service and pay securely through M-Pesa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600">Find the right professional for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Plumbing', icon: '🔧', providers: '500+' },
              { name: 'Electrical', icon: '⚡', providers: '300+' },
              { name: 'Cleaning', icon: '🧹', providers: '800+' },
              { name: 'Tutoring', icon: '📚', providers: '400+' },
              { name: 'Carpentry', icon: '🔨', providers: '200+' },
              { name: 'Painting', icon: '🎨', providers: '150+' },
              { name: 'Gardening', icon: '🌱', providers: '100+' },
              { name: 'Security', icon: '🛡️', providers: '250+' },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-green-50 transition-colors duration-200 cursor-pointer">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.providers} providers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Safety is Our Priority</h2>
            <p className="text-xl text-gray-600">Comprehensive verification and protection for every interaction</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">ID Verification</h3>
              </div>
              <p className="text-gray-600">
                All providers undergo thorough background checks and ID verification
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">Ratings & Reviews</h3>
              </div>
              <p className="text-gray-600">
                Real reviews from verified clients help you make informed decisions
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <CreditCard className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">Secure Payments</h3>
              </div>
              <p className="text-gray-600">
                M-Pesa integration with payment protection and dispute resolution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of satisfied customers who trust FundiConnect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/providers"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-200"
            >
              Find a Provider Now
            </Link>
            <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors duration-200 border-2 border-green-500">
              WhatsApp: +254 700 000 000
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;