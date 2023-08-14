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
