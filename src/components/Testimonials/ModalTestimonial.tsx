import { FaQuoteLeft } from "react-icons/fa6";
import { TestimonialPersonType, TestimonialType } from "../../utils/types";
import { getInitials } from "../../utils/helpers";

interface ModalTestimonialProps {
  testimonial: TestimonialType;
}

const ModalTestimonial: React.FC<ModalTestimonialProps> = ({ testimonial }) => {
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
    <div className="modalTestimonial">
      <p>
        <sup>
          <FaQuoteLeft />
        </sup>{" "}
        {testimonial.message}
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

export default ModalTestimonial;
