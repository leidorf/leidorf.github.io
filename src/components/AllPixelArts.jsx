import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useMemo, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const AllPixelArts = () => {
  const theme = useTheme();
  const {
    data: worksData,
    loading,
    error,
  } = useFetch("/data/pixel-arts.json", (data) => data.works || []);
  const [loadedImages, setLoadedImages] = useState({});

  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const works = useMemo(
    () => (worksData ? shuffle(worksData) : []),
    [worksData]
  );

  const handleImageLoad = (id) =>
    setLoadedImages((s) => ({ ...s, [id]: true }));

  return (
    <Box
      sx={{
        borderTop: `1px solid ${theme.palette.color}`,
        borderBottom: `1px solid ${theme.palette.color}`,
        backgroundImage: `radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0),
       radial-gradient(circle at center, ${theme.palette.color} 1px, transparent 0)`,
        backgroundSize: "1.35rem 1.35rem",
        backgroundPosition: "0 0, 0.675rem 0.675rem",
        backgroundColor: theme.palette.background.default,
        minHeight: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      {loading ? (
        <CircularProgress
          sx={{
            color: theme.palette.color,
          }}
        />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Grid container spacing={1} justifyContent="center">
          {works.map((work) => {
            const imageUrl = work.url;
            const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(
              imageUrl
            )}`;

            return (
              <Grid item xs={12} sm={6} md={4} key={work.id}>
                <Box
                  sx={{
                    p: { xs: 0.5, sm: 1 },
                    position: "relative",
                    width: "100%",
                    height: { xs: 180, md: 240 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  {!loadedImages[work.id] && (
                    <CircularProgress
                      size={40}
                      sx={{
                        position: "absolute",
                        color: theme.palette.color,
                      }}
                    />
                  )}

                  <Fade in={loadedImages[work.id]} timeout={800}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        href={work.twitter_url}
                        target="_blank"
                        sx={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          textDecoration: "none",
                        }}
                      >
                        <Box
                          component="img"
                          src={imageUrl}
                          onError={(e) => {
                            if (e.target.src !== proxyUrl) {
                              e.target.src = proxyUrl;
                            } else {
                              e.target.style.display = "none";
                            }
                          }}
                          onLoad={() => handleImageLoad(work.id)}
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "0.25rem",
                            objectFit: "cover",
                            transition:
                              "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            "&:hover": {
                              transform: "scale(1.05)",
                              opacity: 0.9,
                            },
                          }}
                          alt="tweet"
                        />
                      </Link>
                    </Box>
                  </Fade>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default AllPixelArts;
