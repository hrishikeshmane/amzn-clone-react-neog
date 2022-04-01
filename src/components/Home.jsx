import React from "react";
import Header from "./Header";
import { homeCards } from "../constant";
import { HomeCard } from "./HomeCard";
import banner from "../assets/banner.jpg";

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
            <HomeCard
              key={card.name}
              name={card.name}
              image={card.image}
              category={card.category}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
