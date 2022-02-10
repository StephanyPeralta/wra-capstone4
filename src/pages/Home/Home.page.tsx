import React from 'react';

import Slider from '../../components/Slider';
import Categories from '../../components/Categories';
import Products from '../../components/Products';

function HomePage() {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
    </>
  );
}

export default HomePage;
