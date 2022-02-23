import React, { useMemo } from 'react';

import { useProductsContext } from '../../providers/Products';
import { useProducts } from '../../utils/hooks/useProducts';
import { useCategories } from '../../utils/hooks/useCategories';
import SideMenu from '../../components/SideMenu';
import Products from '../../components/Products';
import Loader from '../../components/Loader';
import { ProductListWrapper } from './ProductList.styled';

function ProductListPage() {
  const { activeCategories } = useProductsContext();
  const { data: categories } = useCategories();
  const { data: products, isLoading } = useProducts();

  const memoProducts = useMemo(() => {
    const productsData = products.filter((item) => {
      if (activeCategories.length > 0) {
        return activeCategories.includes(item.category.toLowerCase());
      }
      return true;
    });

    return productsData;
  }, [activeCategories, products]);

  return (
    <ProductListWrapper>
      <SideMenu categories={categories} />
      <div className="products-container">
        {isLoading && <Loader />}
        {!isLoading && <Products title="Products" products={memoProducts} />}
      </div>
    </ProductListWrapper>
  );
}

export default ProductListPage;
