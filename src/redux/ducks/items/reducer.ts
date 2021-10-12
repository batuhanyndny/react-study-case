import { IItem, IItemIndex, IItemState } from '.';

const IndexItems = (items: IItem[]): IItemState => {
  const brands: IItemIndex[] = [];
  const tags: IItemIndex[] = [];

  items.forEach((item) => {
    // loop over tags and each item to relative tag array if tags is present
    if (item.tags.length > 0) {
      item.tags.forEach((tag) => {
        // search for tag
        let foundTag = tags.find((_tag) => _tag.name === tag);
        // add if its present
        if (foundTag) foundTag.items.push(item);
        // create tag
        else tags.push({ items: [item], name: tag });
      });
    }
    // add to relative manifacturer array
    let foundBrand = brands.find((_brand) => _brand.name === item.manufacturer);
    // add to brand array if it exists
    if (foundBrand) foundBrand.items.push(item);
    // create brand
    else brands.push({ name: item.manufacturer, items: [item] });
  });

  const priceLowHigh = [...items].sort((a, b) => a.price - b.price);
  const dateNewOld = [...items].sort((a, b) => b.added - a.added);

  return {
    items,
    brands,
    tags,
    sorted: {
      priceLowHigh,
      dateNewOld,
    },
  };
};

export const setItemsReducer = (items: IItem[]): IItemState => IndexItems(items);
