import React from 'react';
import Title from '../Shared/Title';
import Products from './components/Products';
import { StyledProductListContainer } from './style';
const ProductList = () => {
  return (
    <StyledProductListContainer>
      <Title fontSize={1.25}>Products</Title>
      Selector here
      <Products />
    </StyledProductListContainer>
  );
};

export default ProductList;
