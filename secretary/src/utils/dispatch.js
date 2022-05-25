import { SNACKBAR_OPEN } from "../store/actions";

export const dispatchMessage = (message, alertType) => {
  const options = {
    type: SNACKBAR_OPEN,
    open: true,
    message: message,
    variant: "alert",
    anchorOrigin: { vertical: "top", horizontal: "center" },
    alertSeverity: alertType,
    close: true,
  };

  return options;
};
