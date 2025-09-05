import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";


const Header = ({ light, onToggleTheme }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      className="halftone"
      sx={{
        borderBottom: `1px solid ${theme.palette.color} `,
        borderRadius: "0 0 1rem 1rem",
        boxShadow: "none",
        padding: "0.5rem",
        marginBottom: "2rem",

        backgroundImage: `radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0),
       radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0)`,
        backgroundSize: "1.35rem 1.35rem",
        backgroundPosition: "0 0, 0.675rem 0.675rem",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <Typography variant="h4">
          <Link
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: "none",
              color: theme.palette.text.primary,
              "&:hover": {
                color: theme.palette.color,
              },
            }}
          >
            ✮ leidorf
          </Link>
        </Typography>{" "}
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Typography variant="h5">
            <Link
              component={RouterLink}
              to="/works"
              sx={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.color,
                },
              }}
            >
              works
            </Link>
          </Typography>

          <Typography variant="h5">
            <Link
              component={RouterLink}
              to="/about"
              sx={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.color,
                },
              }}
            >
              about
            </Link>
          </Typography>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
