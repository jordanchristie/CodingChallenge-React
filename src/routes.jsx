import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./views/home";
import Single from "./views/single";

const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/book/:id" component={Single} />
    </div>
  </HashRouter>
);

export default Routes;
