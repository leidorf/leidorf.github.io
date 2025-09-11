import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
  const theme = useTheme();
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/data/projects.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const projectsArray = data.projects || [];

        setProjects(projectsArray);
        setLoading(false);
      } catch (error) {
        console.error("there have been an error:", error);
        setError("works couldn't fetched. please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container
      sx={{
        py: 2,
        border: `1px solid ${theme.palette.color}`,
      }}
    >
      <Box
        sx={{
          py: 2,
          px: 3,
        }}
      >
        <Typography
          component={"h1"}
          sx={{
            color: theme.palette.text.primary,
            fontSize: 64,
            fontWeight: "bold",
          }}
        >
          projects
        </Typography>

        <Typography>
          most projects that i published on github. you can check out my github
          account for more projects.
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: theme.palette.color }} />

      {loading ? (
        <CircularProgress
          sx={{
            color: theme.palette.color,
          }}
        />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <List>
          {projects.map((project) => (
            <ListItem>
              <ListItemText primary={project.title} secondary={project.date}>
                {project.description}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default ProjectsPage;
