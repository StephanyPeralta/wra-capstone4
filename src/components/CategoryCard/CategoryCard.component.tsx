import React from 'react';
import { useHistory } from 'react-router-dom';

import { useProductsContext } from '../../providers/Products';
import { Category } from '../../utils/types';
import { CategoryWrapper, Image, Info, Title, Button } from './CategoryCard.styled';

function CategoryCard({ img, title }: Category) {
  const { addCategory } = useProductsContext();
  const { push } = useHistory();

  const handleCategory = () => {
    addCategory(title);
    push(`/products?category=${title}`);
  };

  return (
    <CategoryWrapper>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button onClick={handleCategory}>SHOP NOW</Button>
      </Info>
    </CategoryWrapper>
  );
}

export default CategoryCard;
