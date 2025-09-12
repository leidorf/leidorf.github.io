import React, { useMemo } from "react";
import { useTheme } from "@emotion/react";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ImageIcon from "@mui/icons-material/Image";
import ArticleIcon from "@mui/icons-material/Article";
import ListItemText from "@mui/material/ListItemText";
import { useFetch } from "../hooks/useFetch";
import AppContainer from "../components/AppContainer";

const groupByCategory = (works) => {
  return works.reduce((grouped, work) => {
    const category = work.category || "other";

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(work);
    return grouped;
  }, {});
};

const WorksPage = () => {
  const theme = useTheme();
  const {
    data: worksData,
    loading,
    error,
  } = useFetch("/data/works.json", (data) => data.works || []);

  const groupedWorks = useMemo(() => {
    if (!worksData) return {};
    return groupByCategory(worksData);
  }, [worksData]);

  if (loading) {
    return (
      <AppContainer
        sx={{ padding: "2rem", display: "flex", justifyContent: "center" }}
      >
        <CircularProgress
          sx={{
            color: theme.palette.color,
          }}
        />
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

  return (
    <AppContainer disableGutters>
      <Typography
        component={"h1"}
        sx={{
          color: theme.palette.text.primary,
          fontSize: { xs: 48, sm: 64, md: 96 },
          fontWeight: "bold",
          pt: 2,
          px: 3,
        }}
      >
        works
      </Typography>

      {Object.keys(groupedWorks).map((category) => (
        <Box key={category}>
          <Typography
            variant="h3"
            sx={{
              py: 2,
              px: 3,

              fontSize: { xs: 36, sm: 48, md: 64 },
              letterSpacing: { xs: 0, sm: -1 },
              borderTop: `1px solid ${theme.palette.color}`,
              borderBottom: `1px solid ${theme.palette.color}`,
              backgroundImage: `radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0),
                radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0)`,
              backgroundSize: "1.35rem 1.35rem",
              backgroundPosition: "0 0, 0.675rem 0.675rem",
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            }}
          >
            {category !== "pixel-art" ? (
              category
            ) : (
              <Link
                component={RouterLink}
                to={"/pixel-arts"}
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    color: theme.palette.color,
                  },
                }}
              >
                {category}
              </Link>
            )}
          </Typography>
          <List>
            {groupedWorks[category].map((work) => (
              <ListItem key={work.id}>
                <Link
                  component={RouterLink}
                  color="inherit"
                  to={`/work/${work.id}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    textDecoration: "none",
                    "&:hover": {
                      color: theme.palette.color,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: theme.palette.text.primary,
                      mr: -3,
                    }}
                  >
                    {work.category === "pixel-art" ||
                    work.category === "glitch-art" ? (
                      <ImageIcon />
                    ) : (
                      <ArticleIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    sx={{
                      fontSize: { xs: 18, sm: 24 },
                      letterSpacing: { xs: 0, sm: -1 },
                    }}
                  >
                    {work.title}
                  </ListItemText>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </AppContainer>
  );
};

export default WorksPage;
