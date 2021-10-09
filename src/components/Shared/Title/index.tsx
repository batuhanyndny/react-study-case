import styled from 'styled-components';

interface TitleProps {
  bold?: boolean;
  fontSize?: number;
}

const Title = styled.div<TitleProps>`
  color: ${({ theme }) => theme.title};
  font-size: ${({ fontSize }) => `${fontSize || 1}rem`};
  ${({ bold }) => bold && `font-weight: bold;`}
`;

export default Title;
