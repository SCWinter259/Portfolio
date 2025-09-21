import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/600.css"; // Semi-Bold
import "@fontsource/poppins/700.css"; // Bold

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme.ts";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
