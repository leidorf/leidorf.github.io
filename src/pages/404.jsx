import { useTheme } from "@emotion/react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        py: 2,
        border: `1px solid ${theme.palette.color}`,
        textAlign: "center",
      }}
    >
      <Typography
        component={"h1"}
        sx={{ color: theme.palette.color, fontSize: 128 }}
      >
        404 :/
      </Typography>
      <Typography>
        i think you are looking for non-existent pages.
        <br /> wanna go to the{" "}
        <Link
          component={RouterLink}
          to={"/"}
          sx={{
            color: theme.palette.color,
            textDecorationColor: theme.palette.color,
            ":hover": { opacity: 0.75 },
          }}
        >
          home page
        </Link>
        ?
      </Typography>
    </Container>
  );
};

export default NotFound;
