import { useTheme } from "@emotion/react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Poem from "../components/PoemWork";
import Script from "../components/ScriptWork";
import ImageWork from "../components/ImageWork";

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
          borderRadius: "0.5rem",
          minWidth: "20rem",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress sx={{ color: theme.palette.color }} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          border: `1px solid ${theme.palette.color}`,
          borderRadius: "0.5rem",
          minWidth: "20rem",
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
        borderRadius: "0.5rem",
        minWidth: "20rem",
      }}
    >
      <Breadcrumbs
        sx={{
          color: theme.palette.text.primary,
          fontSize: { xs: 36, md: 48, lg: 64 },
          pt: 2,
          px: 3,
          fontWeight: "bold",
        }}
      >
        <Link
          component={RouterLink}
          color="inherit"
          underline="hover"
          to="/works"
          sx={{
            fontWeight: "bold",
            ":hover": { color: theme.palette.color },
          }}
        >
          work
        </Link>
        <Typography
          component={"h1"}
          sx={{
            fontWeight: "bold",
            fontSize: { xs: 36, md: 48, lg: 64 },
          }}
        >
          {work?.title || "Loading..."}
        </Typography>
      </Breadcrumbs>

      <Divider sx={{ bgcolor: theme.palette.color }} />

      {work.category === "poem" ? (
        <Poem work={work} />
      ) : work.category === "script" ? (
        <Script work={work} />
      ) : (
        <ImageWork work={work} />
      )}
      <Typography></Typography>
    </Container>
  );
};

export default WorkPage;
