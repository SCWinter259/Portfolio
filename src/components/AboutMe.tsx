import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiDocker, SiMongodb, SiPostgresql } from "react-icons/si";
import profilePic from "../assets/profile.jpg";

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
        I'm a software developer passionate about building full-stack web
        applications using modern frameworks and tools. I work with a variety of
        technologies, from frontend frameworks like React to backend systems and
        cloud platforms.
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
        <IconButton sx={{ color: "#61dafb" }} aria-label="React">
          <FaReact size={40} />
        </IconButton>

        <IconButton sx={{ color: "#3178c6" }} aria-label="TypeScript">
          <SiTypescript size={36} />
        </IconButton>

        <IconButton sx={{ color: "#68a063" }} aria-label="Node.js">
          <FaNodeJs size={40} />
        </IconButton>

        <IconButton sx={{ color: "#13aa52" }} aria-label="MongoDB">
          <SiMongodb size={36} />
        </IconButton>

        <IconButton sx={{ color: "#336791" }} aria-label="PostgreSQL">
          <SiPostgresql size={36} />
        </IconButton>

        <IconButton sx={{ color: "#0db7ed" }} aria-label="Docker">
          <SiDocker size={36} />
        </IconButton>

        <IconButton sx={{ color: "#f1502f" }} aria-label="Git">
          <FaGitAlt size={40} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AboutMe;