import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import ProjectTile from "./ProjectTile";
import { notableProjects, otherProjects } from "../data/ProjectData";

// ---------------------------
// Projects Component
// ---------------------------
const Projects = () => {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      {/* Section Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          color: "white",
        }}
      >
        My Projects
      </Typography>

      {/* =======================
          NOTABLE PROJECTS
      ======================= */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 3,
          color: "white",
        }}
      >
        Notable Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
        {notableProjects.map((project, index) => (
          <ProjectTile
            project={project}
            index={index}
            gridSize={{ xs: 12, md: 6 }}
            imageHeight={240}
          />
        ))}
      </Grid>

      {/* =======================
          OTHER PROJECTS
      ======================= */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 3,
          color: "white",
        }}
      >
        Other Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {otherProjects.map((project, index) => (
          <ProjectTile
            project={project}
            index={index}
            gridSize={{ xs: 12, sm: 6, md: 4 }}
            imageHeight={160}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
