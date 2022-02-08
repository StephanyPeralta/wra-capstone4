import styled from 'styled-components';

const ProductsWrapper = styled.div`
  background-color: #e7e9e8;
  padding: 90px 60px;
  @media (max-width: 768px) {
    padding: 90px 40px;
  }
  @media (max-width: 576px) {
    padding: 90px 20px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin: 0 auto 40px;
  @media (max-width: 380px) {
    font-size: 2.5rem;
  }
`;

const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export { ProductsWrapper, Title, ProductsList };
