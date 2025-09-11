import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({ light, onToggleTheme }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        border: `1px solid ${theme.palette.color}`,
        backgroundImage: `radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0),
       radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0)`,
        backgroundSize: "1.35rem 1.35rem",
        backgroundPosition: "0 0, 0.675rem 0.675rem",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <AppBar
        position="static"
        sx={{
          display: "flex",
          width: "auto",
          borderLeft: { sm: `1px solid ${theme.palette.color}` },
          borderRight: { sm: `1px solid ${theme.palette.color}` },
          backgroundColor: {
            xs: "transparent",
            sm: theme.palette.background.default,
          },
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "1rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          {["home", "projects", "works", "about"].map((item) => (
            <Link
              key={item}
              component={RouterLink}
              to={`/${item === "home" ? "" : item}`}
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                lineHeight: "1",
                textDecoration: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.color,
                },
              }}
            >
              {item}
            </Link>
          ))}

          <Button
            variant="outlined"
            onClick={onToggleTheme}
            sx={{
              border: "none",
              color: theme.palette.text.primary,
              minWidth: "auto",
              padding: "8px",
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
                border: "none",
              },
            }}
          >
            {light ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
