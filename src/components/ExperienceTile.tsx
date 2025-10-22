import type { Experience } from "../types/Experience";
import { Box, Grid, Typography } from "@mui/material";
import { themeColors } from "../constants/colors";

interface ExperienceTileProps {
  exp: Experience;
  index: number;
}

const ExperienceTile = ({ exp, index }: ExperienceTileProps) => {
  return (
    <Grid key={index} sx={{ position: "relative" }}>
      {/* The dot on the line */}
      <Box
        sx={{
          position: "absolute",
          left: -14,
          top: 8,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: themeColors.primary2,
          border: "3px solid white",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      />

      {/* Experience Content */}
      <Box sx={{ ml: 6 }}>
        {/* Role */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: themeColors.primary2, // still matches the pink in your theme
            textShadow: "0 0 6px rgba(224,195,252,0.4)", // soft glow
            mb: 0.5,
          }}
        >
          {exp.role}
        </Typography>

        {/* Company */}
        <Typography
          variant="subtitle1"
          sx={{ color: "rgba(255,255,255,0.85)", mb: 0.5 }}
        >
          {exp.company}
        </Typography>

        {/* Location */}
        <Typography
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5 }}
        >
          {exp.location}
        </Typography>

        {/* Duration */}
        <Typography
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.6)", mb: 2 }}
        >
          {exp.duration}
        </Typography>

        {/* Achievements */}
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          {exp.achievements.map((achievement, i) => (
            <Typography
              key={i}
              component="li"
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.9)",
                mb: 1.5,
                lineHeight: 1.6,
              }}
            >
              {achievement}
            </Typography>
          ))}
        </Box>

        {/* Tech Stack Icons */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {exp.tech.map((icon, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {icon}
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default ExperienceTile;
