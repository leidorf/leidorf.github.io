import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AppContainer from "../components/AppContainer";

const AboutPage = () => {
  const theme = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <AppContainer sx={{ py: 2 }}>
      <Typography
        component={"h1"}
        sx={{
          color: theme.palette.text.primary,
          fontSize: { xs: 48, sm: 64, md: 96 },
          fontWeight: "bold",
        }}
      >
        about
      </Typography>
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
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <Box
            component="img"
            sx={{
              height: "auto",
              width: "auto",
              maxHeight: { xs: 280, sm: 300, md: 320, lg: 320 },
              maxWidth: "auto",
              borderRadius: "0.25rem",
            }}
            alt="github_profile"
            src="https://avatars.githubusercontent.com/u/93585259?v=4"
            onLoad={() => setImageLoaded(true)}
          />
        </Link>
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontSize: { sm: 18, md: 24 },
          letterSpacing: { xs: 0, md: -1 },
        }}
      >
        leidorf does not mean anything. i knew the meaning of the word years
        ago. but i forgot it over time. now its only purpose is to represent my
        online persona. basically, leidorf is me.
        <br />i have done a variety of creative things over the years. when i
        got bored i moved on to another medium. i love foss, web development &
        security, anatolia, most forms of art, the concept of the internet. i
        studied software engineering at a random university.
        <br />
        you can check out my twitter account for more pixel arts. you might have
        to scroll down a bit.
      </Typography>
    </AppContainer>
  );
};

export default AboutPage;
