import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";

const Header = ({ light, onToggleTheme }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        borderBottom: "1px solid #FE5959",
        borderRadius: "0 0 1rem 1rem",
        boxShadow: "none",
        padding: "0.5rem",
        marginBottom: "2rem",
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
                color: "#FE5959",
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
                  color: "#FE5959",
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
                  color: "#FE5959",
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
            {light ? "🌙" : "☀️"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
