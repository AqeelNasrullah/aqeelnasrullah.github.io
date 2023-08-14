import { education } from "../../utils/education";
import { Education as EducationType } from "../../utils/types";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="educationList">
        {education.map((edu: EducationType, index: number) => (
          <>
            <EducationCard srNo={index + 1} education={edu} key={`${index}`} />
            {index < education.length - 1 ? <hr /> : null}
          </>
        ))}
      </div>
    </div>
  );
};

export default Education;
