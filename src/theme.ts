import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
    body1: { fontWeight: 400 },
    button: { textTransform: "none", fontWeight: 500 },
  },
  palette: {
    primary: { main: "#e0c3fc" }, // light purple
    secondary: { main: "#8ec5fc" }, // soft blue
    background: { default: "#8ec5fc", paper: "rgba(255,255,255,0.05)" },
    text: { primary: "#ffffff", secondary: "#cfcfcf" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth", // Smooth scrolling globally
        },
      },
    },
  },
});

export default theme;
