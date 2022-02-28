import styled from 'styled-components';

const ProductDetailWrapper = styled.div`
  height: calc(100vh - 80px);
  overflow-y: scroll;
  padding: 40px 60px;
  @media (max-width: 768px) {
    padding: 40px;
  }
  @media (max-width: 576px) {
    padding: 40px 20px;
  }

  .product-container {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .product-imgWrapper {
    flex: 1;
  }
  .product-image {
    border-radius: 6px;
    display: block;
    height: 80vh;
    width: 100%;
    object-fit: scale-down;
    @media (max-width: 768px) {
      height: 60vh;
    }
    @media (max-width: 576px) {
      height: 40vh;
    }
  }
  .product-infoWrapper {
    flex: 1;
    padding: 80px 0 0 50px;
    @media (max-width: 768px) {
      padding: 20px 0;
    }
  }
  .product-title {
    font-size: 32px;
    font-weight: 300;
    margin: 0 0 10px;
  }
  .product-category {
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 0 0 10px;
    text-transform: uppercase;
  }
  .product-label {
    color: #9d9d9d;
    font-size: 14px;
    font-weight: 400;
    margin: 0 0 15px;
  }
  .product-price {
    font-weight: 500;
    font-size: 24px;
    margin: 0 0 20px;
  }
  .product-description {
    margin: 0 0 20px;
  }
`;

const QuantitySelector = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #e3e3e3;
  margin: 0 40px 20px 0;
  white-space: nowrap;
  .selector-button {
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    display: inline-block;
  }
  .selector-input {
    width: 35px;
    font-size: 16px;
    text-align: center;
    letter-spacing: normal;
    background: transparent;
    border: none;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #8aada9;
  border-radius: 6px;
  background-color: transparent;
  color: #8aada9;
  cursor: pointer;
  font-weight: 700;
  width: 250px;
  transition: all 0.4s ease;
  &:hover {
    border: 2px solid #faa897;
    color: #faa897;
  }
`;

export { ProductDetailWrapper, Button, QuantitySelector };
