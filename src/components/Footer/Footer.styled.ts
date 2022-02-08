import styled from 'styled-components';

const FooterWrapper = styled.footer`
  align-items: center;
  background-color: #293d3f;
  color: #fff;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  text-align: center;
  .footer-text {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    padding: 40px;
  }
  @media (max-width: 576px) {
    padding: 30px 20px;
  }
`;

const FooterContainer = styled.div`
  max-width: 1300px;
  margin: auto;
  position: relative;
  text-align: center;
  .footer-title {
    font-size: 22px;
    font-weight: 700;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
  grid-gap: 25px;
  max-width: 310px;
  text-align: center;
  margin: 40px auto 0;
`;

const FooterIcon = styled.a`
  background-color: #faa897;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const FooterLine = styled.div`
  background-color: gray;
  margin: 40px auto;
  height: 1px;
  width: 100%;
`;

export { FooterWrapper, FooterContainer, FooterGrid, FooterIcon, FooterLine };
