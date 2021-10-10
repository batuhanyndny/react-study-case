import React, { FC } from 'react';
import { CheckboxContainer, StyledCheckbox, StyledCheckboxBoxSpan, StyledLabel } from './style';
export interface CheckboxInterface {
  label: string;
  id: string;
  name: string;
  value: string;
}

export interface LabelInterface {
  for: string;
}

const Checkbox: FC<CheckboxInterface> = ({ label, id, name, value }) => {
  return (
    <CheckboxContainer>
      <StyledCheckbox label={label} id={id} name={name} value={value} />
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
      <StyledLabel for={id}>{label}</StyledLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
