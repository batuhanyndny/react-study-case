import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../ProductCard';
import { StyledProducts } from '../style';
import { RootState } from '../../../redux';
import { FILTERS, PER_PAGE } from '../../../constants';
import { IItem } from '../../../redux/ducks/items';
import { IFilterState } from '../../../redux/ducks/filters';
import { Sort } from '../../../redux/ducks/sort';
import { setItemCount } from '../../../redux/ducks/pagination';

const filterByItemType = (itemType: string, items: IItem[]) => {
  return items.filter((item) => item.itemType === itemType);
};

const isItemTagsFiltered = (tags: string[], filters: string[]): boolean => {
  const notPresent = tags.map((tag) => filters.includes(tag))?.every((bool) => bool === false);

  return !notPresent;
};

const filterItems = (items: IItem[], filterState: IFilterState) => {
  if (filterState.filters.length === 0) {
    return items;
  }
  return items.filter((item) => {
    return filterState.filters.includes(item.manufacturer) || isItemTagsFiltered(item.tags, filterState.filters);
  });
};

const sortItems = (filteredItems: IItem[], sortBy: Sort) => {
  switch (sortBy) {
    case FILTERS.PRICE_LOW_HIGH.value:
      return [...filteredItems].sort((a, b) => a.price - b.price);
    case FILTERS.PRICE_HIGH_LOW.value:
      return [...filteredItems].sort((a, b) => b.price - a.price);
    case FILTERS.DATE_NEW_OLD.value:
      return [...filteredItems].sort((a, b) => b.added - a.added);
    case FILTERS.DATE_OLD_NEW.value:
      return [...filteredItems].sort((a, b) => a.added - b.added);
    default:
      return filteredItems;
  }
};

const Products = () => {
  const { items } = useSelector((state: RootState) => state.items);
  const pagination = useSelector((state: RootState) => state.pagination);
  const filterState = useSelector((state: RootState) => state.filters);
  const { sort } = useSelector((state: RootState) => state.sort);

  const dispatch = useDispatch();

  const typeFilteredItems = useMemo(() => filterByItemType(filterState.itemType, items), [items, filterState.itemType]);
  const filteredItems = useMemo(() => filterItems(typeFilteredItems, filterState), [typeFilteredItems, filterState]);
  const sortedItems = useMemo(() => sortItems(filteredItems, sort), [filteredItems, sort]);

  useEffect(() => {
    if (sortedItems.length > 0) dispatch(setItemCount(sortedItems.length));
  }, [sortedItems, dispatch]);

  return (
    <StyledProducts>
      {sortedItems
        .slice((pagination.page - 1) * PER_PAGE, (pagination.page - 1) * PER_PAGE + PER_PAGE)
        .map((product, idx) => {
          return <ProductCard product={product} key={idx} />;
        })}
    </StyledProducts>
  );
};

export default Products;
