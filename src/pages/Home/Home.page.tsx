import React from 'react';
import { useHistory } from 'react-router-dom';

import { useFeatProducts } from '../../utils/hooks/useFeatProducts';
import Slider from '../../components/Slider';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import { HomeWrapper, Button } from './Home.styled';
import Loader from '../../components/Loader';

function HomePage() {
  const { data, isLoading } = useFeatProducts();
  const { push } = useHistory();

  return (
    <HomeWrapper>
      <Slider />
      <Categories />
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Products title="Featured Products" products={data} />
          <div className="button-wrapper">
            <Button onClick={() => push('/products')}>View all products</Button>
          </div>
        </>
      )}
    </HomeWrapper>
  );
}

export default HomePage;
