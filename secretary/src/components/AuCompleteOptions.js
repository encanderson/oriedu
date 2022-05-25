import React from "react";

import { Autocomplete, TextField } from "@material-ui/core";

const AutoCompleteOptions = ({
  options,
  handleChange,
  label,
  placeholder,
  value,
}) => {
  return (
    <Autocomplete
      autoSelect={true}
      style={{ marginBottom: 8 }}
      options={options}
      value={value}
      getOptionLabel={(item) => item.label}
      getOptionSelected={(option, value) => option.value === value.value}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder={placeholder}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

export default AutoCompleteOptions;
