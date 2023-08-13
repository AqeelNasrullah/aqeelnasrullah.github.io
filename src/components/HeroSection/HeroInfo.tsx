import Button from "../UI/Button";

const HeroInfo = () => {
  return (
    <div className="heroInfo">
      <p className="heroInfoGreetings">
        Hey!!! Welcome here, Good to see you...
      </p>
      <h5 className="iAm">I am</h5>
      <h1 className="whoAmI">Aqeel Nasrullah</h1>
      <h2>MERN Stack Developer</h2>
      <p className="heroInfoDescription">
        With over 2+ years of immersive experience in MERN Stack development, I
        thrive on transforming complex concepts into seamless web applications.
        Passionate about pushing boundaries, I'm committed to delivering
        exceptional results that leave a lasting impact.
      </p>
      <div className="btnsSection">
        <Button
          iconClasses="fa-solid fa-calendar-days"
          href="https://calendly.com/aqeelnasrullah1997/60min"
          target="_blank"
        >
          Schedule a Meeting
        </Button>
        <Button iconClasses="fa-solid fa-chevron-down" link>
          {" "}
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HeroInfo;
