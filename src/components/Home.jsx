import React from "react";
import Header from "./Header";

import banner from "../assets/banner.jpg";
import { homeCards } from "../constant";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ name, image }) => {
  const navigate = useNavigate();
  return (
    <div className="card card-shadow flex flex-col bg-white rounded-sm border p-5">
      <h4 className="my-3">{name}</h4>
      <img src={image} className="object-fit-cover m-auto" alt="electronics" />
      <button
        onClick={() => navigate("/products")}
        className="btn-link-secondary mr-auto text mt-auto"
      >
        See More
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-light-gray">
        <img
          src={banner}
          className="w-full object-fit-cover m-auto mb-10"
          alt="banner"
        />
        <div className="grid gap-10 grid-cols-4 product-feed absolute top-45pc mt-10 mx-10 z-4">
          {homeCards.map((card) => (
            <HomeCard key={card.name} name={card.name} image={card.image} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
