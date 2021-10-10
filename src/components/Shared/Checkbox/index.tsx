import React, { FC } from 'react';
import styled from 'styled-components';

interface CheckboxInterface {
  label: string;
  id: string;
  name: string;
  value: string;
}

interface LabelInterface {
  for: string;
}

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const StyledCheckboxBoxSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px -3px ${({ theme }) => theme.purple};

  svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
  }
`;

const StyledCheckbox = styled.input.attrs((props: CheckboxInterface) => ({
  type: 'checkbox',
  id: props.id,
  name: props.name,
  value: props.value,
}))<CheckboxInterface>`
  opacity: 0;
  width: 1em;
  height: 1em;
  position: absolute;
  left: 0;
  z-index: 1;

  &:checked + ${StyledCheckboxBoxSpan} {
    background-color: ${({ theme }) => theme.primary};
    svg {
      transform: scale(1);
    }
  }
`;

const StyledLabel = styled.label.attrs((props: LabelInterface) => ({
  for: props.for,
}))<LabelInterface>`
  font-size: 14px;
`;

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
