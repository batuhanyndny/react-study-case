import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(w && w < breakpoints.mobile ? true : false);
  const [isOpen, setIsOpen] = React.useState(w && w < breakpoints.mobile ? false : true);

  const close = useCallback(() => {
    isMobile && setIsOpen(!isOpen);
  }, [isMobile, isOpen]);

  useEffect(() => {
    if (w && w > breakpoints.mobile) {
      setIsMobile(false);
      setIsOpen(true);
    } else if (w && w < breakpoints.mobile) {
      setIsMobile(true);
      setIsOpen(false);
    }
  }, [w]);

  return (
    <>
      <FilterContainer>
        <FilterContainerLabel onClick={close}>{children.Label}</FilterContainerLabel>
        {isOpen && (
          <FilterContainerContent>
            {isMobile && (
              <FilterHOCNav>
                <span onClick={close}></span>
                {children.Label}
              </FilterHOCNav>
            )}
            <FilterHOCContent>{children.Content}</FilterHOCContent>
          </FilterContainerContent>
        )}
      </FilterContainer>
    </>
  );
};

export default FilterHOC;
