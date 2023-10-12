import { getInitials } from "../../utils/helpers";
import { TestimonialPersonType, TestimonialType } from "../../utils/types";
import { FaQuoteLeft } from "react-icons/fa6";

interface TestimonialCardProps {
  testimonial: TestimonialType;
  setTestimonial: (value: TestimonialType) => void;
  openModal: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  setTestimonial,
  openModal,
}) => {
  const getType = (type: TestimonialPersonType) => {
    switch (type) {
      case "client":
        return "Client";

      case "colleague":
        return "Colleague";

      default:
        return "Client";
    }
  };

  return (
    <div className="testimonialsCard">
      <p>
        <sup>
          <FaQuoteLeft />
        </sup>{" "}
        {testimonial.message.slice(0, 140)}...{" "}
        <span
          onClick={() => {
            setTestimonial(testimonial);
            openModal();
          }}
        >
          Show more
        </span>
      </p>
      <div>
        <div className="avatar">{getInitials(testimonial.name)}</div>
        <div>
          <h4>{testimonial.name}</h4>
          <small>{getType(testimonial.type)}</small>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
