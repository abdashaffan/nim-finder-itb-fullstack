import React from "react";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import NavButton from "./NavButton";
import { useStyles } from "./styles";

const PageNumber = props => {
  const classes = useStyles();
  const { count, page, rowsPerPage, onChangePage } = props;
  const totalPage = Math.ceil(count / rowsPerPage);
  function handleFirstPageButtonClick() {
    onChangePage(0);
  }

  function handleBackButtonClick() {
    onChangePage(page - 1);
  }

  function handleNextButtonClick() {
    onChangePage(page + 1);
  }

  function handleLastPageButtonClick() {
    onChangePage(totalPage - 1);
  }

  return (
    <div className={classes.root}>
      <NavButton
        handleClick={handleFirstPageButtonClick}
        disabledCondition={page === 0}
        ariaLabel="first page"
      >
        <FirstPageIcon classes={{ root: classes.iconRoot }} />
      </NavButton>
      <NavButton
        handleClick={handleBackButtonClick}
        disabledCondition={page === 0}
        ariaLabel="previous page"
      >
        <KeyboardArrowLeft classes={{ root: classes.iconRoot }} />
      </NavButton>
      <NavButton
        handleClick={handleNextButtonClick}
        disabledCondition={page >= totalPage - 1}
        ariaLabel="next page"
      >
        <KeyboardArrowRight classes={{ root: classes.iconRoot }} />
      </NavButton>
      <NavButton
        handleClick={handleLastPageButtonClick}
        disabledCondition={page >= totalPage - 1}
        ariaLabel="last page"
      >
        <LastPageIcon classes={{ root: classes.iconRoot }} />
      </NavButton>
    </div>
  );
};

export default PageNumber;
