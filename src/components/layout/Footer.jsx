import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderTop: `1px solid ${theme.palette.color}`,
        borderBottom: "0",
        borderRadius: "1rem 1rem 0 0",
        boxShadow: "none",
        padding: "2rem",
        paddingBottom: "4rem",
        marginTop: "2rem",
        position: "relative",
        backgroundColor: theme.palette.background.default,

        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          height: "100%",
          backgroundImage: `radial-gradient(circle at center, ${theme.palette.color},  1px, transparent 0),
          radial-gradient(circle at center, ${theme.palette.color}, 1px, transparent 0)`,
          backgroundSize: "1.35rem 1.35rem",
          backgroundPosition: "0 0, 0.675rem 0.675rem",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
          zIndex: 0,
        },
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: "1",
        }}
      >
        <Typography variant="body2">
          <Link
            color="inherit"
            href="/"
            sx={{
              textDecoration: "none",
              color: { "&:hover": { color: theme.palette.color } },
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
              color: { "&:hover": { color: theme.palette.color } },
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
