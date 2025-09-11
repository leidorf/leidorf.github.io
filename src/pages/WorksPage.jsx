import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import Container from "@mui/material/Container";
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
  const [groupedWorks, setGroupedWorks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/data/works.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const worksArray = data.works || [];

        setGroupedWorks(groupByCategory(worksArray));
        setLoading(false);
      } catch (error) {
        console.error("there have been an error:", error);
        setError("works couldn't fetched. please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container
        sx={{
          border: `1px solid ${theme.palette.color}`,
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          sx={{
            color: theme.palette.color,
          }}
        />
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
      <Typography
        component={"h1"}
        sx={{
          color: theme.palette.text.primary,
          fontSize: 64,
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
                variant="v3"
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
                  <ListItemText>{work.title}</ListItemText>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Container>
  );
};

export default WorksPage;
