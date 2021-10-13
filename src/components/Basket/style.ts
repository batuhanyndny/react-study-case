import styled from 'styled-components';

export const StyledBasket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 20px;
  border: 5px solid ${({ theme }) => theme.primary};
`;

export const StyledBasketItem = styled.div`
  height: 41px;
  width: 231px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BasketItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasketItemTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
`;

export const BasketItemPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: ${({ theme }) => theme.primary};
`;

export const BasketItemCountContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
`;

export const BasketItemCountButton = styled.button`
  border: none;
  display: flex;
  font-size: 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
`;

export const BasketItemCountLabel = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  font-weight: bold;
`;
