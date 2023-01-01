import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4B59C4",
    },
    secondary: {
      main: "#F3F8FF",
    },
    ternary: {
      main: "#9E9E9E",
    },
    contrastThreshold: 4.5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
