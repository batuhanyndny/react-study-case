import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${({ theme }) => theme.mediaQueries.mobile } {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 100%;
  }
`;

export const FilterContainerLabel = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.gray};

  ${({ theme }) => theme.mediaQueries.mobile } {
    height: 2rem;
    border: 1px solid ${({ theme }) => theme.gray};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

export const FilterCheckboxContainer = styled.div`
  height: 142px;
  display: flex;
  flex-direction: column;
  /* gap: 15px; */
  overflow: scroll;
  padding: 0 0 0 5px;
  & > * {
    margin-bottom: 10px;
  }

  ${({ theme }) => theme.mediaQueries.mobile } {
    height: auto;
  }
`;

export const FilterContainerContent = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 10px;

  ${({ theme }) => theme.mediaQueries.mobile } {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    z-index: 1;
  }
`;

export const FilterHOCNav = styled.div`
  ${({ theme }) => theme.mediaQueries.mobile } {
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    height: 2rem;
    min-height: 2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.gray};

    & > span {
      position: absolute;
      top: 5px;
      left: 10px;
      height: 20px;
      width: 20px;

      &::before,
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 18px;
        width: 2px;
        content: ' ';
        background-color: #fff;
        border-radius: 5px;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
`;

export const FilterHOCContent = styled.div`
  & > * {
    margin-bottom: 10px;
  }

  ${({ theme }) => theme.mediaQueries.mobile } {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
