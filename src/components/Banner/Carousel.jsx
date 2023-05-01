import React from "react";

const Carousel = (props) => {
  return (
    <div className={`carousel-item ${props.active}`}>
      <img src={props.img} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>{props.hadding}</h5>
       <p> className=Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  );
};

export default Carousel;
