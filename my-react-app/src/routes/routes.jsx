import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Login, Register, Home, Html, Css } from "../containers";
import paths from "../constants/paths";
import PrivateRoute from "./private.route";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path={paths.Login}></Route>
        <Route component={Register} path={paths.Register}></Route>
        <PrivateRoute exact component={Home} path={paths.Home}></PrivateRoute>
        <PrivateRoute component={Html} path={paths.Html}></PrivateRoute>
        <PrivateRoute component={Css} path={paths.Css}></PrivateRoute>
        {/* <PrivateRoute
          component={Javascript}
          path={paths.Javascript}
        ></PrivateRoute> */}
      </Switch>
    </Router>
  );
}

export default Routes;
