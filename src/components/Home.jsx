import React from "react";
import Header from "./Header";

import banner from "../assets/banner.jpg";
import { homeCards } from "../constant";

const HomeCard = ({ name, image }) => (
  <div class="card card-shadow flex flex-col bg-white rounded-sm border p-5">
    <h4 class="my-3">{name}</h4>
    <img src={image} class="object-fit-cover m-auto" alt="electronics" />
    <button onClick={() => {}} class="btn-link-secondary mr-auto text mt-auto">
      See More
    </button>
  </div>
);

const Home = () => {
  return (
    <>
      <Header />
      <main class="bg-light-gray">
        <img
          src={banner}
          class="w-full object-fit-cover m-auto mb-10"
          alt="banner"
        />
        <div class="grid gap-10 grid-cols-4 product-feed absolute top-45pc mt-10 mx-10 z-4">
          {homeCards.map((card) => (
            <HomeCard name={card.name} image={card.image} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
