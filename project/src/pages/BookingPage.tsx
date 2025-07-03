import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Star, 
  MapPin, 
  Phone, 
  Shield, 
  CreditCard,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';

const BookingPage = () => {
  const { providerId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Mock provider data - in real app, this would come from API
  const provider = {
    id: providerId,
    name: 'John Kamau',
    service: 'Plumbing',
    location: 'Nairobi',
    rating: 4.8,
    reviews: 127,
    price: 'KES 500-1500/hr',
    verified: true,
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Professional plumber with 10+ years experience. Specializes in residential and commercial plumbing.',
    services: [
      { id: 1, name: 'Pipe Repair', price: 800 },
      { id: 2, name: 'Toilet Installation', price: 1200 },
      { id: 3, name: 'Sink Repair', price: 600 },
      { id: 4, name: 'Water Heater Service', price: 1500 },
    ],
    availableSlots: [
      '08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
    ]
  };

  const handleBooking = () => {
    // Simulate booking process
    setShowConfirmation(true);
  };

  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      });
    }
    return dates;
  };

  const selectedServiceDetails = provider.services.find(s => s.id === parseInt(selectedService));

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Your booking with {provider.name} has been confirmed. You'll receive a WhatsApp message with details.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold mb-2">Booking Details:</h3>
              <p><strong>Service:</strong> {selectedServiceDetails?.name}</p>
              <p><strong>Date:</strong> {selectedDate}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Total:</strong> KES {selectedServiceDetails?.price}</p>
              <p><strong>Booking ID:</strong> #BK{Date.now()}</p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate('/client-dashboard')}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                View My Bookings
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/providers')}
            className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Book Service</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Provider Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-4 mb-6">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-semibold">{provider.name}</h2>
                  {provider.verified && (
                    <div className="bg-green-100 p-1 rounded-full">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-2">{provider.service}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{provider.rating} ({provider.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{provider.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{provider.description}</p>
            
            <div className="flex gap-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                <Phone className="w-4 h-4 inline mr-2" />
                Call Now
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200">
                WhatsApp
              </button>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-6">Book Your Service</h3>
            
            <form onSubmit={(e) => { e.preventDefault(); handleBooking(); }} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Choose a service...</option>
                  {provider.services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} - KES {service.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {getNextWeekDates().map(date => (
                    <button
                      key={date.value}
                      type="button"
                      onClick={() => setSelectedDate(date.value)}
                      className={`p-3 rounded-lg border text-sm transition-colors duration-200 ${
                        selectedDate === date.value
                          ? 'bg-green-600 text-white border-green-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'
                      }`}
                    >
                      {date.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {provider.availableSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg border text-sm transition-colors duration-200 ${
                        selectedTime === time
                          ? 'bg-green-600 text-white border-green-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Any specific requirements or details..."
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="mpesa"
                      checked={paymentMethod === 'mpesa'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2"
                    />
                    <span>M-Pesa</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2"
                    />
                    <span>Cash on Service</span>
                  </label>
                </div>
              </div>

              {/* Total */}
              {selectedServiceDetails && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-green-600">KES {selectedServiceDetails.price}</span>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedService || !selectedDate || !selectedTime}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;