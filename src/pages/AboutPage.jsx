import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const AboutPage = () => {
  return (
    <Container
      sx={{
        border: "1px solid #FE5959",
        borderRadius: "1rem",
        padding: "2rem",
      }}
    >
      <Typography variant="h1">/about</Typography>
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

export default AboutPage;
