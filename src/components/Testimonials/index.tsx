import { createRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import { testimonials } from "../../utils/testimonials";
import { TestimonialType } from "../../utils/types";
import TestimonialCard from "./TestimonialCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Modal from "../UI/Modal";
import ModalTestimonial from "./ModalTestimonial";

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleTestimonial, setSingleTestimonial] =
    useState<TestimonialType | null>(null);

  const sliderRef = createRef<Slider>();

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

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

  return (
    <>
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
            <TestimonialCard
              testimonial={item}
              key={`${index}`}
              setTestimonial={(value: TestimonialType) =>
                setSingleTestimonial(value)
              }
              openModal={openModal}
            />
          ))}
        </Slider>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setSingleTestimonial(null);
          closeModal();
        }}
      >
        <ModalTestimonial testimonial={singleTestimonial as TestimonialType} />
      </Modal>
    </>
  );
};

export default Testimonials;
