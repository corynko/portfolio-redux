//react imports
import * as React from "react";

//nav router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import app styles
import "./App.css";
import "@fontsource/public-sans";

//material imports
import theme from "./theme";

//import page links
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";

//system-preference-set dark mode
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}
