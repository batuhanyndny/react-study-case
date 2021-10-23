import React, { useCallback, useState } from 'react';
import { debounce } from 'debounce';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from '../../../Shared/Input/Text';
import { FilterCheckboxContainer } from '../../style';
import { RootState } from '../../../../redux';
import { Checkbox } from '../../../Shared/Input';
import { addToFilters, removeFromFilters } from '../../../../redux/ducks/filters';
import FilterHOC from '../FilterHOC';
import { setPage } from '../../../../redux/ducks/pagination';

const Tags = () => {
  const { tags } = useSelector((state: RootState) => state.items);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addFilterCallback = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget.checked) dispatch(addToFilters({ type: 'filter', filter: event.currentTarget.value }));
      else dispatch(removeFromFilters({ type: 'filter', filter: event.currentTarget.value }));
      dispatch(setPage(1));
    },
    [dispatch],
  );

  return (
    <FilterHOC>
      {{
        Label: 'Tags',
        Content: (
          <>
            <TextInput
              name="search-tag"
              id="search-tag"
              placeholder="Search tag"
              selectFn={(e) => {
                let value = e.currentTarget.value;
                debounce(() => {
                  setText(value);
                }, 500)();
              }}
            />
            <FilterCheckboxContainer>
              {tags
                .filter((tag) => tag.name.toLowerCase().includes(text))
                .map((tag) => {
                  return (
                    <Checkbox
                      key={tag.name}
                      label={tag.name}
                      id={tag.name}
                      name={tag.name}
                      value={tag.name}
                      selectFn={addFilterCallback}
                    />
                  );
                })}
            </FilterCheckboxContainer>
          </>
        ),
      }}
    </FilterHOC>
  );
};

export default Tags;
