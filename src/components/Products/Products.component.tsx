import React, { useState, useEffect } from 'react';

import ProductCard from '../ProductCard';
import featuredProducts from '../../mocks/en-us/featured-products.json';
import { Product } from '../../utils/types';
import { ProductsWrapper, Title, ProductsList } from './Products.styled';

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const data = featuredProducts.results;

    const getProducts = data.map((item) => {
      const id = item.id;
      const name = item.data.name;
      const price = item.data.price;
      const img = item.data.mainimage.url;
      return {
        id,
        name,
        price,
        img,
      };
    });
    setProducts(getProducts);
  }, []);

  return (
    <ProductsWrapper>
      <Title>Featured Products</Title>
      <ProductsList>
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ProductsList>
    </ProductsWrapper>
  );
}

export default Products;
