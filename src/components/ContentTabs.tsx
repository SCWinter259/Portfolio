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
        background: "linear-gradient(to bottom, #8ec5fc, #5a9bd4)", // Smooth continuation from hero
        minHeight: "100vh",
        color: "white",
        pt: 4,
        pb: 8,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: "95%", sm: "80%", md: "70%" },
          mx: "auto",
          backgroundColor: "rgba(255,255,255,0.08)", // subtle transparent card
          borderRadius: 3,
          p: 3,
          backdropFilter: "blur(12px)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
          },
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
      </Paper>
    </Box>
  );
};

export default ContentTabs;
