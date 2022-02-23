import styled from 'styled-components';

const ProductCardWrapper = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;
  margin: 10px;
  padding: 10px 15px 20px;
  transition: all 0.3s ease-in-out;

  .card-link {
    cursor: pointer;
  }
  .card-img {
    background-color: #fff;
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: 220px;
  }
  .card-content {
    padding: 8px 0 0;
    text-align: left;
  }
  .card-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    margin: 0 0 5px;
  }
  .card-text {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 2px;
    line-height: 22px;
    margin: 0;
    text-transform: uppercase;
  }
  .card-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 17px 0 0;
  }
  .card-price {
    margin: 0 0 0 10px;
    font-size: 16px;
    font-weight: 700;
    color: #d8a660;
  }
  .card-button {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 100px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    transition: all 0.3s ease;
    &:hover {
      background: #f3bdb3;
    }
  }
  @media (max-width: 440px) {
    margin: 10px 0;
  }
`;

export { ProductCardWrapper };
