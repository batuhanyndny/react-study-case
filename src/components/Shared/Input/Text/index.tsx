import React, { FC } from 'react';
import { IInput } from '..';
import { StyledText } from '../style';

const TextInput: FC<IInput> = ({ id, name, placeholder, selectFn }) => {
  return <StyledText name={name} id={id} placeholder={placeholder} onChange={selectFn} />;
};

export default TextInput;
