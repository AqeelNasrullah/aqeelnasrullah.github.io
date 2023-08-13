export interface PageType {
  path: string;
  component: React.FunctionComponent;
  type?: "private" | "public" | "auth";
}
