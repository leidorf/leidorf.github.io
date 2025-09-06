import CssBaseline from "@mui/material/CssBaseline";
import AppRouter from "./routes/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const themeLight = createTheme({
  palette: {
    color:"#D94848",
    background: {
      default: "#f2f2f2",
    },
    text: {
      primary: "#2e2e2e",
    },
  },
});

const themeDark = createTheme({
  palette: {
    color: "#D94848",
    background: {
      default: "#1e1e1e",
    },
    text: {
      primary: "#f2f2f2",
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
      <AppRouter light={light} onToggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
