import { createTheme } from "@mui/material/styles";
import { themeColors } from "./constants/colors";

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
    background: { default: themeColors.bg, paper: themeColors.surface },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

export default theme;
