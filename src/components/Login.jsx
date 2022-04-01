import React from "react";
import amazon from "../assets/amazon.png";

const Login = () => {
  return (
    <main className="login-page relative flex flex-center bg-light-gray h-full">
      <div className="login-container absolute card card-shadow flex-col px-10 py-14 rounded-md">
        <div classNameName="bg-amazon_blue p-10 mb-5">
          <img src={amazon} alt="Amazon" />
        </div>
        <label htmlFor="password">Email</label>
        <input
          className="py-1 px-2 h-12 mb-5 text border rounded-sm"
          id="username"
          type="text"
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          className="py-1 px-2 h-12 mb-5 text border rounded-sm"
          id="password"
          type="password"
          placeholder="Enter your password"
        />

        <button className="button bg-amazon_yellow bg-amazon_yellow--hover p-1 h-12 rounded-sm">
          Sign in
        </button>
      </div>
    </main>
  );
};

export default Login;
