import CssBaseline from "@mui/material/CssBaseline";
import AppRouter from "./routes/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#d9d9d9",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#1e1e1e",
    },
    text: {
      primary: "#fff",
    },
  },
});

function App() {
  const [light, setLight] = useState(false);

  const toggleTheme = () => {
    setLight((prev) => !prev);
  };

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <AppRouter light={light} onToggleTheme={toggleTheme}  />
    </ThemeProvider>
  );
}

export default App;
