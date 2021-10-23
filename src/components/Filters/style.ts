import styled from 'styled-components';

export const FilterContainer = styled.div`
  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 3rem;
  }

  width: 296px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FilterContainerLabel = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.gray};
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
`;

export const FilterContainerContent = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 10px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }
`;

export const FilterHOCNav = styled.div`
  ${({ theme }) => theme.mediaQueries.mobile} {
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const FilterHOCContent = styled.div`
  & > * {
    margin-bottom: 10px;
  }
  
  ${({ theme }) => theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 10px;
  }
`;
