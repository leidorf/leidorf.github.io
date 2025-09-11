import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const ScriptWork = ({ work }) => {
  const theme = useTheme();
  return (
    <Box sx={{ pb: 2, px: 3 }}>
      <Typography
        sx={{ my: 2, color: theme.palette.color, fontSize: "1.5rem" }}
      >
        {work.title}
      </Typography>
      {work.description && <Typography>{work.description}</Typography>}
      <Link
        component={RouterLink}
        to={work.content || "/404"}
        target="_blank"
        sx={{
          color: "inherit",
          textDecoration: "none",
          ":hover": { color: theme.palette.color },
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: theme.palette.color,
            borderColor: theme.palette.color,
            textTransform: "none",
            my: 2,
          }}
        >
          synopsis
        </Button>
      </Link>
      <Typography sx={{ mt: 2 }}>- {work.author}</Typography>
    </Box>
  );
};

export default ScriptWork;
