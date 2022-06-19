const FilterReducer = (productState, action) => {
  switch (action.type) {
    case "PRICE_LOW_TO_HIGH":
      return { ...productState, sortBy: action.type };
    case "PRICE_HIGH_TO_LOW":
      return { ...productState, sortBy: action.type };
    case "CATEGORY":
      return {
        ...productState,
        category: productState.category.includes(action.payload)
          ? productState.category.filter(
              (category) => category !== action.payload
            )
          : [...productState.category, action.payload],
      };
    case "PRICE":
      return {
        ...productState,
        price: action.payload,
      };
    case "RATING":
      return {
        ...productState,
        rating: action.payload,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...productState,
        wishlist: [...productState.wishlist, action.payload].filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.id === value.id)
        ),
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...productState,
        wishlist: productState.wishlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "ADD_TO_CART":
      return {
        ...productState,
        cart: [...productState.cart, action.payload].filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.id === value.id)
        ),
      };
    case "UPDATE_CART":
      return {
        ...productState,
        cart: [
          ...productState.cart.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
      };
    case "ADD_ITEM_QUANTITY_CART":
      return {
        ...productState,
        cart: [
          ...productState.cart.map((item) => {
            if (item.id !== action.payload.id) {
              return item;
            } else {
              return { ...item, quantity: item.quantity + 1 };
            }
          }),
        ],
      };
    case "SUB_ITEM_QUANTITY_CART":
      return {
        ...productState,
        cart: [
          ...productState.cart.map((item) => {
            if (item.id !== action.payload.id) {
              return item;
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          }),
        ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...productState,
        cart: productState.cart.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_PRODUCTS":
      return {
        ...productState,
        products: [...productState.products, action.payload],
      };
    case "SEE_MORE":
      if (action.payload === "browse-all") {
        return { ...productState, applyFilter: "false" };
      } else {
        return {
          ...productState,
          applyFilter: "true",
          category: productState.category.filter(
            (item) => item === action.payload
          ),
        };
      }
    case "RESET":
      return {
        ...productState,
        applyFilter: "false",
        sortBy: "",
        category: [
          "men's clothing",
          "jewelery",
          "electronics",
          "women's clothing",
        ],
        price: Number.MAX_SAFE_INTEGER,
        rating: 0,
      };
    default:
      return productState;
  }
};

export { FilterReducer };
