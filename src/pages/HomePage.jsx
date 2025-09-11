import { useTheme } from "@emotion/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ASCIIText from "../components/ASCIIText";
import Box from "@mui/material/Box";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        py: 2,
        border: `1px solid ${theme.palette.color}`,
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
        home
      </Typography>

      <Box
        sx={{
          position: "relative",
          height: "16rem",
          mt: "-3rem",
        }}
      >
        <ASCIIText
          text="leidorf"
          enableWaves={false}
          textColor={theme.palette.text.primary}
        />
      </Box>

      <Typography variant="body1">i do various things.</Typography>

      <Typography variant="body1">
        "cool quote"
        <br />- historically known figure
      </Typography>
    </Container>
  );
};

export default HomePage;
