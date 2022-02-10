import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  width: 100%;
  height: 80px;
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
  align-items: center;
  color: #082022;
  display: flex;
  padding: 2px;
  font-size: 20px;
  font-weight: 700;
  .brand-name {
    margin-right: 10px;
  }
  .brand-name-mobile {
    display: none;
  }
  @media (max-width: 576px) {
    .brand-name-mobile {
      display: block;
    }
  }
`;

const CartButton = styled.button`
  background-color: #faa897;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #f3bdb3;
  }
`;

export { HeaderWrapper, HeaderSection, LogoTitle, CartButton };
