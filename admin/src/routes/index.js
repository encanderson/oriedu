import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// Routes
import LoginRoutes from "./LoginRoutes";
import DashboardRoutes from "./app/Dashboard";
import ProfileRoutes from "./app/Profile";
import ClassRoutes from "./app/Class";
import EmployeesRoutes from "./app/Employees";
import TeacherRoutes from "./app/Teacher";

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
        <ClassRoutes />
        <EmployeesRoutes />
        <TeacherRoutes />
      </React.Fragment>
    </Switch>
  );
};

export default Routes;
