import { getDate, getDuration } from "../../../utils/helpers";
import { ExperienceType } from "../../../utils/types";
import Image from "../../UI/Image";

interface ExperienceCardProps {
  srno: number;
  experience: ExperienceType;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  srno,
  experience,
}) => {
  return (
    <div className="experienceCard">
      <div className="experienceCardSrNo">{srno}</div>
      <div className="experienceCardDetails">
        <div className="experienceCardDetailsCompany">
          <div className="experienceCardDetailsCompanyImg">
            <Image source={experience.image} />
          </div>
          <div className="experienceCardDetailsCompanyTitle">
            <h1>{experience.title}</h1>
            <h3>{experience.company}</h3>
          </div>
        </div>
        <div className="experienceCardDetailsDuration">
          <p>
            <small>from</small> {getDate(experience.from, "datewithoutday")}
          </p>
          <p>
            <small>to</small> {getDate(experience.to, "datewithoutday")}
          </p>
          <hr />
          <p>
            <small>Duration</small>{" "}
            {getDuration(experience.from, experience.to)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
