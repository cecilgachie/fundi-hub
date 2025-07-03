import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage';

const HomePageWithRouter = () => (
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>
);

describe('HomePage Component', () => {
  test('renders hero section', () => {
    render(<HomePageWithRouter />);
    
    expect(screen.getByText('Connect with Trusted')).toBeInTheDocument();
    expect(screen.getByText('Service Providers')).toBeInTheDocument();
    expect(screen.getByText('Find a Provider')).toBeInTheDocument();
    expect(screen.getByText('Become a Provider')).toBeInTheDocument();
  });

  test('renders stats section', () => {
    render(<HomePageWithRouter />);
    
    expect(screen.getByText('10,000+')).toBeInTheDocument();
    expect(screen.getByText('Verified Providers')).toBeInTheDocument();
    expect(screen.getByText('50,000+')).toBeInTheDocument();
    expect(screen.getByText('Happy Clients')).toBeInTheDocument();
  });

  test('renders how it works section', () => {
    render(<HomePageWithRouter />);
    
    expect(screen.getByText('How It Works')).toBeInTheDocument();
    expect(screen.getByText('1. Search on WhatsApp')).toBeInTheDocument();
    expect(screen.getByText('2. Choose Provider')).toBeInTheDocument();
    expect(screen.getByText('3. Book & Pay')).toBeInTheDocument();
  });

  test('renders services section', () => {
    render(<HomePageWithRouter />);
    
    expect(screen.getByText('Popular Services')).toBeInTheDocument();
    expect(screen.getByText('Plumbing')).toBeInTheDocument();
    expect(screen.getByText('Electrical')).toBeInTheDocument();
    expect(screen.getByText('Cleaning')).toBeInTheDocument();
  });

  test('renders safety section', () => {
    render(<HomePageWithRouter />);
    
    expect(screen.getByText('Your Safety is Our Priority')).toBeInTheDocument();
    expect(screen.getByText('ID Verification')).toBeInTheDocument();
    expect(screen.getByText('Ratings & Reviews')).toBeInTheDocument();
    expect(screen.getByText('Secure Payments')).toBeInTheDocument();
  });
});