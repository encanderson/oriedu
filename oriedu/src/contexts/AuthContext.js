import React, { createContext } from "react";

import { useDispatch, useSelector } from "react-redux";

import Loader from "@src/components/Loader";

import { AuthServices } from "@src/services";
import { getUser, verifyCredentials, logoutUser } from "@src/api";

import { LOGIN, LOGOUT, ACCOUNT_INITIALIZE } from "@src/store/actions";

// constant
const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

export const AuthContext = createContext({
  ...initialState,
  signIn: () => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.accounts);

  const signIn = async (code, accessToken) => {
    const user = await AuthServices.signIn(code, accessToken);

    if (!user.message) {
      dispatch({
        type: LOGIN,
        payload: {
          user: user,
          isLoggedIn: true,
        },
      });
    } else {
      return user.message;
    }
  };

  React.useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem("serviceToken");

        const credentials = await verifyCredentials();
        if (serviceToken && credentials) {
          const response = await getUser(serviceToken);

          const user = response.data;

          dispatch({
            type: ACCOUNT_INITIALIZE,
            payload: {
              isLoggedIn: true,
              user: user,
            },
          });
        } else {
          dispatch({
            type: ACCOUNT_INITIALIZE,
            payload: {
              isLoggedIn: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: ACCOUNT_INITIALIZE,
          payload: {
            isLoggedIn: false,
            user: null,
          },
        });
      }
    };

    init();
  }, [dispatch]);

  if (!state.isInitialized) {
    return <Loader />;
  }

  const logout = async () => {
    await logoutUser();

    localStorage.removeItem("serviceToken");

    localStorage.removeItem("refreshToken");

    setTimeout(() => dispatch({ type: LOGOUT }), 10);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
