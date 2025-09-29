import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
  CardActions,
  Button,
  type GridSize,
} from "@mui/material";
import { FaGithub, FaYoutube } from "react-icons/fa";
import type { Project } from "../types/Project";
import type { ResponsiveStyleValue } from '@mui/system';

interface ProjectTileProps {
  project: Project;
  index: number;
  gridSize: ResponsiveStyleValue<GridSize> | undefined;
  imageHeight: number;
}

const ProjectTile = ({ project, index, gridSize, imageHeight }: ProjectTileProps) => {
  return (
    <Grid key={index} size={gridSize}>
      <Card
        sx={{
          backgroundColor: "rgba(255,255,255,0.05)",
          color: "white",
          borderRadius: 3,
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <CardMedia
          component="img"
          height={imageHeight}
          image={project.image}
          alt={project.title}
          sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}
          >
            {project.description}
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {project.tech.map((tech, i) => (
              <Box
                key={i}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "50%", // circular background
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // perfectly center the icon
                  color: "white",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            px: 2,
            pb: 2,
          }}
        >
          {project.github && <Button
            size="small"
            startIcon={<FaGithub />}
            href={project.github}
            target="_blank"
            sx={{
              p: 1,
              color: "white",
              textTransform: "none",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
            }}
          >
            GitHub
          </Button>}

          {project.demoVideo && <Button
            size="small"
            startIcon={<FaYoutube />}
            href={project.demoVideo}
            target="_blank"
            sx={{
              p: 1,
              color: "white",
              textTransform: "none",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
            }}
          >
            Demo Video
          </Button>}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectTile;
