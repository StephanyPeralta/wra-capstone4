import styled from 'styled-components';

const ProductCardWrapper = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  //   height: 360px;
  margin: 15px;
  padding: 20px;
  transition: all 0.3s ease-in-out;

  .card-link {
    cursor: pointer;
  }
  .card-img {
    background-color: #fff;
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 30vh;
  }
  .card-content {
    padding: 5px 0 0;
  }
  .card-title {
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    margin: 0;
  }
  .card-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 0;
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
`;

export { ProductCardWrapper };
