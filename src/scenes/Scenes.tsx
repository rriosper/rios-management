import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { useAuth } from "./hooks";
import { Layout } from "./components";
import Dashboard from "./Dashboard";
import Login from "./Login";

const Scenes = () => {
  const { logged } = useAuth();
  return (
    <Layout>
      <Switch>
        {logged ? (
          <Route exact path="/" component={Dashboard} />
        ) : (
          <Route exact path="/" component={Login} />
        )}
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default Scenes;
