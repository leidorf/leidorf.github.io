import NotFound from "../pages/404";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import PixelArtPage from "../pages/PixelArtPage";
import ProjectsPage from "../pages/ProjectsPage";
import WorkPage from "../pages/WorkPage";
import WorksPage from "../pages/WorksPage";

export const ROUTE_PATHS = {
  HOME: "/",
  WORKS: "/works",
  WORK_DETAIL: "/work/:workId",
  PROJECTS: "/projects",
  ABOUT: "/about",
  PIXEL_ARTS: "/pixel-arts",
  NOT_FOUND: "/404",
};

export const routes = [
  {
    path: ROUTE_PATHS.HOME,
    element: <HomePage />,
    title: "leidorf",
  },
  {
    path: ROUTE_PATHS.WORKS,
    element: <WorksPage />,
    title: "works",
  },
  {
    path: ROUTE_PATHS.WORK_DETAIL,
    element: <WorkPage />,
    title: "work",
  },
  { path: ROUTE_PATHS.PROJECTS, element: <ProjectsPage />, title: "projects" },
  {
    path: ROUTE_PATHS.ABOUT,
    element: <AboutPage />,
    title: "about",
  },
  {
    path: ROUTE_PATHS.PIXEL_ARTS,
    element: <PixelArtPage />,
    title: "pixel-arts",
  },
  { path: ROUTE_PATHS.NOT_FOUND, element: <NotFound />, title: "404" },
];
