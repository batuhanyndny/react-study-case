import React from 'react';
import { useSelector } from 'react-redux';
import BasketLogo from '../../Shared/BasketLogo';
import { StyledCart } from '../style';
import { RootState } from '../../../redux';
const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <StyledCart>
      <BasketLogo /> ₺ {cart.price}
    </StyledCart>
  );
};

export default Cart;
