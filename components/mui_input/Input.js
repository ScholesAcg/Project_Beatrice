import React from "react";
import { TextField, Typography } from "@mui/material";

const InputField = ({ style ,label, value, onChange }) => {
  return (
    <div style={style}>
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        slotProps={{input: {
          inputMode: 'numeric',
          pattern: '[0-9]*',
        }}}
      />
      {/*value && (
        <Typography variant="body1" style={{ marginTop: "1rem" }}>
          You typed: {value}
        </Typography>
      )*/}
    </div>
  );
};

export default InputField;
