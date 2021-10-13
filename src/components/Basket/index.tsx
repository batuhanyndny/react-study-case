import React from 'react';
import { StyledBasket } from './style';
import BasketItem from './components/BasketItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
const Basket = () => {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <StyledBasket>
      {cart.products.map((product, idx) => (
        <BasketItem key={idx} item={product} />
      ))}
    </StyledBasket>
  );
};

export default Basket;
