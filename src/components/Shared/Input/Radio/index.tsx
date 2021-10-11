import React, { FC } from 'react';
import { InputContainer, StyledRadio, StyledRadioSpan, StyledLabel } from '../style';
import { IInput } from '../';

const Radiobox: FC<IInput> = ({ label, id, name, value, selectFn }) => {
  return (
    <InputContainer gap={10}>
      <StyledRadio label={label} id={id} name={name} value={value} onChange={selectFn} />
      <StyledRadioSpan>
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 1L3.5 6L1 3.72727"
            stroke="#1EA4CE"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StyledRadioSpan>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </InputContainer>
  );
};

export default Radiobox;
