import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    [theme.breakpoints.only("xs")]: {
      marginLeft: theme.spacing(1)
    },
    marginLeft: theme.spacing(2.5)
  },
  iconRoot: {
    [theme.breakpoints.only("xs")]: {
      width: 20,
      height: 20,
      padding: 1,
      fontWeight: "bold"
    }
  }
}));
