import React, { useState } from "react";
import { useProducts } from "../context/product-context";
import Rating from "./Rating";

export const ProductCard = ({
  id,
  category,
  image,
  title,
  description,
  price,
  rating,
}) => {
  const { productState, productDispatch } = useProducts();
  const { cart, wishlist } = productState;

  const isLiked = (product) => product.id === id;
  const [liked, setLiked] = useState(wishlist.some(isLiked));

  const addToWishlist = () => {
    setLiked(!liked);
    if (!liked) {
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
    } else {
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
    }
  };

  const addToCart = () => {
    if (cart.some((item) => item.id === id)) {
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
          quantity: cart.filter((item) => item.id === id)[0].quantity + 1,
        },
      });
    } else {
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
    }
  };

  return (
    <div className="card card-shadow relative flex flex-col m-5 bg-white rounded-sm border p-10">
      <p className="absolute top-1 left-2 text-xs italic">{category}</p>
      <button
        onClick={addToWishlist}
        className={`fa ${
          liked ? "fa-heart" : "fa-heart-o"
        } fa-2x absolute top-1 right-1 pointer red`}
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
        <h4>₹ {parseInt(price, 10)}</h4>
      </div>
      <button
        className="button bg-amazon_yellow bg-amazon_yellow--hover p-1 rounded-sm"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};
