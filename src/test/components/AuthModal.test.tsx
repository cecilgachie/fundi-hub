import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import AuthModal from '../../components/AuthModal';

// Mock the useAuth hook
const mockSignIn = vi.fn();
const mockSignUp = vi.fn();
const mockSignInWithGoogle = vi.fn();
const mockResetPassword = vi.fn();

vi.mock('../../hooks/useAuth', () => ({
  useAuth: () => ({
    signIn: mockSignIn,
    signUp: mockSignUp,
    signInWithGoogle: mockSignInWithGoogle,
    signInWithFacebook: vi.fn(),
    resetPassword: mockResetPassword,
    loading: false,
    error: null,
  }),
}));

describe('AuthModal Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders sign in form by default', () => {
    render(<AuthModal isOpen={true} onClose={() => {}} />);
    
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
  });

  test('switches to sign up mode', async () => {
    render(<AuthModal isOpen={true} onClose={() => {}} />);
    
    const signUpLink = screen.getByText('Sign up');
    fireEvent.click(signUpLink);
    
    await waitFor(() => {
      expect(screen.getByText('Sign Up')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter your full name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Confirm your password')).toBeInTheDocument();
    });
  });

  test('submits sign in form', async () => {
    render(<AuthModal isOpen={true} onClose={() => {}} />);
    
    fireEvent.change(screen.getByPlaceholderText('Enter your email'), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your password'), {
      target: { value: 'password123' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: 'Sign In' }));
    
    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  test('toggles password visibility', () => {
    render(<AuthModal isOpen={true} onClose={() => {}} />);
    
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    const toggleButton = screen.getByRole('button', { name: '' }); // Eye icon button
    
    expect(passwordInput).toHaveAttribute('type', 'password');
    
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');
  });
});