import styled from 'styled-components';

const ProductsWrapper = styled.div`
  background-color: #f6f1ed;
  padding: 90px 60px;
  @media (max-width: 768px) {
    padding: 90px 40px;
  }
  @media (max-width: 576px) {
    padding: 90px 20px;
    text-align: center;
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
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media (max-width: 440px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

export { ProductsWrapper, Title, ProductsList };
