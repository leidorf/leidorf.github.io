import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import { ROUTE_PATHS, routes } from "./routes";

const AppRouter = ({ light, onToggleTheme }) => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout light={light} onToggleTheme={onToggleTheme} />}
        >
          <Route index element={<HomePage />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route
            path="*"
            element={<Navigate to={ROUTE_PATHS.NOT_FOUND} replace />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
