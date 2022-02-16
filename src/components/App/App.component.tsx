import React from 'react';

import ProductsProvider from '../../providers/Products';
import Router from '../Router';

function App() {
  return (
    <ProductsProvider>
      <Router />
    </ProductsProvider>
  );
}

export default App;
