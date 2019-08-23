import React from "react";
import IconButton from "@material-ui/core/IconButton";

const NavButton = props => {
  return (
    <>
      <IconButton
        size="small"
        onClick={props.handleClick}
        disabled={props.disabledCondition}
        aria-label={props.ariaLabel}
      >
        {props.children}
      </IconButton>
    </>
  );
};

export default NavButton;
