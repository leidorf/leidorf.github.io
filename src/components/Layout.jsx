import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Ana Sayfa
          </Button>
          <Button color="inherit" component={Link} to="/works">
            Projeler
          </Button>
          <Button color="inherit" component={Link} to="/about">
            Hakkımda
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};


export default Layout;
