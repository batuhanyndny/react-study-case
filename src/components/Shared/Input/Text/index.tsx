import React, { FC } from 'react';
import { IInput } from '..';
import { StyledText } from '../style';

const TextInput: FC<IInput> = ({ id, name, placeholder }) => {
  return <StyledText name={name} id={id} placeholder={placeholder} />;
};

export default TextInput;
