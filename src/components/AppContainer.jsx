import Container from "@mui/material/Container";

const AppContainer = ({ children, disableGutters = false, sx = {}, ...props }) => {
  return (
    <Container
      disableGutters={disableGutters}
      sx={{
        border: (theme) => `1px solid ${theme.palette.color}`,
        borderRadius: "0.5rem",
        minWidth: "20rem",
        ...sx, 
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default AppContainer;
