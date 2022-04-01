import React from "react";
import { useProducts } from "../context/product-context";
import Header from "./Header";
import { WishlistCard } from "./WishlistCard";

const Wishlist = () => {
  const { productState } = useProducts();

  return (
    <>
      <Header />
      <main className="products h-full">
        <h2 className="flex flex-center mt-5">Your Wishlist</h2>
        <div className="grid gap-10 grid-cols-4 product-feed absolute mt-5 mx-10 z-4">
          {productState.wishlist.map(
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
