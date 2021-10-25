import styled from 'styled-components';
import { ActiveInterface } from '../Pagination/style';

export const StyledProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  max-width: 608px;
  gap: 15px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    max-width: 100%;
    margin: 0 5px;
  }
`;

export const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 1rem;
  padding: 20px;
  justify-content: center;
  gap: 24px;
  ${({ theme }) => theme.mediaQueries.mobile} {
    justify-content: space-evenly;
  }
`;

export const StyledTypeButton = styled.button<ActiveInterface>`
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  background-color: ${({ theme, active }) => (active ? theme.primary : theme.lightPurple)};
  color: ${({ theme, active }) => (active ? `#fff` : theme.primary)};
`;

export const TypeButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;
