import React, { useState, useEffect, useRef } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { asyncFetchStudentData } from "../utils/fetch";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table";
import Input from "./Input";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

const App = () => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({
    query: "",
    offset: 0,
    size: 10
  });
  const [sortType, setSortType] = useState({ name: "nim_prodi", toggle: 1 });
  const firstUpdate = useRef(true);
  const classes = useStyles();

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    let source = { token: null };
    const loadStudentData = async () => {
      setLoading(true);
      const res = await asyncFetchStudentData({ ...search, sortType }, source);
      if (res.data || res.msg) {
        setResponse(res);
        setLoading(false);
      } else {
        setResponse({});
      }
    };

    loadStudentData();

    return () => {
      if (source.token) {
        source.token.cancel();
      }
    };
  }, [search, sortType]);

  const handleChange = query => {
    setSearch({ ...search, query, offset: 0 });
  };

  const handlePageClick = num => {
    setSearch({ ...search, offset: num });
  };

  const handleSort = key => {
    if (key === sortType.name) {
      //toggle only
      setSortType({ ...sortType, toggle: -1 * sortType.toggle });
    } else {
      //change sort key
      setSortType({ name: key, toggle: 1 });
    }
  };
  const handleChangeRows = num => {
    setSearch({ ...search, size: num, offset: 0 });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Input handleAppChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Table
            response={response}
            loading={loading}
            handlePageClick={handlePageClick}
            handleSort={handleSort}
            sort={sortType}
            handleChangeRows={handleChangeRows}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
