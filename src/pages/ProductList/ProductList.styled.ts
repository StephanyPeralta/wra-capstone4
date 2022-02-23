import styled from 'styled-components';

const ProductListWrapper = styled.div`
  display: flex;
  .products-container {
    width: 100%;
    height: calc(100vh - 80px);
    overflow-y: scroll;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export { ProductListWrapper };
