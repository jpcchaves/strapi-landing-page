import React from "react";
import ReactDOM from "react-dom/client";
// styled components
import { GlobalStyles } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";

import <Home></Home> from "./templates/App";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
