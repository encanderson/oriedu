import React from "react";

import { Autocomplete, TextField } from "@material-ui/core";

const AutoComplete = ({ options, handleChange, label, placeholder }) => {
  return (
    <Autocomplete
      autoSelect={true}
      style={{ marginBottom: 8 }}
      options={options}
      getOptionLabel={(item) => item}
      getOptionSelected={(option, value) => option === value}
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

export default AutoComplete;
