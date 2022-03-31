import React from "react";
import { useProducts } from "../context/product-context";
import Header from "./Header";
import Rating from "./Rating";

const WishlistCard = ({
  id,
  category,
  image,
  title,
  description,
  price,
  rating,
}) => {
  const { state, dispatch } = useProducts();

  const removeFromWishlist = () => {
    dispatch({
      type: "REMOVE-FROM-WISHLIST",
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
    dispatch({
      type: "ADD-TO-CART",
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

    dispatch({
      type: "REMOVE-FROM-WISHLIST",
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

const Wishlist = () => {
  const { state, dispatch } = useProducts();

  return (
    <>
      <Header />
      <main className="products h-full">
        <h2 className="flex flex-center mt-5">Your Wishlist</h2>
        <div className="grid gap-10 grid-cols-4 product-feed absolute mt-5 mx-10 z-4">
          {state.wishlist.map(
            ({ id, category, image, title, description, price, rating }) => (
              <WishlistCard
                key={id}
                id={id}
                category={category}
                image={image}
                title={title}
                description={description}
                price={price}
                rating={rating}
              />
            )
          )}
        </div>
      </main>
    </>
  );
};

export default Wishlist;
