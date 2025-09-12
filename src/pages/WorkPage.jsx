import { useTheme } from "@emotion/react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useEffect, useMemo } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Poem from "../components/PoemWork";
import Script from "../components/ScriptWork";
import ImageWork from "../components/ImageWork";
import { useFetch } from "../hooks/useFetch";
import AppContainer from "../components/AppContainer";

const WorkPage = () => {
  const { workId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const {
    data: worksData,
    loading,
    error,
  } = useFetch("/data/works.json", (data) => data.works || []);

  const work = useMemo(() => {
    if (!worksData) return null;
    return worksData.find((w) => String(w.id) === String(workId)) || null;
  }, [worksData, workId]);

  useEffect(() => {
    if (!loading && worksData && !work) {
      navigate("/404", { replace: true });
    }
  }, [loading, worksData, work, navigate]);

  if (loading) {
    return (
      <AppContainer
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress sx={{ color: theme.palette.color }} />
      </AppContainer>
    );
  }

  if (error) {
    return (
      <AppContainer sx={{ p: 2 }}>
        <Typography color="error">{error}</Typography>
      </AppContainer>
    );
  }

  if (!work) {
    return null;
  }

  return (
    <AppContainer disableGutters>
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
    </AppContainer>
  );
};

export default WorkPage;
