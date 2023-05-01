import React from "react";

const Quiz1 = ({ title, pra, item }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${item}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${item}`}
          aria-expanded="false"
          aria-controls={`collapse${item}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${item}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${item}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{pra}</div>
      </div>
    </div>
  );
};

export default Quiz1;
