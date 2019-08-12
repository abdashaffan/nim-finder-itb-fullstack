import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import PageNumber from "./PageNumber";
import Loader from "./Loader";

import uuidv4 from "uuid/v4";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  }
}));

const TableData = ({
  response,
  loading,
  handlePageClick,
  handleSort,
  handleChangeRows,
  sort
}) => {
  const classes = useStyles();
  const { count, data, offset, size } = response;
  const toggleSort = key => {
    if (sort.name === key) {
      if (sort.toggle === 1) {
        return <span> &#9652;</span>;
      } else if (sort.toggle === -1) {
        return <span> &#9662;</span>;
      }
    }
    return <span> </span>;
  };
  const handleChangeRowsPerPage = e => {
    handleChangeRows(parseInt(e.target.value));
  };
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  key={uuidv4()}
                  onClick={() => handleSort("nama")}
                  style={{ cursor: "pointer" }}
                >
                  Nama
                  {toggleSort("nama")}
                </TableCell>
                <TableCell
                  key={uuidv4()}
                  onClick={() => handleSort("nim_prodi")}
                  style={{ cursor: "pointer" }}
                >
                  NIM Prodi
                  {toggleSort("nim_prodi")}
                </TableCell>
                <TableCell
                  key={uuidv4()}
                  onClick={() => handleSort("nim_tpb")}
                  style={{ cursor: "pointer" }}
                >
                  NIM TPB
                  {toggleSort("nim_tpb")}
                </TableCell>
                <TableCell
                  key={uuidv4()}
                  onClick={() => handleSort("prodi")}
                  style={{ cursor: "pointer" }}
                >
                  Prodi
                  {toggleSort("prodi")}
                </TableCell>
                <Hidden only={["xs", "sm", "md"]}>
                  <TableCell
                    key={uuidv4()}
                    onClick={() => handleSort("fakultas")}
                    style={{ cursor: "pointer" }}
                  >
                    Fakultas
                    {toggleSort("fakultas")}
                  </TableCell>
                </Hidden>
                <Hidden only={["xs", "sm", "md"]}>
                  <TableCell
                    key={uuidv4()}
                    onClick={() => handleSort("angkatan")}
                    style={{ cursor: "pointer" }}
                  >
                    Angkatan
                    {toggleSort("angkatan")}
                  </TableCell>
                </Hidden>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell>Loading...</TableCell>
                </TableRow>
              ) : (
                data &&
                data.map(d => (
                  <TableRow key={d._id}>
                    <TableCell>{d.nama}</TableCell>
                    <TableCell>{d.nim_prodi}</TableCell>
                    <TableCell>{d.nim_tpb}</TableCell>
                    <TableCell>{d.prodi}</TableCell>
                    <Hidden only={["xs", "sm", "md"]}>
                      <TableCell>{d.fakultas}</TableCell>
                    </Hidden>
                    <Hidden only={["xs", "sm", "md"]}>
                      <TableCell>{d.angkatan}</TableCell>
                    </Hidden>
                  </TableRow>
                ))
              )}
            </TableBody>
            {data && data.length > 0 && (
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[10, 20, 25, 100]}
                    colSpan={3}
                    count={count}
                    rowsPerPage={size}
                    page={offset}
                    SelectProps={{
                      inputProps: { "aria-label": "rows per page" },
                      native: true
                    }}
                    onChangePage={handlePageClick}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={PageNumber}
                  />
                </TableRow>
              </TableFooter>
            )}
          </Table>
        </Paper>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default TableData;
