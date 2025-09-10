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
        console.error("Veri yüklenirken hata oluştu:", error);
        setError(
          "Çalışmalar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
        );
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
        }}
      >
        <CircularProgress />
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
        border: `1px solid ${theme.palette.color}`
      }}
    >
      <Typography
        sx={{ color: theme.palette.text.primary, fontSize: 64, pt: 2, px: 3 }}
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
            {category}
          </Typography>
          <List>
            {groupedWorks[category].map((work) => (
              <ListItem key={work.id}>
                <Link
                  component={RouterLink}
                  color="inherit"
                  to={`/work/${work.id}`}
                  sx={{
                    fontSize: 18,
                    textDecoration: "none",
                    "&:hover": {
                      color: theme.palette.color,
                      textDecoration: "underline",
                    },
                  }}
                >
                  {work.title}
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
