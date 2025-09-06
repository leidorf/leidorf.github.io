import { useTheme } from "@emotion/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ASCIIText from "../components/ASCIIText";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const HomePage = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        border: `1px solid ${theme.palette.color}`,
        padding: "2rem",
      }}
    >
      <Breadcrumbs
        sx={{
          color: theme.palette.text.primary,
          fontSize: 64,
        }}
      >
        <Link
          component={RouterLink}
          color="inherit"
          underline="hover"
          to="/"
          sx={{
            ":hover": { color: theme.palette.color },
          }}
        >
          home
        </Link>
      </Breadcrumbs>

      <Box
        sx={{
          position: "relative",
          height: "16rem",
          py: "-2rem",
        }}
      >
        <ASCIIText
          text="leidorf"
          enableWaves={false}
          textColor={theme.palette.text.primary}
        />
      </Box>
      <Typography variant="body1">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Typography>
    </Container>
  );
};

export default HomePage;
