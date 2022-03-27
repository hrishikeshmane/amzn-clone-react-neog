import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "./utils/filter-reducer";

const ProductContext = createContext();

const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const initialFilter = {
    sortBy: "",
    category: ["men's clothing", "jewelery", "electronics", "women's clothing"],
    price: Number.MAX_SAFE_INTEGER,
    wishlist: [],
    cart: [],
    products: [],
  };
  const [state, dispatch] = useReducer(FilterReducer, initialFilter);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductContext, ProductProvider };
