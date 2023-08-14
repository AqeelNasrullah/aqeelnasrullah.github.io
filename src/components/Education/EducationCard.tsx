import { getDate } from "../../utils/helpers";
import { Education } from "../../utils/types";
import Button from "../UI/Button";
import Image from "../UI/Image";

interface EducationCardProps {
  srNo: number;
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ srNo, education }) => {
  return (
    <div className="educationCard">
      <h3>{srNo}</h3>
      <div className="educationCardDetail">
        <div className="educationCardDetailImg">
          <Image source={education.image} />
        </div>
        <div className="educationCardDetailDegree">
          <h2>{education.degree}</h2>
          <h4>{education.university}</h4>
        </div>
        <div className="educationCardDetailCreds">
          <p>
            <small>From</small> {getDate(education.from, "datewithoutday")}
          </p>
          <p>
            <small>To</small> {getDate(education.to, "datewithoutday")}
          </p>
          <hr />
          <Button
            link
            href={education.link}
            target="_blank"
            iconClasses="fa-solid fa-ribbon"
          >
            Verify Credentials
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
