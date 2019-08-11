import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Input = ({ handleAppChange }) => {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
    handleAppChange(e.target.value);
  };

  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    }
  }));
  const classes = useStyles();
  return (
    <TextField
      id="name"
      label="Nama/NIM"
      className={classes.textField}
      value={input}
      onChange={handleChange}
      margin="normal"
    />
  );
};

export default Input;
