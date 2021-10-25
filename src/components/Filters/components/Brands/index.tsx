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

const Brands = () => {
  const { brands } = useSelector((state: RootState) => state.items);
  const { filters } = useSelector((state: RootState) => state.filters);

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
        cypressLabel: 'brands',
        Label: 'Brands',
        Content: (
          <>
            <TextInput
              name="search-brand"
              id="search-brand"
              placeholder="Search brand"
              selectFn={(e) => {
                let value = e.currentTarget.value;
                debounce(() => {
                  setText(value);
                }, 500)();
              }}
            />
            <FilterCheckboxContainer>
              {brands
                .filter((brand) => brand.name.toLowerCase().includes(text))
                .map((brand) => {
                  return (
                    <Checkbox
                      key={brand.name}
                      label={brand.name}
                      id={brand.name}
                      name={brand.name}
                      value={brand.name}
                      selectFn={addFilterCallback}
                      selected={filters.includes(brand.name)}
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

export default Brands;
