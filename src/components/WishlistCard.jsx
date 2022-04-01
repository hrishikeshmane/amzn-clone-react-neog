import React from "react";
import { useProducts } from "../context/product-context";
import Rating from "./Rating";

export const WishlistCard = ({
  id,
  category,
  image,
  title,
  description,
  price,
  rating,
}) => {
  const { productDispatch } = useProducts();

  const removeFromWishlist = () => {
    productDispatch({
      type: "REMOVE_FROM_WISHLIST",
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

  const moveToCart = () => {
    productDispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        category,
        image,
        title,
        description,
        price,
        rating,
        quantity: 1,
      },
    });

    productDispatch({
      type: "REMOVE_FROM_WISHLIST",
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
    <div className="card card-shadow relative flex flex-col m-5 bg-white rounded-sm border p-10">
      <p className="absolute top-1 left-2 text-xs italic">{category}</p>
      <button
        className="fa fa-heart fa-2x absolute top-1 right-1 pointer red"
        onClick={removeFromWishlist}
      >
        <i aria-hidden="true"></i>
      </button>
      <img
        src={image}
        height="200"
        width="200"
        className="object-fit-cover m-auto"
        alt="tshirt"
      />
      <div className="mb-5 mt-auto">
        <Rating
          rating={parseInt(rating.rate.toFixed(), 10)}
          count={rating.count}
        />
        <h4 className="my-3">{title}</h4>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <h4>₹ {price * 70}</h4>
      </div>
      <button
        className="button bg-amazon_yellow bg-amazon_yellow--hover p-1 rounded-sm"
        onClick={moveToCart}
      >
        Move to Cart
      </button>
    </div>
  );
};
