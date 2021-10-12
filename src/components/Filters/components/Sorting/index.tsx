import React, { useCallback } from 'react';
import { Radiobox } from '../../../Shared/Input/';
import { FilterContainer, FilterContainerContent, FilterContainerLabel } from '../../style';
import { FILTERS } from '../../../../constants';
import { useDispatch } from 'react-redux';
import { selectSort } from '../../../../redux/ducks/sort';

const Sorting = () => {
  const dispatch = useDispatch();

  const selectSortCallback = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      dispatch(selectSort(event.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <FilterContainer>
      <FilterContainerLabel>Sorting</FilterContainerLabel>
      <FilterContainerContent>
        {Object.entries(FILTERS).map(([key, { label, value }], idx) => (
          <Radiobox label={label} name="sorting" id={key} key={idx} value={value} selectFn={selectSortCallback} />
        ))}
      </FilterContainerContent>
    </FilterContainer>
  );
};

export default Sorting;
