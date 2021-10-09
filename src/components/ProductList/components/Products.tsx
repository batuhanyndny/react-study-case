import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../ProductCard';
import { StyledProducts } from '../style';
import { RootState } from '../../../redux';
const Products = () => {
  const items = useSelector((state: RootState) => state.items);

  return (
    <StyledProducts>
      {items.slice(0, 20).map((product, idx) => {
        return <ProductCard product={product} key={idx} />;
      })}
    </StyledProducts>
  );
};

export default Products;
