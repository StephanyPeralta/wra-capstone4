import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useProduct } from '../../utils/hooks/useProduct';
import Loader from '../../components/Loader';
import { ProductDetailWrapper, Button, QuantitySelector } from './ProductDetail.styled';
// import { Product } from '../../utils/types';

interface ProductPageParams {
  productId: string;
}

function ProductDetail() {
  let { productId } = useParams<ProductPageParams>();
  const { product, isLoading } = useProduct(productId);
  const [count, setCount] = useState(1);

  const { name, description, price, img, category, sku } = product;

  const handleAddCount = () => {
    setCount(count + 1);
  };
  const handleSubtractCount = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  if (isLoading) {
    return (
      <ProductDetailWrapper>
        <Loader />
      </ProductDetailWrapper>
    );
  }

  return (
    <ProductDetailWrapper>
      <div className="product-container">
        <div className="product-imgWrapper">
          <img className="product-image" src={img} alt={name} />
        </div>
        <div className="product-infoWrapper">
          <h1 className="product-title">{name}</h1>
          <h2 className="product-category">{category}</h2>
          <p className="product-label">SKU: {sku}</p>
          <p className="product-price">$ {price}</p>
          <p className="product-description">{description}</p>
          <div>
            <QuantitySelector>
              <span className="selector-button" onClick={handleSubtractCount}>
                -
              </span>
              <input
                className="selector-input"
                type="text"
                onChange={(e) => e.target.value}
                value={count}
              />
              <span className="selector-button" onClick={handleAddCount}>
                +
              </span>
            </QuantitySelector>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </ProductDetailWrapper>
  );
}

export default ProductDetail;
