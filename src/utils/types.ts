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
