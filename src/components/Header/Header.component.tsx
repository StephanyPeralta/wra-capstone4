import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Search from '../Search';
import { HeaderWrapper, LogoTitle, HeaderSection } from './Header.styled';

function Header() {
  return (
    <HeaderWrapper data-testid="header">
      <HeaderSection>
        <LogoTitle to="/">
          <span className="brand-name hidden-mobile">WIZE Designs</span>
          <span className="brand-name-mobile">WD</span>
        </LogoTitle>
      </HeaderSection>
      <HeaderSection>
        <Search />
        <div className="cart-button">
          <AiOutlineShoppingCart size={27} />
        </div>
      </HeaderSection>
    </HeaderWrapper>
  );
}

export default Header;
