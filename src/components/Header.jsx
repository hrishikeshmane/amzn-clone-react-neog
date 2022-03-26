import React from "react";
import amazon from "../assets/amazon.png";

const Header = () => {
  return (
    <header>
      <div class="flex items-center bg-amazon_blue p-1 grow py-2">
        <div class="mt-2 mb-0 ml-2 mr-8 flex items-center grow-0">
          <a href="./index.html">
            <img
              src={amazon}
              width="120"
              height="30"
              class="pointer"
              alt="amazon"
            />
          </a>
        </div>

        <div class="flex xs--hidden items-center h-10 rounded-md grow pointer bg-amazon_yellow bg-amazon_yellow--hover">
          <input class="p-2 h-full w-6 grow shrink rounded-sm" type="text" />
          <i class="fa fa-search h-12 p-4"></i>
        </div>

        <div class="text-white flex items-center text-sm space-x-6s mx-6 ml-auto">
          <div class="link white pointer mx-2">
            <a href="../login.html">
              <p>Sign in</p>
              <p class="font-bold text-sm">Account & Lists</p>
            </a>
          </div>

          <div class="link white pointer mx-2">
            <a href="./wishlist.html">
              <p>Wishlist</p>
              <p class="font-bold text-sm">& Orders</p>
            </a>
          </div>

          <div class="relative link white items-center pointer ml-2">
            <a href="./cart.html">
              <i class="fa fa-shopping-cart fa-2x mb-2 mr-5"></i>
            </a>
            <span class="flex flex-center absolute -top-1 right-0 m-0 p-1 bg-amazon_yellow rounded-full black font-bold">
              4
            </span>
          </div>
        </div>
      </div>

      {/* <div class="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white">
        <p
          href="./products.html"
          class="btn-link link white flex items-center pointer"
        >
          <i class="fa fa-bars fa-lg mr-2"></i>
          All
        </p>
        <a href="./products.html" class="btn-link link white mx-3 pointer">
          Electronics
        </a>
        <a href="./products.html" class="btn-link link white mx-3 pointer">
          Men's Clothing
        </a>
        <a href="./products.html" class="btn-link link white mx-3 pointer">
          Women's clothing
        </a>

        <a
          href="./products.html"
          class="btn-link link white lg--hidden mx-3 pointer"
        >
          Buy again
        </a>
        <a
          href="./products.html"
          class="btn-link link white lg--hidden mx-3 pointer"
        >
          Food & Grocery
        </a>
        <a
          href="./products.html"
          class="btn-link link white lg--hidden mx-3 pointer"
        >
          Prime
        </a>
        <a
          href="./products.html"
          class="btn-link link white lg--hidden mx-3 pointer"
        >
          Health & Personal Care
        </a>
      </div> */}
    </header>
  );
};

export default Header;
