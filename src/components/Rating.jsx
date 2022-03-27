import React from "react";

const Rating = ({ rating, count, center = true }) => {
  const unrated = 5 - rating;
  return (
    <div
      className={`flex-row ${
        center && "flex-center"
      } p-2 mt-1 w-100 h-fit text-2xl`}
    >
      {[...Array(rating)].map((e, i) => (
        <i key={`rated-${i}`} className="fa fa-star rated pr-1"></i>
      ))}
      {[...Array(unrated)].map((e, i) => (
        <i key={`unrated-${i}`} className="fa fa-star unrated pr-1"></i>
      ))}
      <small className="amazon_blue">, {count}</small>
    </div>
  );
};

export default Rating;
