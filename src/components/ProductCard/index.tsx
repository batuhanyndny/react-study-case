import React, { FC } from 'react';
import { StyledProductCard, ImageContainer, Price, Title, Button } from './style';
import { IItem } from '../../redux/ducks/items';
import { addToCart } from '../../redux/ducks/cart';
import { useDispatch } from 'react-redux';

const ProductCard: FC<{ product: IItem }> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <StyledProductCard data-cy="product-card">
      <ImageContainer>
        <img alt="product" src="https://via.placeholder.com/92"></img>
      </ImageContainer>
      <Price>
        ₺ <span>{product.price}</span>
      </Price>
      <Title>{product.name}</Title>
      <Button
        data-cy="add-to-cart"
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add
      </Button>
    </StyledProductCard>
  );
};

export default ProductCard;
