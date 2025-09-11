import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PoemWork = ({ work }) => {
  const theme = useTheme();
  return (
    <Box sx={{ pb: 2, px: 3 }}>
      <Typography
        sx={{ my: 2, color: theme.palette.color, fontSize: "1.5rem" }}
      >
        {work.title}
      </Typography>
      <Typography sx={{ whiteSpace: "pre-line" }}>{work.content}</Typography>
      <Typography sx={{ mt: 2 }}>- {work.author}</Typography>
    </Box>
  );
};

export default PoemWork;
