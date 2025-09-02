import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({light, onToggleTheme}) => {
  return (
    <>
      <Header light={light} onToggleTheme={onToggleTheme}  />
      <Container sx={{ mt: 4}}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
