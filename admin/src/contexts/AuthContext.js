import React, { createContext } from "react";

import { useDispatch, useSelector } from "react-redux";

import Loader from "@src/components/Loader";

import { AuthServices } from "@src/services";

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
  logout: () => Promise.resolve(),
  refreshUser: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.accounts);

  const signIn = async (code, accessToken) => {
    const isUser = await AuthServices.signIn(code, accessToken);

    if (isUser) {
      const user = await AuthServices.getUser();

      if (user) {
        dispatch({
          type: LOGIN,
          payload: {
            user: user,
            isLoggedIn: true,
          },
        });
      }
    } else {
      return "Usuário não autorizado";
    }
  };

  const refreshUser = async () => {
    const user = await AuthServices.getUser();

    if (user) {
      dispatch({
        type: ACCOUNT_INITIALIZE,
        payload: {
          isLoggedIn: true,
          user: user,
        },
      });
    }
  };

  React.useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem("serviceToken");

        if (serviceToken) {
          const user = await AuthServices.getUser();

          if (user) {
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
    await AuthServices.logout();

    localStorage.removeItem("serviceToken");

    localStorage.removeItem("refreshToken");

    setTimeout(() => dispatch({ type: LOGOUT }), 10);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        refreshUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
