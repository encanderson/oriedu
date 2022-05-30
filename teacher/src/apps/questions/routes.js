import React, { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Loadable from "@src/components/Loadable";
import MainLayout from "@src/layout/MainLayout";

import AuthGuard from "@src/utils/route-guard/AuthGuard";

const Questions = Loadable(lazy(() => import("@src/apps/questions/pages")));

const QuestionsRoutes = () => {
  const location = useLocation();
  return (
    <Route path={["/duvidas-e-sugestoes"]}>
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            <Questions
              exact
              path="/duvidas-e-sugestoes"
              component={Questions}
            />
          </AuthGuard>
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default QuestionsRoutes;
