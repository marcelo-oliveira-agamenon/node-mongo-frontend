import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "../container/login/index";
import Dashboard from "../container/dashboard/index";
import Signup from "../container/signup/signup";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signup" component={Signup} />
    </BrowserRouter>
  );
}

export default Routes;
