//react imports
import * as React from "react";

//nav router
import { HashRouter as Router, Route, Routes } from "react-router-dom";

//import app styles
import "./App.css";
import "@fontsource/public-sans";

//import page links
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

//system-preference-set dark mode
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  //ALERT: You may want to minimize the theme while working on this codebase
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          //dark mode
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

        //light mode
        typography: {
          fontSize: 16,
          fontWeightLight: 200,
          fontWeightRegular: 300,
          fontWeightMedium: 400,
          fontWeightBold: 600,
          htmlFontSize: 17,
          h1: {
            fontFamily: "Montserrat",
            fontSize: "6rem",
            fontWeight: 200,
            lineHeight: 1.3,
            letterSpacing: "0.1em",
          },
          h2: {
            fontFamily: "Raleway",
            fontSize: "4.3rem",
            fontWeight: 100,
            lineHeight: 1.15,
            letterSpacing: "0.03em",
          },
          h3: {
            fontFamily: "Rubik",
          },
          h4: {
            fontFamily: "Raleway",
          },
          subtitle1: {
            fontFamily: "Montserrat",
          },
          subtitle2: {
            fontFamily: "Rubik",
            fontSize: "1.1rem",
          },
          body1: {
            fontFamily: "Rubik",
            fontSize: "1.4rem",
          },
          body2: {
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "1.3rem",
          },
          button: {
            fontFamily: "Rubik",
            fontWeight: 600,
            fontSize: "1.4rem",
          },
          caption: {
            fontFamily: "Raleway",
            fontSize: "1rem",
          },
          overline: {
            fontFamily: "Raleway",
            fontSize: "1.1rem",
          },
          h5: {
            fontFamily: "Raleway",
            fontSize: "1.8rem",
          },
          h6: {
            fontSize: "1.5rem",
          },
        },
        overrides: {
          MuiButton: {
            root: {
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              border: 0,
              borderRadius: 3,
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              color: "white",
              height: 48,
              padding: "0 30px",
            },
          },
        },
        props: {
          MuiAppBar: {
            color: "default",
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}
