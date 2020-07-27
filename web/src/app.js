import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./global/styles";

import Login from "./container/login";
import Dashboard from "./container/dashboard";
import Signup from "./container/signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
    </>
  );
}

export default App;
