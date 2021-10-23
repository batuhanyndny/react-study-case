import styled from 'styled-components';
import { IInput, IInputContainer } from '.';

export const InputContainer = styled.div<IInputContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: ${({ gap }) => (gap ? `${gap}px` : `5px`)}; */
  width: max-content;
  position: relative;
`;

export const StyledCheckboxBoxSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px -3px ${({ theme }) => `${theme.purple}80`};

  svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
  }
`;

export const StyledCheckbox = styled.input.attrs((props: IInput) => ({
  type: 'checkbox',
  id: props.id,
  name: props.name,
  value: props.value,
}))<IInput>`
  opacity: 0;
  width: 22px;
  height: 22px;
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

export const StyledRadioSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.gray};
  svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
  }
`;

export const StyledRadio = styled.input.attrs((props: IInput) => ({
  type: 'radio',
  id: props.id,
  name: props.name,
  value: props.value,
}))<IInput>`
  opacity: 0;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 0;
  z-index: 1;

  &:checked + ${StyledRadioSpan} {
    border-color: ${({ theme }) => theme.primary};
    svg {
      transform: scale(1);
    }
  }
`;

export const StyledText = styled.input.attrs((props: IInput) => ({
  type: 'text',
  id: props.id,
  name: props.name,
}))<IInput>`
  height: 48px;
  min-height: 48px;
  border: 2px solid ${({ theme }) => theme.lighterGray};
  padding: 0 15px;
  ::placeholder {
    color: ${({ theme }) => theme.lightGray};
    opacity: 1;
  }
`;

export const StyledLabel = styled.label`
  margin-left: 10px;
  font-size: 14px;
`;
