import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';

function Router() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Router;
