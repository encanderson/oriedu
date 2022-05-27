import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import { MENU_TYPE } from "@src/store/actions";

const ModeComponent = () => {
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);

  const [navType, setNavType] = React.useState(customization.navType);
  React.useEffect(() => {
    window.localStorage.setItem("theme", navType);
    dispatch({ type: MENU_TYPE, navType: navType });
  }, [dispatch, navType]);

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="layout"
        value={navType}
        onChange={(e) => setNavType(e.target.value)}
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="light"
          control={<Radio />}
          label="Light"
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 20 },
            "& .MuiFormControlLabel-label": {
              color: "grey.900",
            },
          }}
        />
        <FormControlLabel
          value="dark"
          control={<Radio />}
          label="Dark"
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 20 },
            "& .MuiFormControlLabel-label": {
              color: "grey.900",
            },
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default ModeComponent;
