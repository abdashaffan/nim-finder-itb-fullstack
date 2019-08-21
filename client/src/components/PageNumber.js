import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  },
  buttonRoot: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "10px"
    }
  }
}));

const PageNumber = props => {
  const classes = useStyles1();
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
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        size="small"
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        size="small"
        onClick={handleNextButtonClick}
        disabled={page >= totalPage - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        size="small"
        onClick={handleLastPageButtonClick}
        disabled={page >= totalPage - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
};

export default PageNumber;
