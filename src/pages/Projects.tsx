import AllProjects from "../components/Projects/AllProjects";
import Button from "../components/UI/Button";

const Projects = () => {
  return (
    <div className="projectsPage">
      <div className="projectsPageGoBack">
        <Button href="/" iconClasses="fa-solid fa-arrow-left" link>
          Back
        </Button>
      </div>
      <AllProjects />
    </div>
  );
};

export default Projects;
