import { useTheme } from "@emotion/react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import AppContainer from "../components/AppContainer";

const NotFound = () => {
  const theme = useTheme();
  return (
    <AppContainer sx={{ py: 2, textAlign: "center" }}>
      <Typography
        component={"h1"}
        sx={{
          color: theme.palette.color,
          fontSize: { xs: 96, sm: 144, md: 192, lg: 240 },
          fontWeight: 900,
          letterSpacing: { xs: -6, md: -8 },
          fontFamily: "sans-serif",
        }}
      >
        404 :/
      </Typography>
      <Typography
        sx={{
          fontSize: { sm: 24, md: 32 },
          letterSpacing: { xs: 0, sm: -1 },
        }}
      >
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
    </AppContainer>
  );
};

export default NotFound;
