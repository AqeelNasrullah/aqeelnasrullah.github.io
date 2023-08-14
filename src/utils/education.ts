import { Education } from "./types";
import UET from "../assets/images/uet.png";
import HKUST from "../assets/images/hkust.png";

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    university: "University of Engineering and Technology, Lahore",
    from: new Date(2016, 9, 17),
    to: new Date(2020, 7, 31),
    image: UET,
    link: "",
  },
  {
    degree: "Front-End Web Development with React",
    university: "Hong Kong Univeristy of Science and Technology",
    from: new Date(2020, 11, 1),
    to: new Date(2021, 0, 22),
    image: HKUST,
    link: "https://coursera.org/share/78ef1e9f5de18fbccd97407d5ce35d28",
  },
  {
    degree: "Server Side Development with NodeJS, Express and MongoDB",
    university: "Hong Kong Univeristy of Science and Technology",
    from: new Date(2021, 3, 1),
    to: new Date(2021, 4, 26),
    image: HKUST,
    link: "https://coursera.org/share/15cbd5cadc177b1d40398ea9c219b8b2",
  },
];
