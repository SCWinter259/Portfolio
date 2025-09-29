import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaPython,
  FaJava,
  FaAndroid
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGooglegemini,
  SiRedux,
  SiDotnet,
  SiMui,
  SiJavascript,
  SiMongodb,
  SiHeroku,
  SiDjango,
  SiPostgresql,
  SiStreamlit,
  SiSqlite,
  SiJupyter,
  SiPandas,
  SiSemanticui,
  SiFirebase
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import peakcvPic from "../assets/projectPics/PeakCV.png";
import finSharkPic from "../assets/projectPics/FinShark.png";
import memoriesPic from "../assets/projectPics/Memories.png";
import chartreusePic from "../assets/projectPics/Chartreuse.png";
import dbStreamingPic from "../assets/projectPics/DBStreaming1.png";
import investmentHelperPic from "../assets/projectPics/InvestmentHelper.png";
import cclPic from "../assets/projectPics/CCL.png";
import snackNTrackPic from "../assets/projectPics/SnackNTrack.png";
import type { Project } from "../types/Project";

export const notableProjects: Project[] = [
  {
    title: "PeakCV",
    description:
      "An AI-powered web application that tailors resumes for software engineers based on the job description.",
    image: peakcvPic,
    tech: [
      <SiTypescript size={24} color="#007ACC" />,
      <FaReact size={24} color="#61DAFB" />,
      <SiRedux size={24} color="#764ABC" />,
      <SiTailwindcss size={24} color="#38BDF8" />,
      <SiExpress size={24} color="#000000" />,
      <FaNodeJs size={24} color="#68A063" />,
      <SiGooglegemini size={24} color="#4285F4" />,
      <FaDocker size={24} color="#2496ED" />,
      <VscAzure size={24} color="#0078D4" />,
    ],
    github: "https://github.com/SCWinter259/PeakCV?tab=readme-ov-file",
    demoVideo: "https://youtu.be/e5-qzMbI98Y",
  },
  {
    title: "FinShark",
    description:
      "A finance web application that allows users to search for publicly traded companies, view their financial reports and price chart, make comments on a ticker, as well as adding them to a portfolio.",
    image: finSharkPic,
    tech: [
      <SiTypescript size={24} color="#007ACC" />,
      <FaReact size={24} color="#61DAFB" />,
      <SiRedux size={24} color="#764ABC" />,
      <SiTailwindcss size={24} color="#38BDF8" />,
      <TbBrandCSharp size={24} color="#9B4F96" />,
      <SiDotnet size={24} color="#512BD4" />,
      <DiMsqlServer size={24} color="#CC2929" />,
      <VscAzure size={24} color="#0078D4" />,
    ],
    github: "https://github.com/SCWinter259/FinShark?tab=readme-ov-file",
    demoVideo: "https://youtu.be/6lxHo6N4gjM",
  },
  {
    title: "Memories",
    description:
      "A social media web application that allows users to post pictures along with their notes, as well as like and comment on other posts.",
    image: memoriesPic,
    tech: [
      <SiTypescript size={24} color="#007ACC" />,
      <FaReact size={24} color="#61DAFB" />,
      <SiRedux size={24} color="#764ABC" />,
      <SiMui size={24} color="#007FFF" />,
      <SiJavascript size={24} color="#F7DF1E" />,
      <SiExpress size={24} color="#000000" />,
      <FaNodeJs size={24} color="#68A063" />,
      <SiMongodb size={24} color="#47A248" />,
      <SiHeroku size={24} color="#430098" />,
    ],
    github: "https://github.com/SCWinter259/Memories",
    demoVideo: "https://youtu.be/TBIxqdq7whQ",
  },
  {
    title: "Chartreuse",
    description:
      "A CMPUT 404 team project where we built a distributed social network platform on which users can post in Markdown, post with a picture, comment, like, repost. Notably, servers from different teams can connect to each other!",
    image: chartreusePic,
    tech: [
      <FaHtml5 size={24} color="#E34F26" />,
      <FaCss3 size={24} color="#1572B6" />,
      <SiJavascript size={24} color="#F7DF1E" />,
      <FaBootstrap size={24} color="#563D7C" />,
      <SiDjango size={24} color="#092E20" />,
      <SiPostgresql size={24} color="#336791" />,
      <SiHeroku size={24} color="#430098" />,
    ],
    github: "https://github.com/SCWinter259/chartreuse",
    demoVideo: "https://youtu.be/gfmW2677Xg0?si=ppLdMEgARi_OxWWI",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Creative Community Labs",
    description: "A CMPUT 401 group project where we made a project directory website for Imagine Cities - a non-profit organization.",
    image: cclPic,
    tech: [
      <FaHtml5 size={24} color="#E34F26" />,
      <FaCss3 size={24} color="#1572B6" />,
      <SiJavascript size={24} color="#F7DF1E" />,
      <SiSemanticui size={24} color="#2185D0" />,
      <SiDjango size={24} color="#092E20" />,
      <SiPostgresql size={24} color="#336791" />,
      <SiHeroku size={24} color="#430098" />,
    ],
    demoVideo: "https://youtu.be/FH9vAE26MeM?si=__G9yQqy3phnSQNM"
  },
  {
    title: "DB Streaming 1",
    description:
      "A CMPUT 291 database project that simulates a movie streaming service where people can watch movies and follow cast members.",
    image: dbStreamingPic,
    tech: [
      <FaPython size={24} color="#3776AB" />,
      <SiStreamlit size={24} color="#FF4B4B" />,
      <SiSqlite size={24} color="#003B57" />,
    ],
    github: "https://github.com/SCWinter259/CMPUT291_DBSTREAMING_1",
  },
  {
    title: "Investment Helper",
    description:
      "Some utility tools to help me re-balance my investment portfolio and track my dividends. They are to be incorporated into the FinShark project in the future.",
      image: investmentHelperPic,
      tech: [
      <FaPython size={24} color="#3776AB" />,
      <SiJupyter size={24} color="#F37626" />,
      <SiPandas size={24} color="#150458" />,
      <SiSqlite size={24} color="#003B57" />,
    ],
  },
  {
    title: "SnackNTrack",
    description: "A CMPUT 301 group project where we built an Android application that helps people manage their food storage, create cooking recipes, and plan their meals.",
    image: snackNTrackPic,
    tech: [
      <FaJava size={24} color="#007ACC" />,
      <FaAndroid size={24} color="#3DDC84" />,
      <SiFirebase size={24} color="#FFCA28" />,
    ],
    github: "https://github.com/CMPUT301F22T18/SnackNTrack",
  }
];
