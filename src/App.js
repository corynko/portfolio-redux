// import "@fontsource/public-sans";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { CssVarsProvider } from "@mui/joy/styles";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

//import app styles
import "./App.css";
// import { themeOptions as muiTheme } from "./components/muiTheme";
// import theme from "./components/Theme";

//import page links
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./components/muiTheme";

//ALERT: you may want to minimize this theme while working on the codebase
const themeoptions = (ThemeProvider = {
  palette: {
    mode: "dark",
    primary: {
      main: "#55628b",
      light: "#7f90bd",
      dark: "#39445e",
    },
    secondary: {
      main: "#71ad87",
    },
    background: {
      default: "#232323",
      paper: "#242424",
    },
    text: {
      primary: "#f5f5f5",
      hint: "#111111",
    },
    error: {
      main: "#ff8d70",
    },
    warning: {
      main: "#ffcf56",
    },
    info: {
      main: "#b3bad0",
    },
    success: {
      main: "#5fad41",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#5562ab",
      light: "#7f90bd",
      dark: "#39445e",
    },
    secondary: {
      main: "#71ad87",
    },
    background: {
      default: "#f5f5f5",
      paper: "#f9f9f9",
    },
    text: {
      primary: "#111111",
    },
    error: {
      main: "#ff8d70",
    },
    warning: {
      main: "#ffcf56",
    },
    info: {
      main: "#b3bad0",
    },
    success: {
      main: "#5fad41",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#5562ab",
      light: "#7f90bd",
      dark: "#39445e",
    },
    secondary: {
      main: "#71ad87",
    },
    background: {
      default: "#f5f5f5",
      paper: "#f9f9f9",
    },
    text: {
      primary: "#111111",
      hint: "#111111",
    },
    error: {
      main: "#ff8d70",
    },
    warning: {
      main: "#ffcf56",
    },
    info: {
      main: "#b3bad0",
    },
    success: {
      main: "#5fad41",
    },
  },
});

export default function App() {
  return (
    <Router>
      <CssVarsProvider theme={themeoptions}>
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
        <main>
          <h1>Help!</h1>
        </main>
      </CssVarsProvider>
    </Router>
  );
}
