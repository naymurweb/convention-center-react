import React from "react";
import banner from "../../images/banner.png";
import slider2 from "../../images/slider-2.jpg";
import slider3 from "../../images/slider-3.jpg";
import Carousel from "./Carousel";
import CarouselBtn from "./CarouselBtn";
import IndicatorBtn from "./IndicatorBtn";
const Banner = () => {
  return (
    <section>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <IndicatorBtn
            slide={0}
            label={"Slide 0"}
            active={"active"}
            current={true}
          ></IndicatorBtn>
          <IndicatorBtn slide={1} label={"Slide 1"}></IndicatorBtn>
          <IndicatorBtn slide={2} label={"Slide 2"}></IndicatorBtn>
        </div>
        <div className="carousel-inner">
          <Carousel
            img={banner}
            hadding={"This is my first slide"}
            active={"active"}
          ></Carousel>
          <Carousel img={slider2} hadding={"This is my 2nd slide"}></Carousel>
          <Carousel img={slider3} hadding={"This is my 3rd slide"}></Carousel>

          <CarouselBtn name="Previous" type="prev"></CarouselBtn>
          <CarouselBtn name="Next" type="next"></CarouselBtn>
        </div>
      </div>
    </section>
  );
};

export default Banner;
