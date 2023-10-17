import { useSearchParams } from "react-router-dom";
import { projects } from "../../utils/projects";
import AllProjectsCard from "./AllProjectsCard";
import { useEffect, useState } from "react";
import { GitClientType, ProjectType } from "../../utils/types";
import { getProjectById } from "../../utils/helpers";
import Modal from "../UI/Modal";
import {
  FaBitbucket,
  FaGithub,
  FaGitlab,
  FaGlobe,
  FaTag,
} from "react-icons/fa6";
import Tooltip from "rc-tooltip";
import { BsGridFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const AllProjects = () => {
  const [singleProject, setSingleProject] = useState<ProjectType | null>(null);

  const [search] = useSearchParams();
  const id = search.get("id");

  useEffect(() => {
    if (id) {
      setSingleProject(getProjectById(+id));
    }
  }, [id]);

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
    <>
      <div className="allProjects">
        {projects.map((item, index: number) => (
          <AllProjectsCard project={item} key={`${index}`} id={index + 1} />
        ))}
      </div>
      <Modal isOpen={!!singleProject} onClose={() => setSingleProject(null)}>
        <div className="allProjectsModal">
          <h1>{singleProject?.title}</h1>
          <div>
            <p>
              <FaTag /> {singleProject?.category}
            </p>
            <Tooltip
              overlay={
                <p>
                  {
                    getGitClient(singleProject?.code?.client as GitClientType)
                      .label
                  }
                </p>
              }
              trigger={["hover"]}
              placement="top"
              overlayInnerStyle={{ margin: "-4px" }}
            >
              <a href="" target="_blank">
                {
                  getGitClient(singleProject?.code?.client as GitClientType)
                    .icon
                }
              </a>
            </Tooltip>
            <a href={singleProject?.url} target="_blank">
              <FaGlobe />
            </a>
            {singleProject?.status === "In Progress" && (
              <p>
                <GoDotFill /> In Progress
              </p>
            )}
          </div>
          <p
            className="allProjectsModalDescription"
            dangerouslySetInnerHTML={{
              __html: singleProject?.description as string,
            }}
          />
          <div>
            {singleProject?.gallery?.map((item, index) => (
              <div key={`${index}`}>
                <img src={item} width={"100%"} alt="Not found" />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AllProjects;
