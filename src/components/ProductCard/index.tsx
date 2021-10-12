import React, { FC } from 'react';
import { StyledProductCard, ImageContainer, Price, Title, Button } from './style';
import { IItem } from '../../redux/ducks/items';

const ProductCard: FC<{ product: IItem }> = ({ product }) => {
  return (
    <StyledProductCard>
      <ImageContainer>
        <img alt="product" src="https://via.placeholder.com/92"></img>
      </ImageContainer>
      <Price>
        ₺ <span>{product.price}</span>
      </Price>
      <Title>{product.name}</Title>
      <Button>Add</Button>
    </StyledProductCard>
  );
};

export default ProductCard;
