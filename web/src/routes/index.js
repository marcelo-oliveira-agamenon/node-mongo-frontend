import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "../container/login/index";
import Dashboard from "../container/dashboard/index";
import Signup from "../container/signup/signup";
import ResetPassword from "../container/resetPassword/index";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signup" component={Signup} />
      <Route path="/resetPassword" component={ResetPassword} />
    </BrowserRouter>
  );
}

export default Routes;
