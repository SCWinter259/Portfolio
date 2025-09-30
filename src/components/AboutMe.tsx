import { Box, Typography, Avatar } from "@mui/material";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import profilePic from "../assets/profile.jpg";
import { iconColors } from "../constants/colors";
import { VscAzure } from "react-icons/vsc";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: 800,
        mx: "auto",
        px: 2,
      }}
    >
      {/* Profile Picture */}
      <Avatar
        src={profilePic}
        alt="Casper Nguyen"
        sx={{
          width: 140,
          height: 140,
          mb: 3,
          border: "3px solid white",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      />

      {/* Heading */}
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Hi, I'm Casper!
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 600,
          mb: 4,
          color: "rgba(255, 255, 255, 0.9)",
          lineHeight: 1.7,
        }}
      >
        I'm a Computing Science Graduate from the University of Alberta with
        close to 2 years of industry experience. I have a strong focus on
        full-stack web development, but I am also skilled in a range of related
        areas, including mobile development, building automation pipelines,
        testing, and even professional documentation writing.
      </Typography>

      {/* Tech Stack Heading */}
      <Typography
        variant="subtitle1"
        sx={{
          mt: 2,
          mb: 2,
          fontWeight: 500,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        Some tools I commonly use include:
      </Typography>

      {/* Tech Icons Row */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <SiPython size={40} color={iconColors.python} />
        <SiTypescript size={40} color={iconColors.typescript} />
        <FaReact size={40} color={iconColors.react} />
        <SiTailwindcss size={40} color={iconColors.tailwindcss} />
        <FaNodeJs size={40} color={iconColors.nodejs} />
        <VscAzure size={40} color={iconColors.azure} />
      </Box>
    </Box>
  );
};

export default AboutMe;
