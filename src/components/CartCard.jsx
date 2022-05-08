import React from "react";
import { useProducts } from "../context/product-context";
import { getTotal } from "../context/utils/filter";
import Rating from "./Rating";

export const CartCard = ({
  id,
  category,
  image,
  title,
  description,
  price,
  rating,
}) => {
  const { productState, productDispatch } = useProducts();

  const addQuantity = () => {
    productDispatch({
      type: "UPDATE_CART",
      payload: {
        id,
        category,
        image,
        title,
        description,
        price,
        rating,
        quantity:
          productState.cart.filter((item) => item.id === id)[0].quantity + 1,
      },
    });
  };

  const subQuantity = () => {
    if (productState.cart.filter((item) => item.id === id)[0].quantity > 1) {
      productDispatch({
        type: "UPDATE_CART",
        payload: {
          id,
          category,
          image,
          title,
          description,
          price,
          rating,
          quantity:
            productState.cart.filter((item) => item.id === id)[0].quantity - 1,
        },
      });
    } else {
      productDispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          id,
        },
      });
    }
  };

  const moveToWishlist = () => {
    productDispatch({
      type: "ADD_TO_WISHLIST",
      payload: {
        id,
        category,
        image,
        title,
        description,
        price,
        rating,
      },
    });
    productDispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
        category,
        image,
        title,
        description,
        price,
        rating,
      },
    });
  };

  const deleteFromCart = () => {
    productDispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
        category,
        image,
        title,
        description,
        price,
        rating,
      },
    });
  };

  return (
    <div className="card flex-row lg--flex-col relative rounded-sm w-50 p-4 m-2">
      <img
        className="rounded-sm h-52 w-52 rounded-sm object-fit-contain mr-4"
        src={image}
        alt="jacket"
      />
      <div className="flex-column">
        <h4>{title}</h4>
        <small>{category}</small>
        <Rating
          center={false}
          rating={parseInt(rating.rate.toFixed(), 10)}
          count={rating.count}
        />
        <div className="flex-row items-center mt-auto">
          <div className="flex-row">
            <button
              className="btn-outlined w-10 rounded-sm p-1 mr-1"
              onClick={subQuantity}
            >
              -
            </button>
            <h5 className="m-auto px-5 py-2 border rounded-sm">
              {productState.cart.filter((item) => item.id === id)[0].quantity}
            </h5>
            <button
              className="btn-outlined w-10 rounded-sm p-1 ml-1"
              onClick={addQuantity}
            >
              +
            </button>
            <button
              className="btn-outlined w-fit rounded-sm py-1 px-2 ml-1"
              onClick={deleteFromCart}
            >
              Delete
            </button>
            <button
              className="btn-outlined w-fit rounded-sm py-1 px-2 ml-1"
              onClick={moveToWishlist}
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
