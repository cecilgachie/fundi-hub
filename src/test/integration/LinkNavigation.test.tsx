import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

describe('Link Navigation Integration Tests', () => {
  test('navigation between pages works correctly', () => {
    render(<App />);
    
    // Start on home page
    expect(screen.getByText('Connect with Trusted')).toBeInTheDocument();
    
    // Navigate to providers page
    const findProvidersLink = screen.getByText('Find Providers');
    fireEvent.click(findProvidersLink);
    
    expect(screen.getByText('Find Trusted Service Providers')).toBeInTheDocument();
  });

  test('logo link returns to home page', () => {
    render(<App />);
    
    // Navigate away from home
    const findProvidersLink = screen.getByText('Find Providers');
    fireEvent.click(findProvidersLink);
    
    // Click logo to return home
    const logo = screen.getByText('FundiConnect');
    fireEvent.click(logo);
    
    expect(screen.getByText('Connect with Trusted')).toBeInTheDocument();
  });

  test('provider booking flow works', () => {
    render(<App />);
    
    // Navigate to providers
    fireEvent.click(screen.getByText('Find Providers'));
    
    // Click on a provider's "Book Now" button
    const bookButtons = screen.getAllByText('Book Now');
    fireEvent.click(bookButtons[0]);
    
    expect(screen.getByText('Book Service')).toBeInTheDocument();
  });
});