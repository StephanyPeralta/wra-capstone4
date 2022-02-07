import styled from 'styled-components';

const LayoutWrapper = styled.div`
  height: 100%;
`;

const Container = styled.div`
  height: calc(100vh - 80px);
  overflow-y: scroll;
  padding: 20px 60px 20px;
  @media (max-width: 768px) {
    padding: 60px 40px 20px;
  }
  @media (max-width: 576px) {
    padding: 30px 20px 0;
  }
`;

export { LayoutWrapper, Container };
