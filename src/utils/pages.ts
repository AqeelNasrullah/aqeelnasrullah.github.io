import Home from "../pages/Home";
import Projects from "../pages/Projects";
import { PageType } from "./types";

export const pages: PageType[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/projects",
    component: Projects,
  },
];
