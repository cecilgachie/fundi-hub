import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'provider' | 'admin';
  phone: string;
  location: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: Omit<User, 'id'>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would call an API
    if (email === 'provider@example.com') {
      setUser({
        id: '1',
        name: 'John Kamau',
        email: 'provider@example.com',
        role: 'provider',
        phone: '+254 712 345 678',
        location: 'Nairobi'
      });
    } else if (email === 'admin@example.com') {
      setUser({
        id: '2',
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin',
        phone: '+254 700 000 000',
        location: 'Nairobi'
      });
    } else {
      setUser({
        id: '3',
        name: 'Sarah Johnson',
        email: 'client@example.com',
        role: 'client',
        phone: '+254 712 345 678',
        location: 'Nairobi'
      });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (userData: Omit<User, 'id'>) => {
    // Mock registration - in real app, this would call an API
    setUser({
      id: Date.now().toString(),
      ...userData
    });
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};