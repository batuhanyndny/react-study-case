import React from 'react';
import { BasketItemsContainer, NoItemsInCart, StyledBasket, TotalBasketPrice } from './style';
import BasketItem from './components/BasketItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const Basket = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <StyledBasket>
      <BasketItemsContainer>
        {cart.products.length > 0 ? (
          Array.from(new Set(cart.products))
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((product, idx) => <BasketItem key={idx} item={product} />)
        ) : (
          <NoItemsInCart>Cart is empty</NoItemsInCart>
        )}
      </BasketItemsContainer>
      <TotalBasketPrice>₺ {cart.price}</TotalBasketPrice>
    </StyledBasket>
  );
};

export default Basket;
