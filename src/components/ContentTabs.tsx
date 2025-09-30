import { useState } from "react";
import { Box, Tabs, Tab, Slide } from "@mui/material";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experiences from "./Experiences";

const ContentTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tabContent = [
    <AboutMe key={0} />,
    <Projects key={1} />,
    <Experiences key={2} />,
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(to top, #e0c3fc, #8ec5fc)",
        minHeight: "100vh",
        color: "white",
        pt: 4,
        pb: 8,
        px: 4,
        overflow: "hidden", // prevents content cutoff during slide
      }}
    >
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        textColor="inherit"
        indicatorColor="secondary"
        sx={{
          "& .MuiTab-root": {
            color: "rgba(255,255,255,0.85)",
            textTransform: "none",
            fontSize: "1.05rem",
            fontWeight: 500,
            minWidth: 120,
            px: 3,
            transition: "all 0.3s ease",
            "&:hover": { color: "#f0e6ff" },
            "&.Mui-selected": { fontWeight: "bold", color: "#e0c3fc" },
          },
          "& .MuiTabs-indicator": { backgroundColor: "#e0c3fc", height: 3, borderRadius: 2 },
        }}
      >
        <Tab label="About Me" />
        <Tab label="Projects" />
        <Tab label="Experiences" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ mt: 4, px: { xs: 1, sm: 3 }, py: 2, minHeight: "600px", position: "relative" }}>
        {tabContent.map((content, index) => (
          <Slide
            key={index}
            direction="right" // always slide in from the right
            in={activeTab === index}
            mountOnEnter
            unmountOnExit
            timeout={500}
          >
            <Box sx={{ width: "100%" }}>{content}</Box>
          </Slide>
        ))}
      </Box>
    </Box>
  );
};

export default ContentTabs;
