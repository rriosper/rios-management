import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./Login";

const Scenes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Scenes;
