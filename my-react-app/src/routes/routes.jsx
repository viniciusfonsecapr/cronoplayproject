import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Login, Register, Home } from "../containers";
import paths from "../constants/paths";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path={paths.Login}></Route>
        <Route component={Register} path={paths.Register}></Route>
        <Route component={Home} path={paths.Home}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
