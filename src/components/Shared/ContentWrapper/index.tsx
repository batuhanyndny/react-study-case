import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  position: relative;
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: 0.25rem 0;
  }
`;

export default ContentWrapper;
