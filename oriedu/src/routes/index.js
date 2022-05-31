import React from "react";
import { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

// Routes
import MinimalLayout from "@src/layout/MinimalLayout";
import Loadable from "@src/components/Loadable";

const Home = Loadable(lazy(() => import("@src/pages/underConstruction")));
const ContactUsPage = Loadable(lazy(() => import("@src/pages/contact")));

const ConfirmUser = Loadable(
  lazy(() => import("@src/pages/auth/confirm-user/ConfirmRegister"))
);

const Login = Loadable(lazy(() => import("@src/pages/auth/login")));

const ForgotPassword = Loadable(
  lazy(() => import("@src/pages/auth/recovery-password"))
);

const ResetPassword = Loadable(
  lazy(() => import("@src/pages/auth/reset-password"))
);

const UserVerification = Loadable(
  lazy(() => import("@src/pages/auth/confirm-user"))
);

const ErrorPage = Loadable(lazy(() => import("@src/pages/NotFound")));

const Routes = () => {
  const location = useLocation();

  return (
    <MinimalLayout>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/contato" component={ContactUsPage} />
        <Route
          exact
          path="/confirmar-registro/:token"
          component={ConfirmUser}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/recuperar-senha" component={ForgotPassword} />
        <Route
          exact
          path="/recuperar-senha/:token"
          component={UserVerification}
        />
        <Route exact path="/atualizar-senha/:token" component={ResetPassword} />
        <Route component={ErrorPage} />
      </Switch>
    </MinimalLayout>
  );
};

export default Routes;
