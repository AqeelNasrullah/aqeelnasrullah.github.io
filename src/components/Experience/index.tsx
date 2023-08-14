import { experiences } from "../../utils/experiences";
import { ExperienceType } from "../../utils/types";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="experience">
      <h1>Professional Experience</h1>
      <div className="experienceList">
        {experiences.map((experience: ExperienceType, index: number) => (
          <ExperienceCard
            experience={experience}
            key={`${index}`}
            srno={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
