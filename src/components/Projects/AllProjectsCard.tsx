import {
  FaBitbucket,
  FaGithub,
  FaGitlab,
  FaGlobe,
  FaTag,
} from "react-icons/fa6";
import { GitClientType, ProjectType } from "../../utils/types";
import { BsGridFill } from "react-icons/bs";
import Tooltip from "rc-tooltip";
import { GoDotFill } from "react-icons/go";
import Button from "../UI/Button";

interface AllProjectsCardProps {
  project: ProjectType;
  id: number;
}

const AllProjectsCard: React.FC<AllProjectsCardProps> = ({ project, id }) => {
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
    <div className="allProjectsCard">
      <div className="allProjectsCardImg">
        <img src={project.gallery[0]} width="100%" alt="Not found" />
      </div>
      <div className="allProjectsCardDetail">
        <h1>{project.title}</h1>
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
        <Button href={"/projects?id=" + id} link>
          View Detail
        </Button>
      </div>
    </div>
  );
};

export default AllProjectsCard;
