import { createMuiTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createMuiTheme({
    spacing: 4,
    typography: {
      fontFamily: ["Roboto", "Raleway", "Open Sans"].join(","),
      h1: {
        fontSize: "5rem",
        fontFamily: "Raleway",
      },
      h2: {
        fontSize: "3.5rem",
        fontFamily: "Open Sans",
        fontStyle: "bold",
      },
      h3: {
        fontSize: "2.5rem",
        fontFamily: "Roboto",
      },
    },
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
  })
);

export default theme;
