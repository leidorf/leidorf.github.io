import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";

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

        setProjects(projectsArray.reverse());
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
      disableGutters
      sx={{
        border: `1px solid ${theme.palette.color}`,
        borderRadius: "0.5rem",
        minWidth: "20rem",
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
            fontSize: {xs:48, md:64},
            fontWeight: "bold",
          }}
        >
          projects
        </Typography>

        <Typography>
          most projects that i published on github. you can check out my github
          account for more projects. if there is no github or website link, it's
          either because i am still developing the project or because i believe
          the project should remain confidential.
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
        <Grid container spacing={4} sx={{ m: 2 }}>
          {projects.map((project) => (
            <Grid
              size={{ xs: 12, sm: 6, lg: 4 }}
              key={project.id}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  border: `1px solid ${theme.palette.color}`,
                  bgcolor: theme.palette.background.default,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.125)",
                  },
                }}
              >
                <CardHeader
                  sx={{
                    backgroundImage: `radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0),
                  radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0)`,
                    backgroundSize: "1.35rem 1.35rem",
                    backgroundPosition: "0 0, 0.675rem 0.675rem",
                    backgroundColor: theme.palette.background.default,
                  }}
                  slotProps={{
                    subheader: { color: theme.palette.text.primary },
                  }}
                  title={project.title}
                  subheader={project.date}
                  action={
                    project.github_link ? (
                      <Link
                        component={RouterLink}
                        to={project.github_link}
                        target="_blank"
                        sx={{
                          color: theme.palette.text.primary,
                          transition: "color 0.3s ease-in-out ",
                          ":hover": {
                            color: theme.palette.color,
                          },
                        }}
                      >
                        <GitHubIcon />
                      </Link>
                    ) : null
                  }
                />

                <Divider sx={{ bgcolor: theme.palette.color }} />

                <CardContent>
                  <Typography>{project.description}</Typography>
                </CardContent>

                {project.link && (
                  <CardActions sx={{ paddingTop: 0, marginTop: "auto" }}>
                    <Link
                      component={RouterLink}
                      to={project.link}
                      target="_blank"
                    >
                      <Button
                        variant="outlined"
                        sx={{
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
                        check out
                      </Button>
                    </Link>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProjectsPage;
