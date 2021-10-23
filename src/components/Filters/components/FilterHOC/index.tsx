import React, { FC, ReactNode } from 'react';
import {
  FilterContainer,
  FilterContainerLabel,
  FilterContainerContent,
  FilterHOCNav,
  FilterHOCContent,
} from '../../style';
import useWindowSize from '../../../../utils/useWindowSize';
import { breakpoints } from '../../../../constants';

const FilterHOC: FC<{
  children: {
    Label: ReactNode;
    Content: ReactNode;
  };
}> = ({ children }) => {
  const [w] = useWindowSize();
  const [isOpen, setIsOpen] = React.useState(w && w < breakpoints.mobile ? false : true);

  return (
    <>
      <FilterContainer
        onClick={() => {
          w && w < breakpoints.mobile && setIsOpen(!isOpen);
        }}
      >
        <FilterContainerLabel>{children.Label}</FilterContainerLabel>
        {isOpen && (
          <FilterContainerContent>
            <FilterHOCNav>{children.Label}</FilterHOCNav>
            <FilterHOCContent>{children.Content}</FilterHOCContent>
          </FilterContainerContent>
        )}
      </FilterContainer>
    </>
  );
};

export default FilterHOC;
