import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

import { Product, ApiProductsData } from '../types';

interface IProducts {
  data: Product[];
  isLoading: boolean;
}

export function useProducts(): IProducts {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState<IProducts>(() => ({
    data: [],
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setProducts({ data: [], isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&pageSize=30`,
          {
            signal: controller.signal,
          }
        );
        const data: ApiProductsData = await response.json();

        const productsData = data.results.map((item) => {
          const id = item.id;
          const name = item.data.name;
          const price = item.data.price;
          const img = item.data.mainimage.url;
          const category = item.data.category.slug;
          return {
            id,
            img,
            name,
            price,
            category,
          };
        });

        setProducts({ data: productsData, isLoading: false });
      } catch (err) {
        setProducts({ data: [], isLoading: false });
        console.error(err);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return products;
}
