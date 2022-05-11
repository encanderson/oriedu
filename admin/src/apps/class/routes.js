import React, { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Loadable from "@src/components/Loadable";
import MainLayout from "@src/layout/MainLayout";

import AuthGuard from "@src/utils/route-guard/AuthGuard";

const ClassRegister = Loadable(lazy(() => import("./pages/Add")));

const ClassList = Loadable(lazy(() => import("./pages/List")));
const ClassDetail = Loadable(lazy(() => import("./pages/Detail")));

const ClassRoutes = () => {
  const location = useLocation();
  return (
    <Route path={["/adicionar-turma", "/turmas", "/turma/:id"]}>
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            <Route exact path="/adicionar-turma" component={ClassRegister} />
            <Route exact path="/turmas" component={ClassList} />
            <Route exact path="/turma/:id" component={ClassDetail} />
          </AuthGuard>
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default ClassRoutes;
