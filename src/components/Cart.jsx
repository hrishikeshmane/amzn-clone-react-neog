import React from "react";
import { useProducts } from "../context/product-context";
import { getTotal } from "../context/utils/filter";
import { CartCard } from "./CartCard";
import Header from "./Header";

const Cart = () => {
  const { productState } = useProducts();
  return (
    <>
      <Header />
      <div className="grid gap-10 cart-container m-10">
        <div className="card card-shadow rounded-sm cart flex-col p-5">
          <h4>Your Cart</h4>
          {productState.cart.map(
            ({ id, category, image, title, description, price, rating }) => (
              <CartCard
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

        <div className="card card-shadow rounded-sm h-fit payment flex-col p-5">
          <h4 className="mb-2">Price Details</h4>
          <hr className="mb-4" />
          <div className="flex my-1">
            <p>Price</p>
            <p className="ml-auto">₹ {getTotal(productState)}</p>
          </div>
          <div className="flex my-1">
            <p>Discount</p>
            <p className="ml-auto">₹ 00.00</p>
          </div>
          <div className="flex my-1">
            <p>Shipping charges</p>
            <p className="ml-auto">₹ 00.00</p>
          </div>
          <hr className="mb-4" />
          <div className="flex mt-1 mb-2">
            <h4 className="mb-2">Total</h4>
            <h4 className="ml-auto">₹ {getTotal(productState)}</h4>
          </div>
          <hr className="mb-4" />

          <button className="button bg-amazon_yellow bg-amazon_yellow--hover p-1 rounded-sm mt-auto">
            Place order
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
