import React from 'react';

import CategoryCard from '../CategoryCard';
import { useCategories } from '../../utils/hooks/useCategories';
import Loader from '../Loader';
import { CategoriesWrapper, Title, CategoriesList } from './Categories.styled';

function Categories() {
  const { categories, isLoading } = useCategories();

  if (isLoading) {
    return <Loader />;
  }

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
