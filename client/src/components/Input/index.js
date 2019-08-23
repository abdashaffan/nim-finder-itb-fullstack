import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles";

const Input = ({ handleAppChange }) => {
  const [input, setInput] = useState("");
  const classes = useStyles();

  const handleChange = e => {
    setInput(e.target.value);
    handleAppChange(e.target.value);
  };

  return (
    <TextField
      id="name"
      label="Nama/NIM"
      className={classes.textField}
      value={input}
      autoComplete="off"
      onChange={handleChange}
      margin="normal"
    />
  );
};

export default Input;
