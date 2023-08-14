import { ExperienceType } from "./types";
import InfinkeyImage from "../assets/images/infinkey.jpeg";
import DevminifiedImage from "../assets/images/devminified.jpeg";

export const experiences: ExperienceType[] = [
  {
    title: "ReactJS Developer",
    company: "Infinkey Solutions Private Limited",
    image: InfinkeyImage,
    from: new Date("2021-04-16"),
    to: new Date("2021-12-31"),
  },
  {
    title: "MERN Stack Developer",
    company: "Infinkey Solutions Private Limited",
    image: InfinkeyImage,
    from: new Date("2022-01-01"),
    to: new Date("2023-05-26"),
  },
  {
    title: "MERN Stack Developer",
    company: "Devminified Private Limited",
    image: DevminifiedImage,
    from: new Date("2023-06-01"),
    to: new Date(),
  },
];
