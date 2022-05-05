import { combineReducers } from "redux";

// reducer import
import customizationReducer from "./customizationReducer";
import snackbarReducer from "./snackbarReducer";
import accountReducer from "./accountReducer";
import employeeReducer from "./employeeReducer";

const reducer = combineReducers({
  customization: customizationReducer,
  snackbar: snackbarReducer,
  accounts: accountReducer,
  employee: employeeReducer,
});

export default reducer;
