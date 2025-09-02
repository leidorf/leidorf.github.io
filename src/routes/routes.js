import NotFound from "../pages/404";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import WorksPage from "../pages/WorksPage";

export const ROUTE_PATHS = {
  HOME: "/",
  WORKS: "/works",
  ABOUT: "/about",
  NOT_FOUND: "/404",
};

export const routes = [
  {
    path: ROUTE_PATHS.HOME,
    element: <HomePage />,
    title: "home",
  },
  {
    path: ROUTE_PATHS.WORKS,
    element: <WorksPage />,
    title: "works",
  },
  {
    path: ROUTE_PATHS.ABOUT,
    element: <AboutPage />,
    title: "about",
  },
  { path: ROUTE_PATHS.NOT_FOUND, element: <NotFound />, title: "404" },
];
