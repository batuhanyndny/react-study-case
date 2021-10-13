import styled from 'styled-components';
import { ActiveInterface } from '../Pagination/style';

export const StyledProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  max-width: 608px;
`;

export const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 1rem;
  padding: 20px;
  gap: 24px;
`;

export const StyledTypeButton = styled.button<ActiveInterface>`
  border: none;
  border-radius: 5px;
  background-color: ${({ theme, active }) => (active ? theme.primary : theme.lightPurple)};
  color: ${({ theme, active }) => (active ? `#fff` : theme.primary)};
`;

export const TypeButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;
