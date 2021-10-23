import styled from 'styled-components';

export interface ActiveInterface {
  active?: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
`;

export const StyledPagination = styled.div`
  display: flex;
  min-width: 535px;
  justify-content: space-between;
  ${({ theme }) => theme.mediaQueries.mobile} {
    min-width: auto;
  }
`;

export const PaginationButton = styled.button<ActiveInterface>`
  cursor: pointer;
  font-size: 14px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  color: ${({ active, theme }) => (active ? theme.primary : theme.gray)};
`;

export const PaginationDots = styled.div`
  display: flex;
  width: 32px;
  min-width: 32px;
  height: 40px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageNumberContainer = styled.div`
  overflow: hidden;
  display: flex;
  min-width: 333px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  ${({ theme }) => theme.mediaQueries.mobile} {
    min-width: auto;
  }
`;

export const PageNumber = styled.div<ActiveInterface>`
  width: 32px;
  min-width: 32px;
  height: 40px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? '#fff' : theme.gray)};
  background-color: ${({ theme, active }) => (active ? theme.primary : 'transparent')};
`;
