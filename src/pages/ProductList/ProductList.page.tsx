import React, { useState, useMemo } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useProductsContext } from '../../providers/Products';
import { useProductList } from '../../utils/hooks/useProductList';
import { useCategories } from '../../utils/hooks/useCategories';
import SideMenu from '../../components/SideMenu';
import Products from '../../components/Products';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import { ProductListWrapper, ErrorAlert } from './ProductList.styled';

function ProductListPage() {
  const { activeCategories } = useProductsContext();
  const { categories } = useCategories();
  const { products, isLoading } = useProductList();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const memoProducts = useMemo(() => {
    const productsData = products.filter((item) => {
      if (activeCategories.length > 0) {
        return activeCategories.includes(item.category.toLowerCase());
      }
      return true;
    });

    return productsData;
  }, [activeCategories, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = memoProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <ProductListWrapper>
      <SideMenu categories={categories} />
      <div className="products-container">
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <Products title="Products" products={currentProducts} />
            {memoProducts.length === 0 && (
              <ErrorAlert>
                <FiAlertCircle />
                <span className="error-msg">Products not found</span>
              </ErrorAlert>
            )}
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={memoProducts?.length}
              paginate={paginate}
            />
          </>
        )}
      </div>
    </ProductListWrapper>
  );
}

export default ProductListPage;
