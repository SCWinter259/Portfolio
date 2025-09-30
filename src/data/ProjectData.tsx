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
  SiFirebase,
  SiSelenium
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
import { iconColors } from "../constants/colors";

export const notableProjects: Project[] = [
  {
    title: "PeakCV",
    description:
      "An AI-powered web application that tailors resumes for software engineers based on the job description.",
    image: peakcvPic,
    tech: [
      <SiTypescript size={24} color={iconColors.typescript} />,
      <FaReact size={24} color={iconColors.react} />,
      <SiRedux size={24} color={iconColors.redux} />,
      <SiTailwindcss size={24} color={iconColors.tailwindcss} />,
      <SiExpress size={24} color={iconColors.express} />,
      <FaNodeJs size={24} color={iconColors.nodejs} />,
      <SiGooglegemini size={24} color={iconColors.googlegemini} />,
      <FaDocker size={24} color={iconColors.docker} />,
      <VscAzure size={24} color={iconColors.azure} />,
    ],
    github: "https://github.com/SCWinter259/PeakCV",
    demoVideo: "https://youtu.be/e5-qzMbI98Y",
  },
  {
    title: "FinShark",
    description:
      "A finance web application that allows users to search for publicly traded companies, view their financial reports and price chart, make comments on a ticker, as well as adding them to a portfolio.",
    image: finSharkPic,
    tech: [
      <SiTypescript size={24} color={iconColors.typescript} />,
      <FaReact size={24} color={iconColors.react} />,
      <SiRedux size={24} color={iconColors.redux} />,
      <SiTailwindcss size={24} color={iconColors.tailwindcss} />,
      <TbBrandCSharp size={24} color={iconColors.csharp} />,
      <SiDotnet size={24} color={iconColors.dotnet} />,
      <DiMsqlServer size={24} color={iconColors.mssql} />,
      <VscAzure size={24} color={iconColors.azure} />,
    ],
    github: "https://github.com/SCWinter259/FinShark",
    demoVideo: "https://youtu.be/6lxHo6N4gjM",
  },
  {
    title: "Memories",
    description:
      "A social media web application that allows users to post pictures along with their notes, as well as like and comment on other posts.",
    image: memoriesPic,
    tech: [
      <SiTypescript size={24} color={iconColors.typescript} />,
      <FaReact size={24} color={iconColors.react} />,
      <SiRedux size={24} color={iconColors.redux} />,
      <SiMui size={24} color={iconColors.materialui} />,
      <SiJavascript size={24} color={iconColors.javascript} />,
      <SiExpress size={24} color={iconColors.express} />,
      <FaNodeJs size={24} color={iconColors.nodejs} />,
      <SiMongodb size={24} color={iconColors.mongodb} />,
      <SiHeroku size={24} color={iconColors.heroku} />,
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
      <FaHtml5 size={24} color={iconColors.html} />,
      <FaCss3 size={24} color={iconColors.css} />,
      <SiJavascript size={24} color={iconColors.javascript} />,
      <FaBootstrap size={24} color={iconColors.bootstrap} />,
      <SiDjango size={24} color={iconColors.django} />,
      <SiPostgresql size={24} color={iconColors.postgresql} />,
      <SiHeroku size={24} color={iconColors.heroku} />,
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
      <FaHtml5 size={24} color={iconColors.html} />,
      <FaCss3 size={24} color={iconColors.css} />,
      <SiJavascript size={24} color={iconColors.javascript} />,
      <SiSemanticui size={24} color={iconColors.semanticui} />,
      <SiDjango size={24} color={iconColors.django} />,
      <SiPostgresql size={24} color={iconColors.postgresql} />,
      <SiSelenium size={24} color={iconColors.selenium} />,
      <SiHeroku size={24} color={iconColors.heroku} />,
    ],
    demoVideo: "https://youtu.be/FH9vAE26MeM?si=__G9yQqy3phnSQNM"
  },
  {
    title: "DB Streaming 1",
    description:
      "A CMPUT 291 database project that simulates a movie streaming service where people can watch movies and follow cast members.",
    image: dbStreamingPic,
    tech: [
      <FaPython size={24} color={iconColors.python} />,
      <SiStreamlit size={24} color={iconColors.streamlit} />,
      <SiSqlite size={24} color={iconColors.sqlite} />,
    ],
    github: "https://github.com/SCWinter259/CMPUT291_DBSTREAMING_1",
  },
  {
    title: "Investment Helper",
    description:
      "Some utility tools to help me re-balance my investment portfolio and track my dividends. They are to be incorporated into the FinShark project in the future.",
      image: investmentHelperPic,
      tech: [
      <FaPython size={24} color={iconColors.python} />,
      <SiJupyter size={24} color={iconColors.jupyter} />,
      <SiPandas size={24} color={iconColors.pandas} />,
      <SiSqlite size={24} color={iconColors.sqlite} />,
    ],
  },
  {
    title: "SnackNTrack",
    description: "A CMPUT 301 group project where we built an Android application that helps people manage their food storage, create cooking recipes, and plan their meals.",
    image: snackNTrackPic,
    tech: [
      <FaJava size={24} color={iconColors.java} />,
      <FaAndroid size={24} color={iconColors.android} />,
      <SiFirebase size={24} color={iconColors.firebase} />,
    ],
    github: "https://github.com/CMPUT301F22T18/SnackNTrack",
  }
];
