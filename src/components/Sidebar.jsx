import React from "react";
import { useProducts } from "../context/product-context";

const Sidebar = () => {
  const { state, dispatch } = useProducts();

  return (
    <aside className="sidebar bg-light-gray">
      <div className="flex flex-col p-4">
        <div className="flex">
          <h4>Filter</h4>
          <button
            className="btn-link-secondary ml-auto"
            onClick={() =>
              dispatch({
                type: "RESET",
              })
            }
          >
            clear
          </button>
        </div>
        <hr />
        <div className="flex flex-col mt-2 mb-4">
          <h4 className="font-semibold mb-2 text-2xl">Price</h4>
          <input
            type="range"
            list="tickmarks"
            className="h-2"
            value={state.price}
            min={10}
            max={1000}
            onChange={(event) =>
              dispatch({
                type: "PRICE",
                payload: parseInt(event.target.value, 10),
              })
            }
          />
        </div>
        <div className="flex flex-col mb-2">
          <h4 className="font-semibold mb-2 text-2xl">Caegory</h4>
          <div className="flex-col sm--flex wrap">
            <div className="flex items-center p-1 pr-4 w-fit">
              <input
                type="checkbox"
                id="mensclothing "
                name="category"
                checked={state.category.includes("men's clothing")}
                onChange={() =>
                  dispatch({
                    type: "CATEGORY",
                    payload: "men's clothing",
                  })
                }
              />
              <label htmlFor="mensclothing" className="text-lg">
                Men's Clothing
              </label>
            </div>
            <div className="flex items-center p-1 pr-4 w-fit">
              <input
                type="checkbox"
                id="womenclothing "
                name="category"
                checked={state.category.includes("women's clothing")}
                onChange={() =>
                  dispatch({
                    type: "CATEGORY",
                    payload: "women's clothing",
                  })
                }
              />
              <label htmlFor="womenclothing" className="text-lg">
                Women's Clothing
              </label>
            </div>
            <div className="flex items-center p-1 pr-4 w-fit">
              <input
                type="checkbox"
                id="electronics"
                name="category"
                checked={state.category.includes("electronics")}
                onChange={() =>
                  dispatch({
                    type: "CATEGORY",
                    payload: "electronics",
                  })
                }
              />
              <label htmlFor="electronics" className="text-lg">
                Electronics
              </label>
            </div>
            <div className="flex items-center p-1 pr-4 w-fit">
              <input
                type="checkbox"
                id="jewellery"
                name="category"
                checked={state.category.includes("jewelery")}
                onChange={() =>
                  dispatch({
                    type: "CATEGORY",
                    payload: "jewelery",
                  })
                }
              />
              <label htmlFor="jewellery" className="text-lg">
                Jewellery
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <h4 className="font-semibold mb-2 text-2xl">Rating</h4>
          <div className="flex-col sm--flex wrap">
            <div className="flex items-center p-1 pr-4 w-fit">
              <input type="radio" id="4+ " name="rating" />
              <label htmlFor="4+" className="text-lg">
                4 Stars & above
              </label>
            </div>
            <div className="flex items-center p-1 pr-4 w-fit">
              <input type="radio" id="3+ " name="rating" />
              <label htmlFor="3+" className="text-lg">
                3 Stars & above
              </label>
            </div>
            <div className="flex items-center p-1 pr-4 w-fit">
              <input type="radio" id="2+ " name="rating" />
              <label htmlFor="2+" className="text-lg">
                2 Stars & above
              </label>
            </div>
            <div className="flex items-center p-1 pr-4 w-fit">
              <input type="radio" id="1+ " name="rating" />
              <label htmlFor="1+" className="text-lg">
                1 Stars & above
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <h4 className="font-semibold mb-2 text-2xl">Sort by</h4>
          <div className="flex-col sm--flex wrap">
            <div className="flex items-center p-1 pr-4 w-fit">
              <input
                type="radio"
                id="lowToHigh"
                name="sort"
                onChange={() => dispatch({ type: "PRICE-LOW-TO-HIGH" })}
              />
              <label htmlFor="lowToHigh" className="text-lg">
                Low to High
              </label>
            </div>
            <div className="flex items-center p-1 pr-4 w-fit">
              <input
                type="radio"
                id="highToLow"
                name="sort"
                onChange={() => dispatch({ type: "PRICE-HIGH-TO-LOW" })}
              />
              <label htmlFor="highToLow" className="text-lg">
                High to Low
              </label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
