import React, { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Loadable from "@src/components/Loadable";
import MainLayout from "@src/layout/MainLayout";

import AuthGuard from "@src/utils/route-guard/AuthGuard";

const StudentRegister = Loadable(lazy(() => import("./pages/Add")));

const StudentsList = Loadable(lazy(() => import("./pages/List")));
const StudentDetails = Loadable(lazy(() => import("./pages/Details")));

const StudentRoutes = () => {
  const location = useLocation();
  return (
    <Route path={["/adicionar-estudante", "/estudantes", "/estudante/:id"]}>
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            <Route
              exact
              path="/adicionar-estudante"
              component={StudentRegister}
            />
            <Route exact path="/estudantes" component={StudentsList} />
            <Route exact path="/estudante/:id" component={StudentDetails} />
          </AuthGuard>
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default StudentRoutes;
