import "rc-tooltip/assets/bootstrap.css";
import { projects } from "../../utils/projects";
import Button from "../UI/Button";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const mainProject = projects.filter((item) => item.isFeatured)[0];
  const sideProjects = projects.filter((item) => item.isFeatured).slice(1, 5);

  return (
    <div className="projects">
      <div className="projectsHeader">
        <h1>Projects</h1>
        <Button link href="/projects" iconClasses="fa-solid fa-angles-right">
          View All
        </Button>
      </div>
      <div className="projectsList">
        <div className="mainProject">
          <ProjectCard project={mainProject} />
        </div>
        <div className="sideProjects">
          {sideProjects.map((item, index) => (
            <ProjectCard key={`${index}`} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
