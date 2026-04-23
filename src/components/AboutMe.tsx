import { useRef } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiPython, SiTailwindcss } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import profilePic from "../assets/profile.jpg";
import { iconColors, themeColors } from "../constants/colors";

const techStack = [
  { icon: <SiPython size={28} />, color: iconColors.python, label: "Python" },
  {
    icon: <SiTypescript size={28} />,
    color: iconColors.typescript,
    label: "TypeScript",
  },
  { icon: <FaReact size={28} />, color: iconColors.react, label: "React" },
  {
    icon: <SiTailwindcss size={28} />,
    color: iconColors.tailwindcss,
    label: "Tailwind",
  },
  {
    icon: <FaNodeJs size={28} />,
    color: iconColors.nodejs,
    label: "Node.js",
  },
  { icon: <VscAzure size={28} />, color: iconColors.azure, label: "Azure" },
];

const AboutMe = () => {
  const isSmall = useMediaQuery("(max-width:900px)");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Box ref={ref} sx={{ maxWidth: 1000, mx: "auto" }}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: themeColors.text,
            mb: 6,
            textAlign: "center",
          }}
        >
          About Me
        </Typography>
      </motion.div>

      {/* Profile + Bio */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmall ? "column" : "row",
          alignItems: "center",
          gap: 6,
          mb: 6,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Avatar
            src={profilePic}
            alt="Casper Nguyen"
            sx={{
              width: 180,
              height: 180,
              border: "3px solid transparent",
              background: `linear-gradient(${themeColors.bg}, ${themeColors.bg}) padding-box, linear-gradient(135deg, ${themeColors.accent}, ${themeColors.accentBright}) border-box`,
              boxShadow: "0 0 40px rgba(192, 132, 252, 0.15)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box sx={{ textAlign: isSmall ? "center" : "left", maxWidth: 550 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: themeColors.text, mb: 2 }}
            >
              Hi, I'm Casper!
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: themeColors.textMuted, lineHeight: 1.8, mb: 3 }}
            >
              I'm a Computing Science Graduate from the University of Alberta
              with close to 2 years of industry experience. I have a strong
              focus on full-stack web development, but I'm also skilled in
              related areas — including mobile development, automation
              pipelines, testing, and professional documentation writing.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: isSmall ? "center" : "flex-start" }}
            >
              <IconButton
                href="https://www.linkedin.com/in/casper-nguyen-298302215/"
                target="_blank"
                size="small"
                sx={{
                  color: themeColors.textMuted,
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#0a66c2" },
                }}
              >
                <FaLinkedin size={20} />
              </IconButton>
              <IconButton
                href="https://github.com/SCWinter259"
                target="_blank"
                size="small"
                sx={{
                  color: themeColors.textMuted,
                  transition: "all 0.3s ease",
                  "&:hover": { color: themeColors.text },
                }}
              >
                <FaGithub size={20} />
              </IconButton>
              <IconButton
                href="mailto:nguyentrungycs@gmail.com"
                size="small"
                sx={{
                  color: themeColors.textMuted,
                  transition: "all 0.3s ease",
                  "&:hover": { color: themeColors.accent },
                }}
              >
                <HiOutlineMail size={20} />
              </IconButton>
            </Stack>
          </Box>
        </motion.div>
      </Box>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: "center",
            color: themeColors.textSubtle,
            mb: 3,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: "0.75rem",
          }}
        >
          Tools I work with
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {techStack.map(({ icon, color, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  p: 2,
                  borderRadius: 2,
                  border: `1px solid ${themeColors.surfaceBorder}`,
                  backgroundColor: themeColors.surface,
                  transition: "all 0.3s ease",
                  cursor: "default",
                  color,
                  minWidth: 80,
                  "&:hover": {
                    borderColor: color,
                    backgroundColor: `${color}15`,
                    transform: "translateY(-4px)",
                    boxShadow: `0 8px 25px ${color}20`,
                  },
                }}
              >
                {icon}
                <Typography
                  variant="caption"
                  sx={{ color: themeColors.textMuted, fontSize: "0.7rem" }}
                >
                  {label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default AboutMe;
