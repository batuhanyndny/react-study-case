import styled from 'styled-components';
import { CheckboxInterface, LabelInterface } from '.';

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const StyledCheckboxBoxSpan = styled.span`
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

export const StyledCheckbox = styled.input.attrs((props: CheckboxInterface) => ({
  type: 'checkbox',
  id: props.id,
  name: props.name,
  value: props.value,
}))<CheckboxInterface>`
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

export const StyledLabel = styled.label.attrs((props: LabelInterface) => ({
  for: props.for,
}))<LabelInterface>`
  font-size: 14px;
`;
