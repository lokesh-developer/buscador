import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./index.css";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#54A9EB",
    },
  },
});
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
