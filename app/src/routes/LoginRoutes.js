import { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import GuestGuard from "@src/utils/route-guard/GuestGuard";
import MinimalLayout from "@src/layout/MinimalLayout";
import NavMotion from "@src/layout/NavMotion";
import Loadable from "@src/components/Loadable";

const Register = Loadable(lazy(() => import("@src/pages/auth/register")));
const Login = Loadable(lazy(() => import("@src/pages/auth/login")));
const AuthLogin = Loadable(lazy(() => import("@src/pages/auth/confirm-user")));

const LoginRoutes = () => {
  const location = useLocation();

  return (
    <Route path={["/registro", "/sign", "/sign/:token"]}>
      <MinimalLayout>
        <Switch location={location} key={location.pathname}>
          <NavMotion>
            <GuestGuard>
              <Route path="/registro" component={Register} />
              <Route path="/sign" component={Login} />
              <Route path="/sign/:token" component={AuthLogin} />
            </GuestGuard>
          </NavMotion>
        </Switch>
      </MinimalLayout>
    </Route>
  );
};

export default LoginRoutes;
