import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProvidersPage from './pages/ProvidersPage';
import BookingPage from './pages/BookingPage';
import ProviderDashboard from './pages/ProviderDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ClientDashboard from './pages/ClientDashboard';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/providers" element={<ProvidersPage />} />
              <Route path="/booking/:providerId" element={<BookingPage />} />
              <Route path="/provider-dashboard" element={<ProviderDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/client-dashboard" element={<ClientDashboard />} />
            </Routes>
          </div>
        </Router>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;