import styled from 'styled-components';

export const StyledBasket = styled.div<{ visible: boolean }>`
  background-color: #fff;
  min-height: 321px;
  max-height: 100vh;
  height: inherit;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 5px;
  padding: 20px;
  border: 5px solid ${({ theme }) => theme.primary};
  gap: 15px;

  @media (max-width: 1280px) {
    max-height: inherit;
    display: none;
    ${({ visible }) => visible && 'display: block'};
  }
`;

export const BasketItemsContainer = styled.div`
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

export const StyledBasketItem = styled.div`
  height: 41px;
  min-width: 231px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.smokeGray};
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
  height: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
`;

export const BasketItemCountLabel = styled.input`
  border: none;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

export const TotalBasketPrice = styled.div`
  width: 92px;
  height: 52px;
  min-height: 52px;
  border: 5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const NoItemsInCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 245px;
`;
