import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface HeroProps {
  handleMoveToContent: () => void;
}

const Hero = ({handleMoveToContent}: HeroProps) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 500; // where it's fully gone
      const newOpacity = Math.max(fadeStart, 1 - scrollY / fadeEnd);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        background: "linear-gradient(to bottom, #e0c3fc, #8ec5fc)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-out",
        opacity,
      }}
    >
      <Container sx={{ textAlign: "center", color: "white" }}>
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
          Casper Nguyen
        </Typography>
        <Typography variant="h5" gutterBottom>
          Software Developer
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Passionate about building modern web applications with React and
          TypeScript
        </Typography>
      </Container>

      <Box
      onClick={handleMoveToContent}
      sx={{
        position: "absolute",
        bottom: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        color: "white",
        transition: "color 0.3s ease",
        "&:hover": {
          color: "#e0c3fc",
        },
      }}
    >
      {/* Dancing Arrow */}
      <KeyboardArrowDownIcon
        sx={{
          fontSize: 60,
          animation: "bounce 1.5s infinite",
          "@keyframes bounce": {
            "0%, 100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(8px)",
            },
          },
        }}
      />

      {/* Scroll Down Text */}
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          fontSize: "0.9rem",
          letterSpacing: 1,
          color: "rgba(255,255,255,0.85)",
          textTransform: "uppercase",
        }}
      >
        Scroll Down
      </Typography>
    </Box>
    </Box>
  );
};

export default Hero;
