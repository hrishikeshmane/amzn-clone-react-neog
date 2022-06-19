import React from "react";
import { useNavigate } from "react-router-dom";
import amazon from "../assets/amazon.png";
import { useProducts } from "../context/product-context";

const Header = () => {
  const navigate = useNavigate();
  const { productState } = useProducts();

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 grow py-2">
        <div className="mt-2 mb-0 ml-2 mr-8 flex items-center grow-0">
          <button onClick={() => navigate("/")}>
            <img
              src={amazon}
              width="120"
              height="30"
              className="pointer"
              alt="amazon"
            />
          </button>
        </div>

        <div className="flex xs--hidden items-center h-10 rounded-md grow pointer bg-amazon_yellow bg-amazon_yellow--hover">
          <input
            className="p-2 h-full w-6 grow shrink rounded-sm"
            type="text"
          />
          <i className="fa fa-search h-12 p-4"></i>
        </div>

        <div className="text-white flex items-center text-sm space-x-6s mx-6 ml-auto">
          <div>
            <button
              onClick={() => navigate("/login")}
              className="link white pointer mx-2"
            >
              <p>Sign in</p>
              <p className="font-bold text-sm">Account & Lists</p>
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => navigate("/wishlist")}
              className="link white pointer mx-2"
            >
              <p>Wishlist</p>
              <p className="font-bold text-sm">& Orders</p>
            </button>
            <span className="flex flex-center absolute -top-1 right-0 m-0 p-1 bg-amazon_yellow rounded-full black font-bold">
              {productState.wishlist.length}
            </span>
          </div>

          <div className="relative ml-2">
            <button
              onClick={() => navigate("/cart")}
              className="link white pointer"
            >
              <i className="fa fa-shopping-cart fa-2x mb-2 mr-5"></i>
            </button>
            <span className="flex flex-center absolute -top-1 right-0 m-0 p-1 bg-amazon_yellow rounded-full black font-bold">
              {productState.cart.length}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
