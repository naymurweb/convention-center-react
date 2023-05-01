import React from "react";

const IndicatorBtn = (props) => {
  return (
    <>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={props.slide}
        aria-label={props.label}
        className={props.active}
        aria-current={props.current}
      ></button>
    </>
  );
};

export default IndicatorBtn;
