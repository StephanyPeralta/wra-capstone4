import React, { createContext, useContext, useReducer, useCallback } from 'react';

import productsReducer, { PRODUCTS_ACTIONS } from './productsReducer';
import { ProductsState } from '../../utils/types';

interface IProductsContext {
  searchTerm: string;
  activeCategories: string[];
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
  saveSearchTerm: (term: string) => void;
}

interface ProductsProviderProps {
  children: React.ReactNode;
}

const initialState: ProductsState = {
  searchTerm: '',
  activeCategories: [],
};

const ProductsContext = createContext<IProductsContext>({
  searchTerm: '',
  activeCategories: [],
  addCategory: (category: string) => [],
  removeCategory: (category: string) => [],
  saveSearchTerm: (term: string) => {},
});

function useProductsContext() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(`Can't use "useProductsContext" without a "ProductsProvider"`);
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

  const saveSearchTerm = (term: string) => {
    dispatch({
      type: PRODUCTS_ACTIONS.SET_SEARCH_TERM,
      payload: { searchTerm: term },
    });
  };

  const value = {
    searchTerm: state.searchTerm,
    activeCategories: state.activeCategories,
    addCategory,
    removeCategory,
    saveSearchTerm,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export { useProductsContext };
export default ProductsProvider;
