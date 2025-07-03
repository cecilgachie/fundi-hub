import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Booking {
  id: string;
  clientId: string;
  providerId: string;
  serviceType: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  amount: number;
  notes?: string;
  paymentMethod: 'mpesa' | 'cash';
}

interface BookingContextType {
  bookings: Booking[];
  createBooking: (booking: Omit<Booking, 'id'>) => string;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  getBookingsByClient: (clientId: string) => Booking[];
  getBookingsByProvider: (providerId: string) => Booking[];
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const createBooking = (booking: Omit<Booking, 'id'>) => {
    const id = Date.now().toString();
    const newBooking: Booking = { ...booking, id };
    setBookings(prev => [...prev, newBooking]);
    return id;
  };

  const updateBooking = (id: string, updates: Partial<Booking>) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === id ? { ...booking, ...updates } : booking
      )
    );
  };

  const getBookingsByClient = (clientId: string) => {
    return bookings.filter(booking => booking.clientId === clientId);
  };

  const getBookingsByProvider = (providerId: string) => {
    return bookings.filter(booking => booking.providerId === providerId);
  };

  const value: BookingContextType = {
    bookings,
    createBooking,
    updateBooking,
    getBookingsByClient,
    getBookingsByProvider
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};