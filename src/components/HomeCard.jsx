import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/product-context";

export const HomeCard = ({ name, image, category }) => {
  const navigate = useNavigate();
  const { productDispatch } = useProducts();
  const seeMoreHandler = () => {
    productDispatch({
      type: "SEE_MORE",
      payload: category,
    });
    navigate("/products");
  };
  return (
    <div className="card card-shadow flex flex-col bg-white rounded-sm border p-5">
      <h4 className="my-3">{name}</h4>
      <img
        src={image}
        height="100px"
        className="object-fit-cover m-auto"
        alt="electronics"
      />
      <button
        onClick={seeMoreHandler}
        className="btn-link-secondary mr-auto text mt-auto"
      >
        See More
      </button>
    </div>
  );
};
