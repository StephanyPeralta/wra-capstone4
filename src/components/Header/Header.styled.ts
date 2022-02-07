import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  width: 100%;
  height: 80px;
  // position: sticky;
  // top: 0;
  // z-index: 100;
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  .cart-button {
    background-color: #FAA897;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #F3BDB3;
    }
  }
  @media (max-width: 768px) {
    .hidden-tablet {
      display: none;
    }
  }
  @media (max-width: 576px) {
    .hidden-mobile {
      display: none;
    }
`;

const LogoTitle = styled(Link)`
  display: flex;
  align-items: center;
  padding: 2px;
  font-size: 22px;
  font-weight: 700;
  .brand-name {
    margin-right: 10px;
  }
  .brand-name-mobile {
    margin-left: 5px;
    display: none;
  }
  @media (max-width: 576px) {
    .brand-name-mobile {
      display: block;
    }
  }
`;

export { HeaderWrapper, HeaderSection, LogoTitle };
