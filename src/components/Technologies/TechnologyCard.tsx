import { Technology } from "../../utils/types";
import Image from "../UI/Image";

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {
  return (
    <div className="technologyCard">
      <div className="technologyCardImg">
        <Image source={technology.icon} />
      </div>
      <p>{technology.title}</p>
    </div>
  );
};

export default TechnologyCard;
