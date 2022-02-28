import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  margin: 30px auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderIcon = styled(FaSpinner)`
  animation: ${rotate} 1s linear infinite;
`;

export { LoaderContainer, LoaderIcon };
