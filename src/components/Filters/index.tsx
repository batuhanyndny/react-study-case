import React from 'react';
import Brands from './components/Brands';
import Sorting from './components/Sorting';
import Tags from './components/Tags';
import { FilterContainer } from './style';

const Filters = () => {
  return (
    <FilterContainer>
      <Sorting />
      <Brands />
      <Tags />
    </FilterContainer>
  );
};

export default Filters;
