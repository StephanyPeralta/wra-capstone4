import React from 'react';

import ProductCard from '../ProductCard';
import Pagination from '../../components/Pagination';
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
      {title === 'Products' && <Pagination />}
    </ProductsWrapperMain>
  );
}

export default Products;
