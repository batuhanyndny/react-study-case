import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  font-size: 13px;
  padding-bottom: 25px;
  gap: 15px;
`;

export const FooterItem = styled.div`
  display: inline-block;
`;

export const FooterAnchor = styled.a`
  display: inline-block;
  text-decoration: none;
  
  &:visited {
    color: ${({ theme }) => theme.primary};
  }
`;
