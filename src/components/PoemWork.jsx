import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PoemWork = ({ work }) => {
  const theme = useTheme();
  return (
    <Box sx={{ pb: 2, px: 3 }}>
      <Typography
        sx={{
          my: 2,
          color: theme.palette.color,
          fontSize: { xs: 24, md: 36, lg: 48 },
          letterSpacing: { xs: 0, md: -1 },
        }}
      >
        {work.title}
      </Typography>
      <Typography
        sx={{
          whiteSpace: "pre-line",
          fontSize: { md: 20 },
          letterSpacing: { xs: 0, md: -1 },
        }}
      >
        {work.content}
      </Typography>
      <Typography
        sx={{
          mt: 2,
          fontSize: { sm: 24 },
          letterSpacing: { xs: 0 },
        }}
      >
        - {work.author}
      </Typography>
    </Box>
  );
};

export default PoemWork;
