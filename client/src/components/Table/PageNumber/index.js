import React from "react";
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { useStyles } from "./styles";

const PageNumber = props => {
  const classes = useStyles();
  const theme = useTheme();
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
      <IconButton
        size="small"
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? (
          <LastPageIcon classes={{ root: classes.iconRoot }} />
        ) : (
          <FirstPageIcon classes={{ root: classes.iconRoot }} />
        )}
      </IconButton>
      <IconButton
        size="small"
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight classes={{ root: classes.iconRoot }} />
        ) : (
          <KeyboardArrowLeft classes={{ root: classes.iconRoot }} />
        )}
      </IconButton>
      <IconButton
        size="small"
        onClick={handleNextButtonClick}
        disabled={page >= totalPage - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft classes={{ root: classes.iconRoot }} />
        ) : (
          <KeyboardArrowRight classes={{ root: classes.iconRoot }} />
        )}
      </IconButton>
      <IconButton
        size="small"
        onClick={handleLastPageButtonClick}
        disabled={page >= totalPage - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? (
          <FirstPageIcon classes={{ root: classes.iconRoot }} />
        ) : (
          <LastPageIcon classes={{ root: classes.iconRoot }} />
        )}
      </IconButton>
    </div>
  );
};

export default PageNumber;
