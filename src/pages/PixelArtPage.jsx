import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AllPixelArts from "../components/AllPixelArts";
import AppContainer from "../components/AppContainer";

const PixelArtPage = () => {
  const theme = useTheme();
  return (
    <AppContainer disableGutters>
      <Box
        sx={{
          py: 2,
          px: 3,
        }}
      >
        <Typography
          component={"h1"}
          sx={{
            color: theme.palette.text.primary,
          fontSize: { xs: 48, sm: 64, md: 96 },
            fontWeight: "bold",
          }}
        >
          pixel-arts
        </Typography>

        <Typography>
          all pixel arts that i posted on twitter. roughly there is 100+ pixel
          arts.
        </Typography>
      </Box>

      <AllPixelArts />
    </AppContainer>
  );
};

export default PixelArtPage;
