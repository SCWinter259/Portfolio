import { Box, Typography, Avatar, Button, Stack, useMediaQuery } from "@mui/material";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiPython, SiTailwindcss } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { HiOutlineDocumentText } from "react-icons/hi";
import profilePic from "../assets/profile.jpg";
import { iconColors } from "../constants/colors";
import resume from "../assets/Casper_Nguyen_Resume.pdf";

const AboutMe = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // center vertically
        alignItems: "center",
        minHeight: "75vh",
        textAlign: "center",
        px: 3,
      }}
    >
      {/* Profile + Text Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          mb: 4,
          maxWidth: 1000,
        }}
      >
        {/* Profile Picture */}
        <Avatar
          src={profilePic}
          alt="Casper Nguyen"
          sx={{
            width: 160,
            height: 160,
            border: "3px solid white",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        />

        {/* Description */}
        <Box
          sx={{
            maxWidth: 550,
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Hi, I'm Casper!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.8,
              letterSpacing: "0.015em",
            }}
          >
            I'm a Computing Science Graduate from the University of Alberta with
            close to 2 years of industry experience. I have a strong focus on
            full-stack web development, but I’m also skilled in related areas —
            including mobile development, automation pipelines, testing, and
            professional documentation writing.
          </Typography>
        </Box>
      </Box>

      {/* 🔗 Social Buttons */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mb: 5,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* LinkedIn */}
        <Button
          variant="contained"
          startIcon={<FaLinkedin />}
          href="https://www.linkedin.com/in/casper-nguyen-298302215/"
          target="_blank"
          sx={{
            backgroundColor: "#0a66c2",
            color: "white",
            "&:hover": {
              backgroundColor: "#004182",
            },
          }}
        >
          LinkedIn
        </Button>

        {/* GitHub */}
        <Button
          variant="contained"
          startIcon={<FaGithub />}
          href="https://github.com/SCWinter259"
          target="_blank"
          sx={{
            backgroundColor: "#24292e",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          GitHub
        </Button>

        {/* Resume */}
        <Button
          variant="contained"
          startIcon={<HiOutlineDocumentText />}
          href={resume}
          target="_blank"
          sx={{
            background: "linear-gradient(135deg, #8EC5FC 0%, #E0C3FC 100%)",
            color: "black",
            fontWeight: 500,
            "&:hover": {
              background: "linear-gradient(135deg, #A8C9FF 0%, #EAD3FF 100%)",
            },
          }}
        >
          Resume
        </Button>
      </Stack>

      {/* Tech Stack Heading */}
      <Typography
        variant="subtitle1"
        sx={{
          mb: 2,
          fontWeight: 500,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        Some tools I commonly use include:
      </Typography>

      {/* Tech Icons */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SiPython size={40} color={iconColors.python} />
        <SiTypescript size={40} color={iconColors.typescript} />
        <FaReact size={40} color={iconColors.react} />
        <SiTailwindcss size={40} color={iconColors.tailwindcss} />
        <FaNodeJs size={40} color={iconColors.nodejs} />
        <VscAzure size={40} color={iconColors.azure} />
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          pt: 4,
          mb: 2,
          fontWeight: 400,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        Want to connect? Shoot me a message on LinkedIn, or email me at nguyentrungycs@gmail.com
      </Typography>
    </Box>
  );
};

export default AboutMe;
