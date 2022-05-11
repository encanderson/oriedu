import React, { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Loadable from "@src/components/Loadable";
import MainLayout from "@src/layout/MainLayout";

import AuthGuard from "@src/utils/route-guard/AuthGuard";

const EmployeeRegister = Loadable(lazy(() => import("@src/pages/employee")));

const EmployeeList = Loadable(lazy(() => import("@src/pages/employee/List")));
const Employee = Loadable(lazy(() => import("@src/pages/employee/Employee")));

const EmployeesRoutes = () => {
  const location = useLocation();
  return (
    <Route
      path={["/adicionar-funcionario", "/funcionarios", "/funcionario/:id"]}
    >
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            <Route
              exact
              path="/adicionar-funcionario"
              component={EmployeeRegister}
            />
            <Route exact path="/funcionarios" component={EmployeeList} />
            <Route exact path="/funcionario/:id" component={Employee} />
          </AuthGuard>
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default EmployeesRoutes;
