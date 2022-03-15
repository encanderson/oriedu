import React, { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Loadable from "@src/components/Loadable";
import MainLayout from "@src/layout/MainLayout";

import AuthGuard from "@src/utils/route-guard/AuthGuard";

const Dashboard = Loadable(lazy(() => import("@src/pages/underConstruction")));

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Route path={["/dashboard"]}>
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            <Route exact path="/dashboard" component={Dashboard} />
          </AuthGuard>
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default AppRoutes;
