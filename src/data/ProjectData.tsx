import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiGooglegemini } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import peakcvPic from "../assets/projectPics/PeakCV.png";

export const notableProjects = [
  {
    title: "PeakCV",
    description:
      "An AI-powered web application that tailors resumes for software engineers based on the job description.",
    image: peakcvPic,
    tech: [
      <SiTypescript size={24} color="#007ACC" />,
      <FaReact size={24} color="#61DAFB" />,
      <SiTailwindcss size={24} color="#38BDF8" />,
      <SiExpress size={24} color="#000000" />,
      <FaNodeJs size={24} color="#68A063" />,
      <SiGooglegemini size={24} color="#4285F4" />,
      <FaDocker size={24} color="#2496ED" />,
      <VscAzure size={24} color="#0078D4" />,
    ],
    github: "https://github.com/SCWinter259/PeakCV?tab=readme-ov-file",
    liveDemo: "https://youtu.be/e5-qzMbI98Y",
  },
];

export const otherProjects = [];
