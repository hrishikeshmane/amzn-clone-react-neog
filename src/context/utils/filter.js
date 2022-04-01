const applyFilter = (data, productState) => {
  const sortByPrice = (data) => {
    if (productState.sortBy === "PRICE_LOW_TO_HIGH")
      return [...data].sort((item1, item2) => item1.price - item2.price);
    else if (productState.sortBy === "PRICE_HIGH_TO_LOW")
      return [...data].sort((item1, item2) => item2.price - item1.price);
    else return data;
  };

  const filterByPriceRange = (data) =>
    data.filter((item) => item.price < productState.price);

  const filterByCategory = (data) =>
    data.filter((item) => {
      if (productState.category.includes(item.category)) return true;
      else return false;
    });

  const _reduced = (f, g) => (arg) => g(f(arg));
  const pipe = (...fns) => fns.reduce(_reduced);

  const productList = pipe(
    sortByPrice,
    filterByPriceRange,
    filterByCategory
  )(data);

  return productList;
};

const getTotal = (productState) =>
  productState.cart
    .reduce((acc, currentItem) => currentItem.price * currentItem.quantity, 0)
    .toFixed(2);

export { applyFilter, getTotal };
