import React from "react";
import { lazy } from "react";
import { Route, Routes as Router } from "react-router-dom";

// Routes
import MinimalLayout from "@src/layout/MinimalLayout";
import Loadable from "@src/components/Loadable";

const Register = Loadable(lazy(() => import("@src/pages/auth/register")));
const Login = Loadable(lazy(() => import("@src/pages/auth/login")));
// const AuthLogin = Loadable(lazy(() => import("@src/pages/auth/confirm-user")));

const ForgotPassword = Loadable(
  lazy(() => import("@src/pages/auth/recovery-password"))
);

const ResetPassword = Loadable(
  lazy(() => import("@src/pages/auth/reset-password"))
);

const ErrorPage = Loadable(lazy(() => import("@src/pages/NotFound")));

const Routes = () => {
  return (
    <MinimalLayout>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        {/* <Route
          path="/confirmar-registro/:token"
          element={<UserVerification />}
        /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-senha" element={<ForgotPassword />} />
        {/* <Route path="/recuperar-senha/:token" element={<UserVerification />} /> */}
        <Route path="/atualizar-senha/:token" element={<ResetPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Router>
    </MinimalLayout>
  );
};

export default Routes;
