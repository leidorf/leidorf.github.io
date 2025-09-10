import { useTheme } from "@emotion/react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const WorkPage = () => {
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { workId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/data/works.json");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const foundWork = data.works.find((w) => w.id === workId);

        if (foundWork) {
          setWork(foundWork);
        } else {
          navigate("/404");
        }

        setLoading(false);
      } catch (error) {
        console.error("error occurred while fetching data:", error);
        setError("error occurred while fetching data. please try again later");
        setLoading(false);
      }
    };

    fetchData();
  }, [workId, navigate]);

  if (loading) {
    return (
      <Container
        sx={{
          border: `1px solid ${theme.palette.color}`,
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress color={theme.palette.color} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          border: `1px solid ${theme.palette.color}`,
          padding: "2rem",
        }}
      >
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container
      disableGutters
      sx={{
        border: `1px solid ${theme.palette.color}`,
      }}
    >
      <Breadcrumbs
        sx={{
          color: theme.palette.text.primary,
          fontSize: { xs: 36, md: 48, lg: 64 },
          pt: 2,
          px: 3,
        }}
      >
        <Link
          component={RouterLink}
          color="inherit"
          underline="hover"
          to="/works"
          sx={{
            ":hover": { color: theme.palette.color },
          }}
        >
          work
        </Link>
        <Link
          component={RouterLink}
          color="inherit"
          underline="hover"
          to={`/work/${workId}`}
          sx={{
            ":hover": { color: theme.palette.color },
          }}
        >
          {work?.title || "Loading..."}
        </Link>
      </Breadcrumbs>

      <Divider sx={{ bgcolor: theme.palette.color }} />

      {work.category === "poem" ? (
        <Box sx={{ pb: 2, px: 3 }}>
          <Typography
            sx={{ my: 2, color: theme.palette.color, fontSize: "1.5rem" }}
          >
            {work.title}
          </Typography>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {work.content}
          </Typography>
          <Typography sx={{ mt: 2 }}>- {work.author}</Typography>
        </Box>
      ) : work.category === "script" ? (
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
      ) : (
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
      )}
      <Typography></Typography>
    </Container>
  );
};

export default WorkPage;
