import React, { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { MENU_TYPE } from "@src/store/actions";
import { initialState } from "@src/store/customizationReducer";

export const AppContext = createContext({
  ...initialState,
  isProfile: false,
  handleSetProfile: () => {},
});

export const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const history = useHistory();
  const [isProfile, setIsProfile] = React.useState(false);

  React.useEffect(() => {
    const theme = window.localStorage.getItem("theme");

    if (!theme) {
      dispatch({ type: MENU_TYPE, navType: "light" });
    } else {
      dispatch({ type: MENU_TYPE, navType: theme });
    }
  }, [dispatch]);

  const handleSetProfile = () => {
    setIsProfile(true);
  };

  React.useEffect(() => {
    const profile = window.localStorage.getItem("profile");

    if (!profile) {
      history.push("/perfil");
    } else {
      setIsProfile(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...customization,
        isProfile,
        handleSetProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
