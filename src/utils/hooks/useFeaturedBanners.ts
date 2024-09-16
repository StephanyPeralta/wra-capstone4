import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

import { Banner, ApiBannersData } from '../types';

interface IFeatBanners {
  data: Banner[];
  isLoading: boolean;
}

export function useFeaturedBanners(): IFeatBanners {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState<IFeatBanners>(() => ({
    data: [],
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ data: [], isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "banner")]]'
          )}&lang=en-us&pageSize=5`,
          {
            signal: controller.signal,
          }
        );
        const data: ApiBannersData = await response.json();

        const featBanners = data.results.map((item) => {
          const id = item.id;
          const img = item.data.main_image.url;
          const title = item.data.title;
          const description = item.data.description[0].text;
          return {
            id,
            img,
            title,
            description,
          };
        });

        setFeaturedBanners({ data: featBanners, isLoading: false });
      } catch (err) {
        setFeaturedBanners({ data: [], isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredBanners;
}
