import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import Layout from "./components/Layout";

const App = () => (
  <MuiThemeProvider>
    <Layout />
  </MuiThemeProvider>
);

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
