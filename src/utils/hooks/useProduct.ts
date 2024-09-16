import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

import { Product } from '../types';

type ProductResponse = Product | {};

interface IProduct {
  product: ProductResponse;
  isLoading: boolean;
}

export function useProduct(productId: string): IProduct {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [product, setProduct] = useState<IProduct>(() => ({
    product: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return;
    }

    const controller = new AbortController();

    async function getProduct() {
      try {
        setProduct({ product: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.id, "${productId}")]]`
          )}&lang=en-us`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        const item = data.results[0];

        const productData = {
          id: item.id,
          name: item.data.name,
          description: item.data.description[0].text,
          price: item.data.price,
          img: item.data.mainimage.url,
          category: item.data.category.slug,
          sku: item.data.sku,
        };

        console.log(productData);
        setProduct({ product: productData as ProductResponse, isLoading: false });
      } catch (err) {
        setProduct({ product: {}, isLoading: false });
      }
    }

    getProduct();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);

  return product;
}
