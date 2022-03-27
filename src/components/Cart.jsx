import React from "react";
import { useProducts } from "../context/product-context";
import { getTotal } from "../context/utils/filter";
import Header from "./Header";
import Rating from "./Rating";

const CartCard = ({
  id,
  category,
  image,
  title,
  description,
  price,
  rating,
}) => {
  const { state, dispatch } = useProducts();

  const addQuantity = () => {
    dispatch({
      type: "UPDATE-CART",
      payload: {
        id,
        category,
        image,
        title,
        description,
        price,
        rating,
        quantity: state.cart.filter((item) => item.id === id)[0].quantity + 1,
      },
    });
  };

  const subQuantity = () => {
    if (state.cart.filter((item) => item.id === id)[0].quantity > 1) {
      dispatch({
        type: "UPDATE-CART",
        payload: {
          id,
          category,
          image,
          title,
          description,
          price,
          rating,
          quantity: state.cart.filter((item) => item.id === id)[0].quantity - 1,
        },
      });
    } else {
      dispatch({
        type: "REMOVE-FROM-CART",
        payload: {
          id,
        },
      });
    }
  };

  const Total = getTotal(state);
  console.log(Total);

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
        {/* <Rating
          center={false}
          rating={parseInt(rating.rate.toFixed(), 10)}
          count={rating.count}
        /> */}
        <div className="flex-row items-center mt-auto">
          <div className="flex-row">
            <button
              className="btn-outlined w-10 rounded-sm p-1 mr-1"
              onClick={subQuantity}
            >
              -
            </button>
            <h5 className="m-auto px-5 py-2 border rounded-sm">
              {state.cart.filter((item) => item.id === id)[0].quantity}
            </h5>
            <button
              className="btn-outlined w-10 rounded-sm p-1 ml-1"
              onClick={addQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { state } = useProducts();
  return (
    <>
      <Header />
      <div className="grid gap-10 cart-container m-10">
        <div className="card card-shadow rounded-sm cart flex-col p-5">
          <h4>Your Cart</h4>
          {state.cart.map(
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
            <p className="ml-auto">₹ {getTotal(state)}</p>
          </div>
          <div className="flex my-1">
            <p>Discount</p>
            <p className="ml-auto">₹ 1,338.00</p>
          </div>
          <div className="flex my-1">
            <p>Shipping charges</p>
            <p className="ml-auto">₹ 1,338.00</p>
          </div>
          <hr className="mb-4" />
          <div className="flex mt-1 mb-2">
            <h4 className="mb-2">Total</h4>
            <h4 className="ml-auto">₹ {getTotal(state)}</h4>
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
