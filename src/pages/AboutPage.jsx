import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const AboutPage = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        border: `1px solid ${theme.palette.color} `,
        borderRadius: "1rem",
        padding: "2rem",
      }}
    >
      <Typography variant="h1" fontSize={64}>
        /about
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Link href="https://github.com/leidorf" target="_blank">
          <Box
            component="img"
            sx={{
              height: 320,
              width: 320,
              maxHeight: { xs: 160, md: 320, lg: 640 },
              maxWidth: { xs: 160, md: 320, lg: 640 },
            }}
            alt="GitHub Profile Picture"
            src="https://avatars.githubusercontent.com/u/93585259?v=4"
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
