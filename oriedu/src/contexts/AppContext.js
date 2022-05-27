import React, { createContext } from "react";

import { useDispatch, useSelector } from "react-redux";

import { MENU_TYPE } from "@src/store/actions";
import { initialState } from "@src/store/customizationReducer";

export const AppContext = createContext({
  ...initialState,
});

export const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);

  React.useEffect(() => {
    const theme = window.localStorage.getItem("theme");

    if (!theme) {
      dispatch({ type: MENU_TYPE, navType: "light" });
    } else {
      dispatch({ type: MENU_TYPE, navType: theme });
    }
  }, [dispatch]);

  return (
    <AppContext.Provider
      value={{
        ...customization,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
