import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// Routes
import LoginRoutes from "./LoginRoutes";
import DashboardRoutes from "../apps/dashboard/routes";
import ProfileRoutes from "../apps/profile/routes";
import QuestionsRoutes from "../apps/questions/routes";

import config from "@src/config";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => {
          window.location.href = `${config.oriedu}`;
          return null;
        }}
      />
      <Redirect exact path="/" to={`${config.defaultPath}`} />
      <React.Fragment>
        <LoginRoutes />
        <DashboardRoutes />
        <ProfileRoutes />
        <QuestionsRoutes />
      </React.Fragment>
    </Switch>
  );
};

export default Routes;
