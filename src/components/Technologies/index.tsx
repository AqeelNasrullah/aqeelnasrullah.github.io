import { technologies } from "../../utils/technologies";
import { Technology } from "../../utils/types";
import TechnologyCard from "./TechnologyCard";

const Technologies = () => {
  return (
    <div className="technologies">
      <h2>Technologies I can work on</h2>

      <div className="technologiesList">
        {technologies.map((tech: Technology, index: number) => (
          <TechnologyCard technology={tech} key={`${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
