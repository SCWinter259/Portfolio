import { useState } from "react";
import { Box, Tabs, Tab, Paper } from "@mui/material";
import Projects from "./Projects";
import Experience from "./Experience";

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
              color: "white",
              textTransform: "none",
              fontSize: "1rem",
              "&.Mui-selected": { fontWeight: "bold", color: "#e0c3fc" },
            },
            "& .MuiTabs-indicator": { backgroundColor: "#e0c3fc" },
          }}
        >
          <Tab label="Projects" />
          <Tab label="Experience" />
        </Tabs>

        {/* Tab Content */}
        <Box sx={{ mt: 4 }}>
          {activeTab === 0 && <Projects />}
          {activeTab === 1 && <Experience />}
        </Box>
    </Box>
  );
};

export default ContentTabs;
