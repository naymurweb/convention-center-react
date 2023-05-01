import React from "react";

const Service = ({ text,service}) => {
  return (
    <p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${service}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      id="icon3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    {text}
  </p>
  );
};

export default Service;
