import React from "react";
import wedding from "../../images/wedding.png";

const Photoshoot = () => {
  return (
    <div className="container gap2">
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-12">
          <img src={wedding} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6  col-sm-12">
          <h2 className="fs-2">Every moment is Precious </h2>
          <p className="fw-bold mb-4 m=mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="btn btn-primary rounded-0">
            Explore our album{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="d-inline h-6 w-6"
                id="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-3">
          <div
            className="toast align-items-center show border-start border-5 border-primary"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex justify-content-end">
              <div className="toast-body d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  id="icon2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                20% off on next booking
              </div>
              <button
                type="button"
                className="btn-close me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photoshoot;
