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
});
