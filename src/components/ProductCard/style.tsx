import styled from 'styled-components';

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 124px;
`;

export const ImageContainer = styled.div`
  width: 92px;
  height: 92px;
  border-radius: 12px;
  border: 1px solid #f3f0fe;
  padding: 16px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Price = styled.div`
  margin: 5px 0;
  color: ${({ theme }) => theme.primary};
  span {
    font-weight: bold;
  }
`;

export const Title = styled.div`
  color: #000;
  font-size: 14px;
  line-height: 20px;
  min-height: 40px;
  margin-bottom: 5px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Button = styled.button`
  border: none;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
`;
