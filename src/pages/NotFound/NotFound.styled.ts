import styled from 'styled-components';

const ErrorWrapper = styled.div`
  height: 100vh;
  text-align: center;
  padding: 40px 60px;
  .error-container {
    max-width: 600px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    padding: 40px;
  }
  @media (max-width: 479px) {
    padding: 20px;
  }
`;

const ErrorImage = styled.img`
  display: block;
  width: 100%;
`;

const ErrorButton = styled.button`
  border-radius: 15px;
  border: none;
  background-color: #293d3f;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  max-width: 250px;
  margin: 18px;
  padding: 15px 30px;
  transition: all 0.3s ease-in-out;
`;

export { ErrorWrapper, ErrorImage, ErrorButton };
