import React, { useState, useEffect } from 'react';

import CategoryCard from '../CategoryCard';
import productCategories from '../../mocks/en-us/product-categories.json';
import { Category } from '../../utils/types';
import { CategoriesWrapper, Title, CategoriesList } from './Categories.styled';

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const data = productCategories.results;

    const getCategories = data.map((item) => {
      const id = item.id;
      const title = item.data.name;
      const img = item.data.main_image.url;
      return {
        id,
        title,
        img,
      };
    });
    setCategories(getCategories);
  }, []);

  return (
    <CategoriesWrapper>
      <Title>Categories</Title>
      <CategoriesList>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            img={category.img}
            title={category.title}
          />
        ))}
      </CategoriesList>
    </CategoriesWrapper>
  );
}

export default Categories;
