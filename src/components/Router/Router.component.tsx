import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';

function Router() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Router;
