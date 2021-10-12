import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../ProductCard';
import { StyledProducts } from '../style';
import { RootState } from '../../../redux';
import { PER_PAGE } from '../../../constants';
const Products = () => {
  const itemsState = useSelector((state: RootState) => state.items);
  const pagination = useSelector((state: RootState) => state.pagination);

  return (
    <StyledProducts>
      {itemsState.items
        .slice((pagination.page - 1) * PER_PAGE, (pagination.page - 1) * PER_PAGE + PER_PAGE)
        .map((product, idx) => {
          return <ProductCard product={product} key={idx} />;
        })}
    </StyledProducts>
  );
};

export default Products;
