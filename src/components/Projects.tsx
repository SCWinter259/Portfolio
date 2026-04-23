import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { notableProjects, otherProjects } from "../data/ProjectData";
import ProjectTile from "./ProjectTile";
import { themeColors } from "../constants/colors";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Box ref={ref} sx={{ maxWidth: 1100, mx: "auto" }}>
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
            mb: 1.5,
            textAlign: "center",
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: themeColors.textSubtle,
            textAlign: "center",
            mb: 6,
            maxWidth: 400,
            mx: "auto",
          }}
        >
          A selection of things I've built
        </Typography>
      </motion.div>

      {/* Featured */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: themeColors.textSubtle,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: "0.75rem",
            mb: 3,
          }}
        >
          Featured
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 8 }}>
        {notableProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
          >
            <ProjectTile project={project} variant="featured" />
          </motion.div>
        ))}
      </Box>

      {/* Other Work */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: themeColors.textSubtle,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: "0.75rem",
            mb: 3,
          }}
        >
          Other Work
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {otherProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
          >
            <ProjectTile project={project} variant="compact" />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
