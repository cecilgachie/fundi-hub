import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProvidersPage from '../../pages/ProvidersPage';

const ProvidersPageWithRouter = () => (
  <BrowserRouter>
    <ProvidersPage />
  </BrowserRouter>
);

describe('ProvidersPage Component', () => {
  test('renders search and filter interface', () => {
    render(<ProvidersPageWithRouter />);
    
    expect(screen.getByPlaceholderText('Search by name or service...')).toBeInTheDocument();
    expect(screen.getByText('Filters')).toBeInTheDocument();
  });

  test('renders provider cards', () => {
    render(<ProvidersPageWithRouter />);
    
    expect(screen.getByText('John Kamau')).toBeInTheDocument();
    expect(screen.getByText('Grace Wanjiku')).toBeInTheDocument();
    expect(screen.getByText('David Ochieng')).toBeInTheDocument();
  });

  test('search functionality works', () => {
    render(<ProvidersPageWithRouter />);
    
    const searchInput = screen.getByPlaceholderText('Search by name or service...');
    fireEvent.change(searchInput, { target: { value: 'John' } });
    
    expect(screen.getByText('John Kamau')).toBeInTheDocument();
    expect(screen.queryByText('Grace Wanjiku')).not.toBeInTheDocument();
  });

  test('category filter works', () => {
    render(<ProvidersPageWithRouter />);
    
    const categorySelect = screen.getByDisplayValue('All Services');
    fireEvent.change(categorySelect, { target: { value: 'plumbing' } });
    
    expect(screen.getByText('John Kamau')).toBeInTheDocument();
    expect(screen.queryByText('Grace Wanjiku')).not.toBeInTheDocument();
  });

  test('displays correct provider information', () => {
    render(<ProvidersPageWithRouter />);
    
    // Check for John Kamau's details
    expect(screen.getByText('Plumbing')).toBeInTheDocument();
    expect(screen.getByText('4.8')).toBeInTheDocument();
    expect(screen.getByText('(127 reviews)')).toBeInTheDocument();
    expect(screen.getByText('KES 500-1500/hr')).toBeInTheDocument();
  });
});