import React from 'react';

import CategoryCard from '../CategoryCard';
import { useCategories } from '../../utils/hooks/useCategories';
import { CategoriesWrapper, Title, CategoriesList } from './Categories.styled';

function Categories() {
  const { data } = useCategories();

  return (
    <CategoriesWrapper>
      <Title>Categories</Title>
      <CategoriesList>
        {data.map((category) => (
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
