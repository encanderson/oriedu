import React, { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Loadable from "@src/components/Loadable";
import MainLayout from "@src/layout/MainLayout";

import AuthGuard from "@src/utils/route-guard/AuthGuard";

const ClassRegister = Loadable(lazy(() => import("@src/pages/class")));

const ClassList = Loadable(lazy(() => import("@src/pages/class/List")));

const TeacherRoutes = () => {
  const location = useLocation();
  return (
    <Route path={["/adicionar-professor", "/professores"]}>
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            <Route
              exact
              path="/adicionar-professor"
              component={ClassRegister}
            />
            <Route exact path="/professores" component={ClassList} />
          </AuthGuard>
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default TeacherRoutes;
