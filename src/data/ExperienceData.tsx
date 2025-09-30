import {
  FaReact,
  FaPython,
  FaGitlab,
  FaConfluence,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiCplusplus,
  SiGnubash,
  SiSubversion,
  SiGitbook,
  SiJira,
  SiRedux,
  SiExpo,
  SiJavascript,
  SiSemanticui,
  SiDjango,
  SiPostgresql,
  SiSelenium,
  SiHeroku,
} from "react-icons/si";
import type { Experience } from "../types/Experience";
import { iconColors } from "../constants/colors";

export const experiences: Experience[] = [
  {
    company: "Imagine Cities",
    role: "Software Developer",
    duration: "May 2025 - Present",
    location: "Remote",
    achievements: [
      "Transforming Imagine Cities' website from a Django SSR site to a React front-end to reduce server load/costs and improve user experience.",
    ],
    tech: [
      <SiTypescript size={20} color={iconColors.typescript} />,
      <FaReact size={20} color={iconColors.react} />,
      <SiTailwindcss size={20} color={iconColors.tailwindcss} />,
    ],
  },
  {
    company: "BlackBerry",
    role: "Software Developer / Technical Writer Student",
    duration: "Jan 2024 - Aug 2024",
    location: "Waterloo, ON",
    achievements: [
      "Engineered and deployed 2 data connectors (seat weight, car speed) using C++ and the BlackBerry IVY platform, running on QNX OS emulated with QEMU.",
      "Resolved critical production failures by debugging and restoring 2 GitLab CI/CD pipelines, leveraging Python and the Jira API to improve average runtime by 6%.",
      "Enhanced team productivity by developing a BASH script that automated and streamlined the QNX TechPubs onboarding process for new Linux-based team members.",
      "Contributed to improve developer experience on the BlackBerry IVY platform by authoring comprehensive framework documentation and technical guides.",
    ],
    tech: [
      <FaPython size={20} color={iconColors.python} />,
      <FaGitlab size={20} color={iconColors.gitlab} />,
      <SiCplusplus size={20} color={iconColors.cpp} />,
      <SiGnubash size={20} color={iconColors.bash} />,
      <SiSubversion size={20} color={iconColors.svn} />,
      <SiGitbook size={20} color={iconColors.gitbook} />,
      <SiJira size={20} color={iconColors.jira} />,
      <FaConfluence size={20} color={iconColors.confluence} />,
    ],
  },
  {
    company: "Amelia",
    role: "Software Engineer Intern",
    duration: "Oct 2023 - Dec 2023",
    location: "Remote",
    achievements: [
      "Developed and shipped new features for a production iOS application, resolving critical bugs using React Native and TypeScript.",
      "Devised an Expo-based workaround to overcome critical compatibility issues with legacy tooling.",
    ],
    tech: [
      <SiTypescript size={20} color={iconColors.typescript} />,
      <FaReact size={20} color={iconColors.react} />,
      <SiRedux size={20} color={iconColors.redux} />,
      <SiExpo size={20} color={iconColors.expo} />,
    ],
  },
  {
    company: "Imagine Cities",
    role: "Software Developer",
    duration: "Sep 2023 - Dec 2023",
    location: "Edmonton, AB",
    achievements: [
      "Co-developed a full-stack community project listing portal using Python and Django.",
      "Ensured code quality and reliability by authoring comprehensive Django unit and Selenium integration tests, achieving 80% code coverage.",
      "Implemented a CI/CD pipeline using GitHub Actions and Cybera Cloud to automate testing and deployment, improving the development workflow.",
    ],
    tech: [
      <FaHtml5 size={20} color={iconColors.html} />,
      <FaCss3 size={20} color={iconColors.css} />,
      <SiJavascript size={20} color={iconColors.javascript} />,
      <SiSemanticui size={20} color={iconColors.semanticui} />,
      <SiDjango size={20} color={iconColors.django} />,
      <SiPostgresql size={20} color={iconColors.postgresql} />,
      <SiSelenium size={20} color={iconColors.selenium} />,
      <SiHeroku size={20} color={iconColors.heroku} />,
    ],
  },
];
