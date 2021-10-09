import React from 'react';
import { StyledHeader } from './style';
import Logo from '../Shared/Logo';
import Cart from './components/Cart';
import Container from '../Shared/Container';

const Header = () => {
  return (
    <StyledHeader>
      <Container flex center>
        <Logo />
        <Cart />
      </Container>
    </StyledHeader>
  );
};

export default Header;
