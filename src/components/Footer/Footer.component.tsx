import React from 'react';
import { FiLinkedin, FiFacebook } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';

import {
  FooterWrapper,
  FooterContainer,
  FooterGrid,
  FooterIcon,
  FooterLine,
} from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <h3 className="footer-title">WIZE Designs</h3>
        <FooterGrid>
          <FooterIcon
            href="https://www.facebook.com/WizelineGlobal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook size={27} />
          </FooterIcon>

          <FooterIcon
            href="https://www.linkedin.com/company/wizeline/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={27} />
          </FooterIcon>

          <FooterIcon
            href="https://www.youtube.com/channel/UCPGzT4wecuWM0BH9mPiulXg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineYoutube size={27} />
          </FooterIcon>
        </FooterGrid>
      </FooterContainer>
      <FooterLine />
      <p className="footer-text">
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </p>
    </FooterWrapper>
  );
}

export default Footer;
