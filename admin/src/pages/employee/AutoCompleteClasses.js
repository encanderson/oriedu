import React from "react";

import { Autocomplete, TextField } from "@material-ui/core";

const AutoCompleteClasses = ({ options, handleChange, label, placeholder }) => {
  return (
    <Autocomplete
      autoSelect={true}
      multiple={true}
      style={{ marginBottom: 8 }}
      options={options}
      getOptionLabel={(item) => item.class}
      getOptionSelected={(option, value) => option.id === value.id}
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

export default AutoCompleteClasses;
