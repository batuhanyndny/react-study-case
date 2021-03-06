import React, { useMemo } from 'react';
import ArrowIcon from '../Shared/Arrow';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import {
  PageNumber,
  PageNumberContainer,
  PaginationButton,
  PaginationContainer,
  PaginationDots,
  StyledPagination,
} from './style';
import { breakpoints, PER_PAGE } from '../../constants';
import { setPage } from '../../redux/ducks/pagination';
import useWindowSize from '../../utils/useWindowSize';

const Pagination = () => {
  const pagination = useSelector((state: RootState) => state.pagination);
  const dispatch = useDispatch();
  const [w] = useWindowSize();

  const maxPageCount = useMemo(() => {
    return Math.round(pagination.itemCount / PER_PAGE);
  }, [pagination.itemCount]);

  const pages = useMemo(() => {
    return Array.from({ length: maxPageCount }, (_, i) => i + 1);
  }, [maxPageCount]);

  return (
    <PaginationContainer>
      <StyledPagination>
        <PaginationButton
          active={pagination.page !== 1}
          disabled={pagination.page === 1}
          onClick={() => {
            dispatch(setPage(pagination.page - 1));
          }}
        >
          <ArrowIcon active={pagination.page !== 1} />
          Prev
        </PaginationButton>
        <PageNumberContainer>
          {pages.map((pageNumber, idx) => {
            if ([pages[0]].includes(pageNumber))
              return (
                <PageNumber
                  key={idx}
                  onClick={() => {
                    dispatch(setPage(pageNumber));
                  }}
                  active={pagination.page === pageNumber}
                >
                  {pageNumber}
                </PageNumber>
              );
            if (pagination.page > 4 && idx === 2 && w! > breakpoints.mobile) {
              return <PaginationDots key={idx}>...</PaginationDots>;
            }
            if (pagination.page - 1 <= pageNumber && pageNumber <= pagination.page + 1) {
              return (
                <PageNumber
                  key={idx}
                  onClick={() => {
                    dispatch(setPage(pageNumber));
                  }}
                  active={pagination.page === pageNumber}
                >
                  {pageNumber}
                </PageNumber>
              );
            }
            if (pageNumber > pagination.page + 2 && idx === pagination.page + 2) {
              return <PaginationDots key={idx}>...</PaginationDots>;
            }
            if ([pages[pages.length - 1], pages[pages.length - 2]].includes(pageNumber))
              return (
                <PageNumber
                  key={idx}
                  onClick={() => {
                    dispatch(setPage(pageNumber));
                  }}
                  active={pagination.page === pageNumber}
                >
                  {pageNumber}
                </PageNumber>
              );
            return null;
          })}
        </PageNumberContainer>
        <PaginationButton
          active={pagination.page !== maxPageCount}
          disabled={pagination.page === maxPageCount}
          onClick={() => {
            dispatch(setPage(pagination.page + 1));
          }}
        >
          <ArrowIcon right active={pagination.page !== maxPageCount} />
          Next
        </PaginationButton>
      </StyledPagination>
    </PaginationContainer>
  );
};

export default Pagination;
