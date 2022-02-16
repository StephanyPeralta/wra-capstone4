import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

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

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  margin: 90px auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled(FaSpinner)`
  animation: ${rotate} 1s linear infinite;
`;

export { ProductListWrapper, LoaderContainer, Loader };
