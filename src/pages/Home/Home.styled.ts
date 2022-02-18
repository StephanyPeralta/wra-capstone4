import styled from 'styled-components';

const HomeWrapper = styled.div`
  padding: 0;
  .button-wrapper {
    background-color: #f6f1ed;
    padding: 0 60px 90px;
    @media (max-width: 768px) {
      padding: 0 40px 90px;
    }
    @media (max-width: 576px) {
      padding: 0 20px 90px;
    }
  }
`;

const Button = styled.button`
  background-color: #faa897;
  border: none;
  border-radius: 6px;
  box-shadow: inset 0 0 0 0 #8aada9;
  color: #082022;
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 700;
  max-width: 250px;
  margin: 0 auto 40px;
  padding: 18px 30px;
  transition: all 0.4s ease;
  &:hover {
    box-shadow: inset 250px 0 0 0 #8aada9;
    color: #fff;
  }
`;

const InfoAlert = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffebee;
  border-radius: 10px;
  min-height: 50px;
  margin: 40px auto;
  padding: 10px 16px;
  max-width: 630px;
`;

const InfoSearch = styled(InfoAlert)`
  background-color: #43a2ae;
`;

export { HomeWrapper, Button, InfoAlert, InfoSearch };
