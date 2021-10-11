import React from 'react';
import TextInput from '../../../Shared/Input/Text';
import { FilterContainer, FilterContainerContent, FilterContainerLabel } from '../../style';

const Brands = () => {
  return (
    <FilterContainer>
      <FilterContainerLabel>Brands</FilterContainerLabel>
      <FilterContainerContent>
        <TextInput name="search-brand" id="search-brand" placeholder="Search brand" />
      </FilterContainerContent>
    </FilterContainer>
  );
};

export default Brands;
