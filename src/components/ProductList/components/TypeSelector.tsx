import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { addToFilters } from '../../../redux/ducks/filters';
import { StyledTypeButton, TypeButtonContainer } from '../style';

const FilterTypeButton: FC<{ title: string }> = ({ title }) => {
  const filters = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();
  return (
    <StyledTypeButton
      active={filters.itemType === title}
      onClick={() => {
        dispatch(addToFilters({ type: 'itemType', filter: title }));
      }}
    >
      {title}
    </StyledTypeButton>
  );
};

const TypeSelector = () => {
  return (
    <TypeButtonContainer>
      <FilterTypeButton title="mug"></FilterTypeButton>
      <FilterTypeButton title="shirt"></FilterTypeButton>
    </TypeButtonContainer>
  );
};

export default TypeSelector;
