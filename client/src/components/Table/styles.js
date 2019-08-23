import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    width: "100%",
    overflowX: "auto"
  },
  table: {
    [theme.breakpoints.down("lg")]: {
      minWidth: 650
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 500
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: 340,
      width: "100%"
    }
  },
  tableCellRoot: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "12px",
      padding: "8px 6px 8px 6px"
    }
  },
  paginationCaption: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "12px"
    }
  },
  paginationInput: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "12px",
      marginLeft: "5px",
      marginRight: "15px"
    }
  }
}));
