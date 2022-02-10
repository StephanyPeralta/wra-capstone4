import React from 'react';

import { Category } from '../../utils/types';
import { CategoryWrapper, Image, Info, Title, Button } from './CategoryCard.styled';

function CategoryCard({ img, title }: Category) {
  return (
    <CategoryWrapper>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </CategoryWrapper>
  );
}

export default CategoryCard;
