import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Header from './Header.component';

describe('Header component', () => {
  it('renders Header elements', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByText('WIZE Designs');
    const searchInput = screen.getByPlaceholderText('Search');
    const cartButton = screen.getByTitle('shopping cart');

    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
  });
});
