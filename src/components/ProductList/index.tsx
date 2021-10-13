import React from 'react';
import Pagination from '../Pagination';
import Title from '../Shared/Title';
import Products from './components/Products';
import TypeSelector from './components/TypeSelector';
import { StyledProductListContainer } from './style';

const ProductList = () => {
  return (
    <StyledProductListContainer>
      <Title fontSize={1.25}>Products</Title>
      <TypeSelector />
      <Products />
      <Pagination />
    </StyledProductListContainer>
  );
};

export default ProductList;
