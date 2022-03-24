import React from "react";
import { useDispatch } from "react-redux";

import { useParams, useNavigate } from "react-router-dom";

import AuthWrapper1 from "@src/components/extended/AuthWrapper1";
import { SNACKBAR_OPEN } from "@src/store/actions";

import { confirmRegister } from "@src/api";

//===========================|| AUTH3 - CODE VERIFICATION ||===========================//

const ConfirmRegister = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      await confirmRegister(token);

      dispatch({
        type: SNACKBAR_OPEN,
        open: true,
        message: "Usuário confirmado",
        variant: "alert",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        alertSeverity: "success",
        close: false,
      });

      setTimeout(() => navigate("/"), 1000);
    })();
  }, [token, navigate, dispatch]);

  return (
    <AuthWrapper1>
      <div></div>
    </AuthWrapper1>
  );
};

export default ConfirmRegister;
