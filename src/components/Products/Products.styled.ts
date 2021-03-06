import styled from 'styled-components';

const ProductsWrapperH = styled.section`
  background-color: #f6f1ed;
  padding: 90px 60px 30px;
  @media (max-width: 768px) {
    padding: 90px 40px 30px;
  }
  @media (max-width: 576px) {
    padding: 90px 20px 30px;
    text-align: center;
  }
`;

const ProductsWrapperPL = styled(ProductsWrapperH)`
  background-color: transparent;
  overflow-y: scroll;
  width: 100%;
  padding: 40px 60px 100px;
  @media (max-width: 768px) {
    padding: 40px 40px 100px;
  }
  @media (max-width: 576px) {
    padding: 40px 20px 100px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;
  margin: 0 auto 40px;
  @media (max-width: 380px) {
    font-size: 2.4rem;
  }
`;

const ProductsGrid = styled.div`
  margin: 0 0 60px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media (max-width: 440px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

export { ProductsWrapperH, ProductsWrapperPL, Title, ProductsGrid };
