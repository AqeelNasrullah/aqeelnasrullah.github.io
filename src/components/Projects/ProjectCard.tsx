import { FaBitbucket, FaGithub, FaTag, FaGlobe } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import Tooltip from "rc-tooltip";
import { GitClientType, ProjectType } from "../../utils/types";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getGitClient = (client: GitClientType) => {
    switch (client) {
      case "github":
        return { label: "Github Link", icon: <FaGithub /> };

      case "gitlab":
        return { label: "Gitlab Link", icon: <FaGitlab /> };

      case "bitbucket":
        return { label: "Bitbucket Link", icon: <FaBitbucket /> };

      default:
        return { label: "Source Code Link", icon: <BsGridFill /> };
    }
  };

  return (
    <div className="project">
      <div className="projectImage">
        <img
          src={project.gallery[0]}
          alt="Not found"
          width="100%"
          height="100%"
        />
      </div>
      <div className="projectDetail">
        <h2>{project.title}</h2>
        <div>
          <p>
            <FaTag /> {project.category}
          </p>
          <Tooltip
            overlay={
              <p>{getGitClient(project.code?.client as GitClientType).label}</p>
            }
            trigger={["hover"]}
            placement="top"
            overlayInnerStyle={{ margin: "-4px" }}
          >
            <a href="" target="_blank">
              {getGitClient(project.code?.client as GitClientType).icon}
            </a>
          </Tooltip>
          <a href={project.url} target="_blank">
            <FaGlobe />
          </a>
          {project.status === "In Progress" && (
            <p>
              <GoDotFill /> In Progress
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
