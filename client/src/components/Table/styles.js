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
      minWidth: 400
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: 340,
      width: "100%"
    }
  },
  tableCell: {
    [theme.breakpoints.only("xs")]: {
      // padding: "2px 12px 2px 12px !important",
      fontSize: "9px"
    }
  },
  caption: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "9px"
    }
  },
  input: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "9px",
      marginLeft: "5px",
      marginRight: "15px"
    }
  }
}));
