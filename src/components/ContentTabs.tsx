import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Projects from "./Projects";
import Experience from "./Experience";
import AboutMe from "./AboutMe";

const ContentTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to top, #e0c3fc, #8ec5fc)", // Smooth continuation from hero
        minHeight: "100vh",
        color: "white",
        pt: 4,
        pb: 8,
        px: 4,
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
            color: "rgba(255,255,255,0.85)", // Softer white text
            textTransform: "none",
            fontSize: "1.05rem",
            fontWeight: 500,
            minWidth: 120, // Wider tabs
            px: 3, // Extra padding for comfortable clicking
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#f0e6ff", // Subtle brightening on hover
            },
            "&.Mui-selected": {
              fontWeight: "bold",
              color: "#e0c3fc", // Highlighted text
            },
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#e0c3fc",
            height: 3,
            borderRadius: 2,
          },
        }}
      >
        <Tab label="About Me" />
        <Tab label="Projects" />
        <Tab label="Experience" />
      </Tabs>

      {/* Tab Content */}
      <Box
        sx={{
          mt: 4,
          px: { xs: 1, sm: 3 },
          py: 2,
          color: "rgba(255,255,255,0.9)", // Softer content text
        }}
      >
        {activeTab === 0 && <AboutMe />}
        {activeTab === 1 && <Projects />}
        {activeTab === 2 && <Experience />}
      </Box>
    </Box>
  );
};

export default ContentTabs;
