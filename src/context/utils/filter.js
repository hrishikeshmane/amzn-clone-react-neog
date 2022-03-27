const applyFilter = (data, state) => {
  const sortByPrice = (data) => {
    if (state.sortBy === "PRICE-LOW-TO-HIGH")
      return [...data].sort((item1, item2) => item1.price - item2.price);
    else if (state.sortBy === "PRICE-HIGH-TO-LOW")
      return [...data].sort((item1, item2) => item2.price - item1.price);
    else return data;
  };

  const filterByPriceRange = (data) =>
    data.filter((item) => item.price < state.price);

  const filterByCategory = (data) =>
    data.filter((item) => {
      if (state.category.includes(item.category)) return true;
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

const getTotal = (state) =>
  state.cart
    .reduce((acc, currentItem) => currentItem.price * currentItem.quantity, 0)
    .toFixed(2);

export { applyFilter, getTotal };
