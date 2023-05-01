import React from "react";

const CarouselBtn = ({ name, type }) => {
  return (
    <div>
      <button
        className={`carousel-control-${type}`}
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide={type}
      >
        <span className={`carousel-control-${type}-icon`} aria-hidden="true"></span>
        <span className="visually-hidden">{name}</span>
      </button>
    </div>
  );
};

export default CarouselBtn;
