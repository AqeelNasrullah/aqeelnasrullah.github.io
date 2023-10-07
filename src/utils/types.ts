export interface PageType {
  path: string;
  component: React.FunctionComponent;
  type?: "private" | "public" | "auth";
}

export interface ExperienceType {
  title: string;
  company: string;
  image: string;
  from: Date;
  to: Date;
}

export interface Technology {
  icon: string;
  title: string;
}

export interface Education {
  degree: string;
  university: string;
  from: Date;
  to: Date;
  image: string;
  link?: string;
}

export type GitClientType = "github" | "gitlab" | "bitbucket" | "other";

export interface ProjectType {
  title: string;
  category: string;
  gallery: string[];
  description?: string;
  url?: string;
  code?: {
    client: GitClientType;
    link: string;
  };
  status: "In Progress" | "Completed" | "Contributed";
  isFeatured: boolean;
}
