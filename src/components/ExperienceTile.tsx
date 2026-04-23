import { Box, Typography } from "@mui/material";
import type { Experience } from "../types/Experience";
import { themeColors } from "../constants/colors";

interface ExperienceTileProps {
  exp: Experience;
}

const ExperienceTile = ({ exp }: ExperienceTileProps) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        border: `1px solid ${themeColors.surfaceBorder}`,
        borderLeft: `3px solid ${themeColors.accent}`,
        backgroundColor: themeColors.surface,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: themeColors.accent,
          backgroundColor: themeColors.surfaceHover,
          transform: "translateX(4px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 1,
          mb: 1,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: themeColors.text,
              fontSize: "1.05rem",
            }}
          >
            {exp.role}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: themeColors.accent, fontWeight: 500 }}
          >
            {exp.company}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography
            variant="body2"
            sx={{ color: themeColors.textMuted, fontSize: "0.8rem" }}
          >
            {exp.duration}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: themeColors.textSubtle, fontSize: "0.75rem" }}
          >
            {exp.location}
          </Typography>
        </Box>
      </Box>

      <Box component="ul" sx={{ pl: 2.5, mt: 2, mb: 2 }}>
        {exp.achievements.map((a, i) => (
          <Typography
            key={i}
            component="li"
            variant="body2"
            sx={{
              color: themeColors.textMuted,
              mb: 1,
              lineHeight: 1.7,
              fontSize: "0.85rem",
            }}
          >
            {a}
          </Typography>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 0.75, flexWrap: "wrap" }}>
        {exp.tech.map((icon, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: "rgba(192, 132, 252, 0.06)",
              borderRadius: "50%",
              width: 32,
              height: 32,
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
            {icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceTile;
