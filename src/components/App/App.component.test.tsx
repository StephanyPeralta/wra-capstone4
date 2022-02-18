import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App.component';
import ProductsProvider from '../../providers/Products';

jest.mock('../Slider', () => () => <div>Slider Mock</div>);
jest.mock('../Footer', () => () => <div>Footer Mock</div>);

describe('App component', () => {
  it('renders App elements', () => {
    render(
      <ProductsProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ProductsProvider>
    );

    const logo = screen.getByTitle('WizeD logo');
    const searchInput = screen.getByPlaceholderText('Search');
    const cartButton = screen.getByTitle('shopping cart');

    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
    expect(screen.getByText('Slider Mock')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Featured Products' })
    ).toBeInTheDocument();
    expect(screen.getByText('Footer Mock')).toBeInTheDocument();
  });

  it("navigates to the Products Page after clicking the 'View all products' button and returns to Home after cliking logo", async () => {
    render(
      <ProductsProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ProductsProvider>
    );

    const viewAllProducts = screen.getByRole('button', { name: 'View all products' });

    await userEvent.click(viewAllProducts);

    const logo = screen.getByTitle('WizeD logo');
    const sideMenu = screen.getByRole('heading', { name: 'CATEGORIES' });

    expect(logo).toBeInTheDocument();
    expect(sideMenu).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Products' })).toBeInTheDocument();

    await userEvent.click(logo);

    expect(screen.getByText('Slider Mock')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Featured Products' })
    ).toBeInTheDocument();
    expect(screen.getByText('Footer Mock')).toBeInTheDocument();
  });
});
