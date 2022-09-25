import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="title">
      <h2>Our tours</h2>
      <div className="underline"></div>
      <div>
        {tours.map((tour) => {
          return <Tour removeTour={removeTour} key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
