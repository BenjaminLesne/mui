import {
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  AppBar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import { Logo } from "../../assets/Logo";
import {
  toolbarStyle,
  logoWrapper,
  navLinksStyle,
  burgerButtonStyle,
  appBarStyle,
} from "./styles";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navLabelLinks = [
    "Accueil",
    "Profile",
    "Le Tiers-lab",
    "Nos services",
    "A propos",
  ];
  return (
    <Container maxWidth="lg" disableGutters>
      <AppBar position="static" sx={appBarStyle}>
        <Toolbar sx={toolbarStyle}>
          <Box sx={logoWrapper}>
            <Logo />
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={burgerButtonStyle}
          >
            <MenuIcon />
          </IconButton>

          <List sx={navLinksStyle}>
            {navLabelLinks.map((label) => (
              <ListItem disablePadding key={crypto.randomUUID()}>
                <ListItemButton>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
