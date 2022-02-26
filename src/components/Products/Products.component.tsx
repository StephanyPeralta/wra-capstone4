import React from 'react';

import ProductCard from '../ProductCard';
import { Product } from '../../utils/types';
import {
  ProductsWrapperH,
  ProductsWrapperPL,
  Title,
  ProductsGrid,
} from './Products.styled';

interface ProductsProps {
  title: string;
  products: Product[];
}

function Products({ title, products }: ProductsProps) {
  const ProductsWrapperMain =
    title === 'Featured Products' ? ProductsWrapperH : ProductsWrapperPL;

  return (
    <ProductsWrapperMain>
      <Title>{title}</Title>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </ProductsWrapperMain>
  );
}

export default Products;
