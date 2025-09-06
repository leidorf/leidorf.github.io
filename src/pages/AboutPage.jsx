import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const AboutPage = () => {
  const theme = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Container
      sx={{
        border: `1px solid ${theme.palette.color} `,
        padding: "2rem",
      }}
    >
      <Breadcrumbs sx={{ color: theme.palette.text.primary, fontSize: 64 }}>
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
        <Link
          component={RouterLink}
          color="inherit"
          underline="hover"
          to="/about"
          sx={{
            ":hover": { color: theme.palette.color },
          }}
        >
          about
        </Link>
      </Breadcrumbs>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
          position: "relative",
          height: 320,
          width: "100%",
        }}
      >
        {!imageLoaded && (
          <CircularProgress
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: theme.palette.color,
            }}
          />
        )}

        <Link
          href="https://github.com/leidorf"
          target="_blank"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            width: "100%",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 320,
              width: 320,
              maxHeight: { xs: 160, md: 320, lg: 640 },
              maxWidth: { xs: 160, md: 320, lg: 640 },
            }}
            alt="github_profile"
            src="https://avatars.githubusercontent.com/u/93585259?v=4"
            onLoad={() => setImageLoaded(true)}
          />
        </Link>
      </Box>

      <Typography variant="body1">
        leidorf does not mean anything. i knew the meaning of the word years
        ago. but i forgot it over time. now its only purpose is to represent my
        online persona. basically, leidorf is me.
        <br />i have done a variety of creative things over the years. when i
        got bored i moved on to another medium. i studied software engineering
        at a random university.
        <br />
        you can check out my twitter account for more pixel arts. you might have
        to scroll down a bit.
      </Typography>
    </Container>
  );
};

export default AboutPage;
