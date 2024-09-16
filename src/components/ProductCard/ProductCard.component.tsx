import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Product } from '../../utils/types';
import { ProductCardWrapper } from './ProductCard.styled';

function ProductCard({ id, img, name, price, category }: Product) {
  return (
    <ProductCardWrapper>
      <Link to={`/product/${id}`}>
        <img className="card-img" src={img} alt={name} />
        <div className="card-content">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{category}</p>
        </div>
      </Link>
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
