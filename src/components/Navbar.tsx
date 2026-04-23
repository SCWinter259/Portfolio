import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { themeColors } from "../constants/colors";
import resume from "../assets/Casper_Nguyen_Resume.pdf";

const navLinks = [
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Experience", target: "experience" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 3, md: 6 },
        py: 1.5,
        backgroundColor: visible ? "rgba(10, 10, 26, 0.8)" : "transparent",
        backdropFilter: visible ? "blur(20px)" : "none",
        borderBottom: visible
          ? `1px solid ${themeColors.surfaceBorder}`
          : "1px solid transparent",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <Typography
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        sx={{
          fontWeight: 600,
          fontSize: "1.1rem",
          color: themeColors.text,
          cursor: "pointer",
          letterSpacing: "0.02em",
          "&:hover": { color: themeColors.accent },
          transition: "color 0.3s ease",
        }}
      >
        Casper Nguyen
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 3 } }}>
        {navLinks.map(({ label, target }) => (
          <Typography
            key={target}
            onClick={() => scrollTo(target)}
            sx={{
              fontSize: "0.9rem",
              color: themeColors.textMuted,
              cursor: "pointer",
              transition: "color 0.3s ease",
              position: "relative",
              "&:hover": { color: themeColors.accent },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -2,
                left: 0,
                width: 0,
                height: "2px",
                backgroundColor: themeColors.accent,
                transition: "width 0.3s ease",
              },
              "&:hover::after": { width: "100%" },
              display: { xs: "none", sm: "block" },
            }}
          >
            {label}
          </Typography>
        ))}
        <Button
          href={resume}
          target="_blank"
          size="small"
          sx={{
            border: `1px solid ${themeColors.accent}`,
            color: themeColors.accent,
            borderRadius: 2,
            px: 2,
            fontSize: "0.85rem",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(192, 132, 252, 0.1)",
              borderColor: themeColors.accentBright,
              color: themeColors.accentBright,
            },
          }}
        >
          Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
