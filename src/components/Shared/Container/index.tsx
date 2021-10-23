import styled from 'styled-components';

interface ContainerProps {
  flex?: boolean;
  center?: boolean;
  between?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: ${({ flex }) => (flex ? 'flex' : 'block')};

  ${({ center }) =>
    center &&
    `
    justify-content: center;
    align-items: center;
  `}

  ${({ between }) =>
    between &&
    `
    justify-content: space-evenly;
  `}

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }

  ${({ theme }) => theme.mediaQueries.mobile } {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Container;
