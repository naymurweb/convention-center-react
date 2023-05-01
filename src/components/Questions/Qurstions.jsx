import React from "react";
import people from "../../images/people.png";
import Quiz1 from "./Quiz1";

const Qurstions = () => {
  return (
    <section className="container gap3">
      <h2 className="fs-1 text-center">Frequently Asked Questions</h2>
      <div className="row mt-5 align-items-center">
        <div className="col-md-6">
          <div className="accordion" id="accordionExample">
            <Quiz1
              title=" What’s the difference between event design and event planning?"
              pra="Event design and event planning work hand in hand to deliver a successful
                    event.Events by Knight offer tailor made events. This means we incorporate both
                    event design and event planning to create that perfect event."
                    item='One'
            ></Quiz1>

            <Quiz1
              title=" How early do we need to start planning an event"
              pra="Event design and event planning work hand in hand to deliver a successful
                    event.Events by Knight offer tailor made events. This means we incorporate both
                    event design and event planning to create that perfect event."
                    item='Two'
            ></Quiz1>

            <Quiz1
              title="What is your refund and cancellation policy?"
              pra="Event design and event planning work hand in hand to deliver a successful
                    event.Events by Knight offer tailor made events. This means we incorporate both
                    event design and event planning to create that perfect event."
                    item='Three'
            ></Quiz1>
            <Quiz1
              title=" How do you keep budgets on track?"
              pra="Event design and event planning work hand in hand to deliver a successful
                    event.Events by Knight offer tailor made events. This means we incorporate both
                    event design and event planning to create that perfect event."
                    item='Four'
            ></Quiz1>
          </div>
        </div>

        <div className="col-md-6">
          <img src={people} className="img-fluid" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Qurstions;
