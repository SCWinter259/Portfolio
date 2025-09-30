import { Box, Typography, Grid } from "@mui/material";
import { experiences } from "../data/ExperienceData";
import ExperienceTile from "./ExperienceTile";

const Experiences: React.FC = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        px: { xs: 2, md: 8 },
        color: "white",
        position: "relative",
        maxWidth: "1000px",
        mx: "auto",
        borderRadius: "20px",
        backgroundColor: "rgba(75, 75, 100, 0.30)", // slightly lighter
        backdropFilter: "blur(12px)", // smooth glass effect
        border: "1px solid rgba(255,255,255,0.05)", // soft, subtle border
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)", // softer shadow
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 6,
          textAlign: "center",
        }}
      >
        Experiences
      </Typography>

      <Box
        sx={{
          position: "relative",
          maxWidth: "900px",
          mx: "auto",
          pl: 8, // Space for timeline
        }}
      >
        {/* Vertical Timeline Line */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "48px",
            width: "4px", // increased from 2px
            height: "100%",
            backgroundColor: "#e0c3fc", // brighter
            zIndex: 1,
            borderRadius: "2px", // optional, for smoother edges
          }}
        />

        {/* Timeline Items */}
        <Grid container direction="column" spacing={6}>
          {experiences.map((exp, index) => (
            <ExperienceTile exp={exp} index={index} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Experiences;
