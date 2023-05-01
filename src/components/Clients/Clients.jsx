import React from "react";
import ClientCard from "./ClientCard";
import person1 from "../../images/person 1.png";
import person2 from "../../images/person 2.png";
import person3 from "../../images/person 3.png";

const Clients = () => {
  return (
    <section className="container gap3">
      <h2 className="text-center fs-1">Happy Clients says</h2>

      <div className="my-5">
        <div className="row row-cols-1 row-cols-md-3 gx-5">
          <ClientCard
            img={person1}
            details="Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year."
            user="Regina Miles"
          ></ClientCard>
          <ClientCard
            img={person2}
            details="Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year."
            user="Jone Drake"
          ></ClientCard>
          <ClientCard
            img={person3}
            details="Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year."
            user="Massi Drake"
          ></ClientCard>
        </div>
      </div>
    </section>
  );
};

export default Clients;
