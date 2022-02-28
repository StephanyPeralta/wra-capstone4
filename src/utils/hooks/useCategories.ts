import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

import { Category, ApiCategoriesData } from '../types';

interface ICategories {
  categories: Category[];
  isLoading: boolean;
}

export function useCategories(): ICategories {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [categories, setCategories] = useState<ICategories>(() => ({
    categories: [],
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getCategories() {
      try {
        setCategories({ categories: [], isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=30`,
          {
            signal: controller.signal,
          }
        );
        const data: ApiCategoriesData = await response.json();

        const categoriesData = data.results.map((item) => {
          const id = item.id;
          const title = item.data.name;
          const img = item.data.main_image.url;
          return {
            id,
            title,
            img,
          };
        });

        setCategories({ categories: categoriesData, isLoading: false });
      } catch (err) {
        setCategories({ categories: [], isLoading: false });
        console.error(err);
      }
    }

    getCategories();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return categories;
}
