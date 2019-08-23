import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useStyles } from "./style";

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
};

export default Loader;
