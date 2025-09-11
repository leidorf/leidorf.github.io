import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const ImageWork = ({ work }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  return (
    <Box sx={{ pb: 2 }}>
      <Typography
        sx={{
          my: 2,
          px: 3,
          color: theme.palette.color,
          fontSize: "1.5rem",
        }}
      >
        {work.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 4,
          mb: 2,
          borderTop: `1px solid ${theme.palette.color}`,
          borderBottom: `1px solid ${theme.palette.color}`,
          backgroundImage: `radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0),
       radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0)`,
          backgroundSize: "1.35rem 1.35rem",
          backgroundPosition: "0 0, 0.675rem 0.675rem",
          backgroundColor: theme.palette.background.default,
        }}
      >
        {loading && (
          <CircularProgress
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: theme.palette.color,
            }}
          />
        )}

        <Box
          component="img"
          sx={{
            height: 640,
            width: "auto",
            maxHeight: { xs: 180, sm: 300, md: 450, lg: 640 },
          }}
          alt="github_profile"
          src={work.image}
          onLoad={() => setLoading(false)}
        />
      </Box>
      <Typography sx={{ mt: 2, px: 3 }}>- {work.author}</Typography>
    </Box>
  );
};

export default ImageWork;
