import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import Products from '../../components/Products';
import Loader from '../../components/Loader';
import { useProductsContext } from '../../providers/Products';
import { useProductsSearch } from '../../utils/hooks/useProductsSearch';
import { SearchWrapper, ErrorAlert } from './Search.styled';

function Search() {
  const { searchTerm } = useProductsContext();
  const { isLoading, products } = useProductsSearch(searchTerm);

  if (isLoading) {
    return (
      <SearchWrapper>
        <Loader />
      </SearchWrapper>
    );
  }

  return (
    <SearchWrapper>
      {!searchTerm || products.length === 0 ? (
        <ErrorAlert>
          <FiAlertCircle />
          <span className="error-msg">Products not found</span>
        </ErrorAlert>
      ) : (
        <Products title="Search Results" products={products} />
      )}
    </SearchWrapper>
  );
}

export default Search;
