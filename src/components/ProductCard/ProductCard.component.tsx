import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Product } from '../../utils/types';
import { ProductCardWrapper } from './ProductCard.styled';

function ProductCard({ name, price, img }: Product) {
  return (
    <ProductCardWrapper>
      <div className="card-link">
        <img className="card-img" src={img} alt={name} />
        <div className="card-content">
          <h4 className="card-title">{name}</h4>
        </div>
      </div>
      <div className="card-flex">
        <button className="card-button" type="button" title="Add to cart">
          <AiOutlineShoppingCart size={20} />
        </button>
        <p className="card-price">${price}</p>
      </div>
    </ProductCardWrapper>
  );
}

export default ProductCard;
