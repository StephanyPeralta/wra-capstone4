import styled from 'styled-components';

const ProductListWrapper = styled.div`
  display: flex;
  .products-container {
    width: 100%;
    height: calc(100vh - 80px);
    overflow-y: scroll;
    padding: 40px 60px 30px;
  }
  @media (max-width: 768px) {
    padding: 40px 40px 30px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    padding: 40px 20px 30px;
  }
`;

const ErrorAlert = styled.div`
  display: flex;
  color: darkred;
  align-items: center;
  background-color: #ffebee;
  border-radius: 10px;
  min-height: 50px;
  margin: 15px auto;
  padding: 6px 16px;
  width: 100%;
  .error-msg {
    padding: 8px 15px;
  }
`;

export { ProductListWrapper, ErrorAlert };