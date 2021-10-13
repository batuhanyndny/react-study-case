import React from 'react';
import { StyledFooter, FooterItem, FooterAnchor } from './style';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterItem>© 2019 Market</FooterItem>
      <FooterItem>•</FooterItem>
      <FooterAnchor href="/">Privacy Policy</FooterAnchor>
    </StyledFooter>
  );
};

export default Footer;
