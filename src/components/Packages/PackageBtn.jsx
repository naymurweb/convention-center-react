import React from "react";

const PackageBtn = (props) => {
  return (
    <button type="button" className={`btn btn-danger rounded-pill opacity-${props.opacity}`}>
      Choose plan
    </button>
  );
};

export default PackageBtn;
