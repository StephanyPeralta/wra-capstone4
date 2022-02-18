import React, { useEffect, useMemo, useState } from 'react';

import { useProducts } from '../../providers/Products';
import SideMenu from '../../components/SideMenu';
import Products from '../../components/Products';
import productCategories from '../../mocks/en-us/product-categories.json';
import productList from '../../mocks/en-us/products.json';
import { ProductListWrapper, LoaderContainer, Loader } from './ProductList.styled';

function ProductListPage() {
  const { activeCategories } = useProducts();
  const [isLoading, setIsLoading] = useState(true);

  const memoCategories = useMemo(() => {
    const data = productCategories.results;

    const categories = data.map((item) => {
      const id = item.id;
      const title = item.data.name;
      const img = item.data.main_image.url;
      return {
        id,
        title,
        img,
      };
    });

    return categories;
  }, []);

  const memoProducts = useMemo(() => {
    const data = productList.results;

    const products = data
      .map((item) => {
        const id = item.id;
        const img = item.data.mainimage.url;
        const name = item.data.name;
        const price = item.data.price;
        const category = item.data.category.slug;
        return {
          id,
          img,
          name,
          price,
          category,
        };
      })
      .filter((item) => {
        if (activeCategories.length > 0) {
          return activeCategories.includes(item.category.toLowerCase());
        }
        return true;
      });

    return products;
  }, [activeCategories]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ProductListWrapper>
      <SideMenu categories={memoCategories} />
      <div className="products-container">
        {isLoading && (
          <LoaderContainer data-testid="loader-icon2">
            <Loader size={60} />
          </LoaderContainer>
        )}
        {!isLoading && <Products title="Products" products={memoProducts} />}
      </div>
    </ProductListWrapper>
  );
}

export default ProductListPage;
