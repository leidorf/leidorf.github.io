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
        sx={{
          my: 2,
          color: theme.palette.color,
          fontSize: { xs: 24, md: 36, lg: 48 },
          letterSpacing: { xs: 0, md: -1 },
        }}
      >
        {work.title}
      </Typography>
      {work.description && (
        <Typography
          sx={{
            fontSize: { sm: 18, md: 24 },
            letterSpacing: { xs: 0, md: -1 },
          }}
        >
          {work.description}
        </Typography>
      )}
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
            my:2,
            color: theme.palette.color,
            borderColor: theme.palette.color,
            textTransform: "none",
            bgcolor: theme.palette.background.default,
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
            },
          }}
        >
          synopsis
        </Button>
      </Link>
      <Typography
        sx={{ mt: 2, fontSize: { sm: 24 }, letterSpacing: { xs: 0 } }}
      >
        - {work.author}
      </Typography>
    </Box>
  );
};

export default ScriptWork;
