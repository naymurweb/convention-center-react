import React from "react";
import PackageBtn from "./PackageBtn";
import Service from "./Service";

const CardPackages = (props) => {
  return (
    <div className="col-md-3 ">
      <span className="badge bg-danger p-2 rounded-pill">{props.hot}</span>
      <div className="card h-100 border-0">
        <div className={`card-body ${props.color}`}>
          <h2>${props.price}</h2>
          <h3 className="fs-4 mt-4">{props.title}</h3>
          <p className="card-title mt-2">
            For most businesses event like book fair, craft fair.
          </p>
          <div className="card-text">
            <Service
              text="limited space access"
              service={props.service}
            ></Service>
            <Service text="Secuirty facility" service={props.service}></Service>
            <Service text="event support " service={props.service}></Service>
            <Service text="Decoration design" service={props.service}></Service>
            <Service text="Per day bill" service={props.service}></Service>

            <div className="mt-3">
              <PackageBtn opacity={props.opacity}></PackageBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPackages;
