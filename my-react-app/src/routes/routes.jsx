import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Login, Register, Home } from "../containers";
import paths from "../constants/paths";
import PrivateRoute from "./private.route";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path={paths.Login}></Route>
        <Route exact component={Register} path={paths.Register}></Route>
        <PrivateRoute exact component={Home} path={paths.Home}></PrivateRoute>
      </Switch>
    </Router>
  );
}

export default Routes;
