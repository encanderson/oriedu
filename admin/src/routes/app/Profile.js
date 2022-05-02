import React, { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Loadable from "@src/components/Loadable";
import MainLayout from "@src/layout/MainLayout";

import AuthGuard from "@src/utils/route-guard/AuthGuard";

const Profile = Loadable(lazy(() => import("@src/pages/profile")));

const ProfileRoutes = () => {
  const location = useLocation();
  return (
    <Route path={["/perfil"]}>
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            <Route exact path="/perfil" component={Profile} />
          </AuthGuard>
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default ProfileRoutes;
