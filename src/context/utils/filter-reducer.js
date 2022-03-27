const FilterReducer = (state, action) => {
  switch (action.type) {
    case "PRICE-LOW-TO-HIGH":
      return { ...state, sortBy: action.type };
    case "PRICE-HIGH-TO-LOW":
      return { ...state, sortBy: action.type };
    case "CATEGORY":
      return {
        ...state,
        category: state.category.includes(action.payload)
          ? state.category.filter((category) => category !== action.payload)
          : [...state.category, action.payload],
      };
    case "PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "ADD-TO-WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload].filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.id === value.id)
        ),
      };
    case "REMOVE-FROM-WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "ADD-TO-CART":
      return {
        ...state,
        cart: [...state.cart, action.payload].filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.id === value.id)
        ),
      };
    case "UPDATE-CART":
      return {
        ...state,
        cart: [
          ...state.cart.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
      };
    case "REMOVE-FROM-CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE-PRODUCTS":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "RESET":
      return {
        ...state,
        sortBy: "",
        category: [
          "men's clothing",
          "jewelery",
          "electronics",
          "women's clothing",
        ],
        price: Number.MAX_SAFE_INTEGER,
      };
    default:
      return state;
  }
};

export { FilterReducer };
