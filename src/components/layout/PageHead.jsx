import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_PATHS, routes } from "../../routes/routes";

const PageHead = () => {
  const location = useLocation();

  useEffect(() => {
    const currentRoute = routes.find(
      (route) =>
        route.path === location.pathname ||
        (route.path === ROUTE_PATHS.HOME && location.pathname === "/")
    );

    const title = currentRoute?.title ? `${currentRoute.title}` : "leidorf";
    document.title = title;
  }, [location.pathname]);

  return null;
};

export default PageHead;
