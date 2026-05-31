import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { themeColors } from "../constants/colors";

const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(Math.max(0, 1 - window.scrollY / 600));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themeColors.bg,
        overflow: "hidden",
        opacity,
        transition: "opacity 0.1s linear",
      }}
    >
      {/* Aurora background */}
      <div className="aurora-bg">
        <div className="aurora-blob-3" />
      </div>

      {/* Cursor glow */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(192, 132, 252, 0.07), transparent 70%)",
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          pointerEvents: "none",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ position: "relative", zIndex: 2, textAlign: "center" }}
      >
        <motion.div variants={fadeUp}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: themeColors.text,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.8rem" },
              mb: 1.5,
              letterSpacing: "-0.02em",
            }}
          >
            Casper Nguyen
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Typography
            variant="h5"
            sx={{
              background: `linear-gradient(135deg, ${themeColors.accent}, ${themeColors.accentBright})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 500,
              mb: 2.5,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Software Engineer / AI Engineer
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Typography
            variant="body1"
            sx={{
              color: themeColors.textMuted,
              maxWidth: 480,
              mx: "auto",
              mb: 4,
              lineHeight: 1.7,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            I build modern applications with a passion for clean code and
            great user experiences.
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Stack direction="row" spacing={1.5} justifyContent="center">
            <IconButton
              href="https://github.com/SCWinter259"
              target="_blank"
              sx={{
                color: themeColors.textMuted,
                border: `1px solid ${themeColors.surfaceBorder}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: themeColors.accent,
                  borderColor: themeColors.accent,
                  backgroundColor: "rgba(192, 132, 252, 0.1)",
                },
              }}
            >
              <FaGithub size={20} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/casper-nguyen-298302215/"
              target="_blank"
              sx={{
                color: themeColors.textMuted,
                border: `1px solid ${themeColors.surfaceBorder}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: themeColors.accent,
                  borderColor: themeColors.accent,
                  backgroundColor: "rgba(192, 132, 252, 0.1)",
                },
              }}
            >
              <FaLinkedin size={20} />
            </IconButton>
          </Stack>
        </motion.div>
      </motion.div>

      {/* Scroll arrow */}
      <Box
        onClick={scrollToContent}
        sx={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          color: themeColors.textSubtle,
          transition: "color 0.3s ease",
          zIndex: 2,
          "&:hover": { color: themeColors.accent },
        }}
      >
        <KeyboardArrowDownIcon
          sx={{ fontSize: 36, animation: "bounce 1.5s infinite" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
