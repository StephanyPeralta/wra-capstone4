import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import SearchPage from '../../pages/Search';
import ProductListPage from '../../pages/ProductList';
import ProductDetailPage from '../../pages/ProductDetail';
import NotFound from '../../pages/NotFound';

function Router() {
  return (
    <Layout>
      <Switch>
        <Route exact path={['/', '/home']}>
          <HomePage />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path={['/products', '/products?category=:category']}>
          <ProductListPage />
        </Route>
        <Route exact path="/product/:productId">
          <ProductDetailPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Router;
