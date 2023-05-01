import React from "react";
import CardPackages from "./CardPackages";
const Packages = () => {
  return (
    <section className="gap2 container">
      <h2 className="fs-1 text-center">Our package</h2>

      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          <CardPackages
            title="Business fair"
            price={300}
            opacity={50}
          ></CardPackages>
          <CardPackages
            title="Wedding basic"
            price={500}
            opacity={50}
          ></CardPackages>
          <CardPackages
            title="Wedding plus"
            price={800}
            hot="hot"
            color={"bg-primary bg-gradient text-white rounded-4 shadow-lg"}
            blue={true}
            service="text-white"
          ></CardPackages>
          <CardPackages
            title="Corporate event"
            price={1200}
            opacity={50}
          ></CardPackages>
        </div>
      </div>
    </section>
  );
};

export default Packages;
