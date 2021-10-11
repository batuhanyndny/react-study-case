import React from 'react';
import Brands from './components/Brands';
import Sorting from './components/Sorting';
import { FilterContainer } from './style';

const Filters = () => {
  return (
    <FilterContainer>
      <Sorting />
      <Brands />
    </FilterContainer>
  );
};

export default Filters;
