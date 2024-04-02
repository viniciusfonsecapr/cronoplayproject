import React from "react";
import ReactDOM from "react-dom/client";

import Routes from "./routes/routes";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Routes />
    <GlobalStyles />
  </>
);
