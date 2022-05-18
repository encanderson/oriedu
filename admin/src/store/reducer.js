import { combineReducers } from "redux";

// reducer import
import customizationReducer from "./customizationReducer";
import snackbarReducer from "./snackbarReducer";
import accountReducer from "./accountReducer";
import employeeReducer from "./employeeReducer";
import studentReducer from "./studentReducer";

export const reducer = combineReducers({
  customization: customizationReducer,
  snackbar: snackbarReducer,
  accounts: accountReducer,
  employee: employeeReducer,
  student: studentReducer,
});
