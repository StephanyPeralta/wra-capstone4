import React, { createContext, useContext, useReducer, useCallback } from 'react';

import productsReducer, { PRODUCTS_ACTIONS } from './productsReducer';
import { ProductsState } from '../../utils/types';

interface IProductsContext {
  activeCategories: string[];
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
}

interface ProductsProviderProps {
  children: React.ReactNode;
}

const initialState: ProductsState = {
  activeCategories: [],
};

const ProductsContext = createContext<IProductsContext>({
  activeCategories: [],
  addCategory: (category: string) => [],
  removeCategory: (category: string) => [],
});

function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(`Can't use "useProducts" without a "ProductsProvider"`);
  }
  return context;
}

function ProductsProvider({ children }: ProductsProviderProps) {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const addCategory = useCallback((category: string) => {
    dispatch({ type: PRODUCTS_ACTIONS.ADD_ACTIVE_CATEGORY, payload: { category } });
  }, []);

  const removeCategory = (category: string) => {
    dispatch({ type: PRODUCTS_ACTIONS.REMOVE_ACTIVE_CATEGORY, payload: { category } });
  };

  const value = {
    activeCategories: state.activeCategories,
    addCategory,
    removeCategory,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export { useProducts };
export default ProductsProvider;
