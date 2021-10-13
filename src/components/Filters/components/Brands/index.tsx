import React, { useCallback, useState } from 'react';
import { debounce } from 'debounce';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from '../../../Shared/Input/Text';
import { FilterCheckboxContainer, FilterContainer, FilterContainerContent, FilterContainerLabel } from '../../style';
import { RootState } from '../../../../redux';
import { Checkbox } from '../../../Shared/Input';
import { addToFilters, removeFromFilters } from '../../../../redux/ducks/filters';

const Brands = () => {
  const { brands } = useSelector((state: RootState) => state.items);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addFilterCallback = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget.checked) dispatch(addToFilters({ type: 'filter', filter: event.currentTarget.value }));
      else dispatch(removeFromFilters({ type: 'filter', filter: event.currentTarget.value }));
    },
    [dispatch],
  );

  return (
    <FilterContainer>
      <FilterContainerLabel>Brands</FilterContainerLabel>
      <FilterContainerContent>
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
                />
              );
            })}
        </FilterCheckboxContainer>
      </FilterContainerContent>
    </FilterContainer>
  );
};

export default Brands;
