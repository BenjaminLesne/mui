import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";

import { Logo } from "../../assets/Logo";
import { toolbarStyle, logoWrapper } from "./styles";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={toolbarStyle}>
        <Box sx={logoWrapper}>
          <Logo />
        </Box>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
