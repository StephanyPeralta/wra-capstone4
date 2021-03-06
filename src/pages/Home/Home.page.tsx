import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Slider from '../../components/Slider';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import featuredProducts from '../../mocks/en-us/featured-products.json';
import { Product } from '../../utils/types';
import { HomeWrapper, Button } from './Home.styled';

const products = featuredProducts.results.map((item) => {
  const id = item.id;
  const name = item.data.name;
  const price = item.data.price;
  const img = item.data.mainimage.url;
  const category = item.data.category.slug;
  return {
    id,
    img,
    name,
    price,
    category,
  };
});

function HomePage() {
  const { push } = useHistory();
  const [featProducts ] = useState<Product[]>(products);

  return (
    <HomeWrapper>
      <Slider />
      <Categories />
      <Products title="Featured Products" products={featProducts} />
      <div className="button-wrapper">
        <Button onClick={() => push('/products')}>View all products</Button>
      </div>
    </HomeWrapper>
  );
}

export default HomePage;
