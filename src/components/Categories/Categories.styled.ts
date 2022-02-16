import styled from 'styled-components';

const CategoriesWrapper = styled.section`
  padding: 120px 60px;
  @media (max-width: 768px) {
    padding: 120px 40px;
  }
  @media (max-width: 576px) {
    padding: 120px 20px;
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

const CategoriesList = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`;

export { CategoriesWrapper, Title, CategoriesList };
