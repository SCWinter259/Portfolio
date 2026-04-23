import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { FaGithub, FaYoutube } from "react-icons/fa";
import type { Project } from "../types/Project";
import { iconColors, themeColors } from "../constants/colors";

interface ProjectTileProps {
  project: Project;
  variant: "featured" | "compact";
}

const ProjectTile = ({ project, variant }: ProjectTileProps) => {
  const isSmall = useMediaQuery("(max-width:900px)");

  if (variant === "featured") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmall ? "column" : "row",
          borderRadius: 3,
          border: `1px solid ${themeColors.surfaceBorder}`,
          backgroundColor: themeColors.surface,
          overflow: "hidden",
          transition: "all 0.4s ease",
          "&:hover": {
            borderColor: themeColors.accent,
            boxShadow: "0 0 30px rgba(192, 132, 252, 0.1)",
            transform: "translateY(-2px)",
          },
        }}
      >
        <Box
          sx={{
            width: isSmall ? "100%" : 380,
            minHeight: isSmall ? 200 : 240,
            flexShrink: 0,
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: themeColors.text, mb: 1 }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: themeColors.textMuted,
              mb: 2,
              lineHeight: 1.7,
              fontSize: "0.88rem",
            }}
          >
            {project.description}
          </Typography>

          <Box sx={{ display: "flex", gap: 0.75, flexWrap: "wrap", mb: 2 }}>
            {project.tech.map((tech, i) => (
              <Box
                key={i}
                sx={{
                  backgroundColor: "rgba(192, 132, 252, 0.08)",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(192, 132, 252, 0.18)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            {project.github && (
              <IconButton
                href={project.github}
                target="_blank"
                size="small"
                sx={{
                  color: themeColors.textMuted,
                  transition: "color 0.3s ease",
                  "&:hover": { color: iconColors.github },
                }}
              >
                <FaGithub size={18} />
              </IconButton>
            )}
            {project.demoVideo && (
              <IconButton
                href={project.demoVideo}
                target="_blank"
                size="small"
                sx={{
                  color: themeColors.textMuted,
                  transition: "color 0.3s ease",
                  "&:hover": { color: iconColors.youtube },
                }}
              >
                <FaYoutube size={18} />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        borderRadius: 3,
        border: `1px solid ${themeColors.surfaceBorder}`,
        backgroundColor: themeColors.surface,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.4s ease",
        "&:hover": {
          borderColor: themeColors.accent,
          boxShadow: "0 0 25px rgba(192, 132, 252, 0.1)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        sx={{
          height: 140,
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      <Box
        sx={{
          p: 2.5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: themeColors.text, mb: 1 }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: themeColors.textMuted,
            fontSize: "0.8rem",
            lineHeight: 1.6,
            mb: 2,
            flex: 1,
          }}
        >
          {project.description}
        </Typography>

        <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mb: 1.5 }}>
          {project.tech.map((tech, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: "rgba(192, 132, 252, 0.06)",
                borderRadius: "50%",
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
          {project.github && (
            <IconButton
              href={project.github}
              target="_blank"
              size="small"
              sx={{
                color: themeColors.textMuted,
                p: 0.5,
                "&:hover": { color: iconColors.github },
              }}
            >
              <FaGithub size={16} />
            </IconButton>
          )}
          {project.demoVideo && (
            <IconButton
              href={project.demoVideo}
              target="_blank"
              size="small"
              sx={{
                color: themeColors.textMuted,
                p: 0.5,
                "&:hover": { color: iconColors.youtube },
              }}
            >
              <FaYoutube size={16} />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectTile;
