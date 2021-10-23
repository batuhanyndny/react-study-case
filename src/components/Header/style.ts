import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCart = styled.div`
  ${({ theme }) => theme.mediaQueries.mobile } {
    width: 4rem;
  }
  background-color: ${({ theme }) => theme.secondary};
  width: 8rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: absolute;
  right: 0;
`;
