import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageHead from "./PageHead";

const Layout = ({ light, onToggleTheme }) => {
  return (
    <>
      <PageHead />
      <Header light={light} onToggleTheme={onToggleTheme} />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
