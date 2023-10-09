import { createRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import { testimonials } from "../../utils/testimonials";
import { TestimonialType } from "../../utils/types";
import TestimonialCard from "./TestimonialCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Testimonials = () => {
  const settings: Settings = {
    className: "adaptiveSlickSlider",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 15000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const sliderRef = createRef<Slider>();

  return (
    <div className="testimonials">
      <div className="testimonialsHeader">
        <h2>What People Say About Me</h2>
        <div>
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <FaAngleLeft />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()}>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((item: TestimonialType, index: number) => (
          <TestimonialCard testimonial={item} key={`${index}`} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
