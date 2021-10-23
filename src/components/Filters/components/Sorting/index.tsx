import React, { useCallback } from 'react';
import { Radiobox } from '../../../Shared/Input/';
import { FILTERS } from '../../../../constants';
import { useDispatch } from 'react-redux';
import { selectSort } from '../../../../redux/ducks/sort';
import FilterHOC from '../FilterHOC';

const Sorting = () => {
  const dispatch = useDispatch();

  const selectSortCallback = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      dispatch(selectSort(event.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <FilterHOC>
      {{
        Label: 'Sorting',
        Content: Object.entries(FILTERS).map(([key, { label, value }], idx) => (
          <Radiobox label={label} name="sorting" id={key} key={idx} value={value} selectFn={selectSortCallback} />
        )),
      }}
    </FilterHOC>
  );
};

export default Sorting;
