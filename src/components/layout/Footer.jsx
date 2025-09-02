import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        borderTop: "1px solid #FE5959",
        borderBottom: "0",
        borderRadius: "1rem 1rem 0 0",
        boxShadow: "none",
        padding: "2rem",
        marginTop: "2rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">
          <Link
            color="inherit"
            href="/"
            sx={{
              textDecoration: "none",
              color: { "&:hover": { color: "#FE5959" } },
            }}
          >
            ✮ leidorf
          </Link>
          <br />
          {"copyleft 🄯 "}
          {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2">
          <Link
            color="inherit"
            href="https://github.com/leidorf"
            target="_blank"
            sx={{
              textDecoration: "none",
              color: { "&:hover": { color: "#FE5959" } },
            }}
          >
            github
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
