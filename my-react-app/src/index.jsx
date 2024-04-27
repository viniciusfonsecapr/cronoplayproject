import React from "react";
import ReactDOM from "react-dom/client";

import Routes from "./routes/routes";
import GlobalStyles from "./styles/globalStyles";
import { Menu } from "./components/Menu";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Routes>
      <Menu />
    </Routes>
    <Toaster
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
      }}
    />
    <GlobalStyles />
  </>
);
