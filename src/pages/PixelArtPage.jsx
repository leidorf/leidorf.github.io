import { useTheme } from "@emotion/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AllPixelArts from "../components/AllPixelArts";

const PixelArtPage = () => {
  const theme = useTheme();
  return (
    <Container
      disableGutters
      sx={{
        border: `1px solid ${theme.palette.color}`,
      }}
    >
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
            fontSize: 64,
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
    </Container>
  );
};

export default PixelArtPage;
