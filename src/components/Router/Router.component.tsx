import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import ProductListPage from '../../pages/ProductList';
import NotFound from '../../pages/NotFound';

function Router() {
  return (
    <Layout>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <HomePage />
        </Route>
        <Route exact path="/products">
          <ProductListPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Router;
