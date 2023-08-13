import Image from "../UI/Image";
import MeImage from "../../assets/images/me.png";

const HeroImage = () => {
  return (
    <div className="heroImage">
      <Image source={MeImage} />
    </div>
  );
};

export default HeroImage;
