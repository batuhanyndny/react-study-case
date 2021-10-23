import React, { FC } from 'react';
import { InputContainer, StyledCheckbox, StyledCheckboxBoxSpan, StyledLabel } from '../style';
import { IInput } from '../';

const Checkbox: FC<IInput> = ({ label, id, name, value, selectFn, selected }) => {
  return (
    <InputContainer>
      <StyledCheckbox
        label={label}
        id={id}
        name={name}
        value={value}
        onChange={selectFn}
        selected={selected}
        checked={selected}
      />
      <StyledCheckboxBoxSpan>
        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.6667 1L4.33333 8.33333L1 5"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StyledCheckboxBoxSpan>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </InputContainer>
  );
};

export default Checkbox;
