import React from "react";
import { Switch, Route } from "react-router-dom";

// Import all page components here
import Home from "./home";
import About from "./about";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
