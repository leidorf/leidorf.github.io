import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppContainer from "../components/AppContainer";

const HomePage = () => {
  const theme = useTheme();

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
        home
      </Typography>

      <Typography
        variant="body1"
        sx={{
            fontSize: { sm: 18, md: 24 },
            letterSpacing: { xs: 0, md: -1 },
        }}
      >
        hi i am leidorf. i do various things like art, web dev & security.
      </Typography>

      <Box sx={{ textWrap: "nowrap", textAlign: "end", mt: 4 }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 52, sm: 96, md: 140, lg: 160 },
            fontWeight: 900,
            letterSpacing: { xs: -6, sm: -12, md: -16 },
            fontFamily: "sans-serif",
          }}
        >
          "cool quote"
        </Typography>
        <Typography
          sx={{ fontSize: { sm: 36, md: 48, lg: 64 }, mt: { md: -3, lg: -4 } }}
        >
          - historically known figure
        </Typography>
      </Box>
    </AppContainer>
  );
};

export default HomePage;
