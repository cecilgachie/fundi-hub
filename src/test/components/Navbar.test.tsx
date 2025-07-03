import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Navbar from '../../components/Navbar';

// Mock the useAuth hook
vi.mock('../../hooks/useAuth', () => ({
  useAuth: () => ({
    user: null,
    logout: vi.fn(),
  }),
}));

const NavbarWithRouter = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe('Navbar Component', () => {
  test('renders logo and navigation links', () => {
    render(<NavbarWithRouter />);
    
    expect(screen.getByText('FundiConnect')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Find Providers')).toBeInTheDocument();
    expect(screen.getByText('How it Works')).toBeInTheDocument();
    expect(screen.getByText('Safety')).toBeInTheDocument();
  });

  test('shows auth buttons when user is not logged in', () => {
    render(<NavbarWithRouter />);
    
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  test('mobile menu toggles correctly', async () => {
    render(<NavbarWithRouter />);
    
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);
    
    await waitFor(() => {
      expect(screen.getAllByText('Home')).toHaveLength(2); // Desktop + Mobile
    });
  });

  test('auth modal opens when sign in button is clicked', async () => {
    render(<NavbarWithRouter />);
    
    const signInButton = screen.getByText('Sign In');
    fireEvent.click(signInButton);
    
    await waitFor(() => {
      expect(screen.getByText('Email Address')).toBeInTheDocument();
    });
  });
});