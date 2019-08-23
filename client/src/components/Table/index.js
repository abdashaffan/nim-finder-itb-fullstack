import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  Hidden
} from "@material-ui/core";
import PageNumber from "./PageNumber";
import Loader from "./Loader";
import { useStyles } from "./styles";
import uuidv4 from "uuid/v4";

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
  const ActiveArrow = key => {
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
                  className={classes.tableCell}
                  key={uuidv4()}
                  onClick={() => handleSort("nama")}
                  style={{ cursor: "pointer" }}
                >
                  Nama
                  {ActiveArrow("nama")}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  key={uuidv4()}
                  onClick={() => handleSort("nim_prodi")}
                  style={{ cursor: "pointer" }}
                >
                  NIM Prodi
                  {ActiveArrow("nim_prodi")}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  key={uuidv4()}
                  onClick={() => handleSort("nim_tpb")}
                  style={{ cursor: "pointer" }}
                >
                  NIM TPB
                  {ActiveArrow("nim_tpb")}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  key={uuidv4()}
                  onClick={() => handleSort("prodi")}
                  style={{ cursor: "pointer" }}
                >
                  Prodi
                  {ActiveArrow("prodi")}
                </TableCell>
                <Hidden only={["xs", "sm", "md"]}>
                  <TableCell
                    className={classes.tableCell}
                    key={uuidv4()}
                    onClick={() => handleSort("fakultas")}
                    style={{ cursor: "pointer" }}
                  >
                    Fakultas
                    {ActiveArrow("fakultas")}
                  </TableCell>
                </Hidden>
                <Hidden only={["xs", "sm", "md"]}>
                  <TableCell
                    className={classes.tableCell}
                    key={uuidv4()}
                    onClick={() => handleSort("angkatan")}
                    style={{ cursor: "pointer" }}
                  >
                    Angkatan
                    {ActiveArrow("angkatan")}
                  </TableCell>
                </Hidden>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow />
              ) : (
                data &&
                data.map(d => (
                  <TableRow key={d._id}>
                    <TableCell className={classes.tableCell}>
                      {d.nama}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {d.nim_prodi}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {d.nim_tpb}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {d.prodi}
                    </TableCell>
                    <Hidden only={["xs", "sm", "md"]}>
                      <TableCell className={classes.tableCell}>
                        {d.fakultas}
                      </TableCell>
                    </Hidden>
                    <Hidden only={["xs", "sm", "md"]}>
                      <TableCell className={classes.tableCell}>
                        {d.angkatan}
                      </TableCell>
                    </Hidden>
                  </TableRow>
                ))
              )}
            </TableBody>
            {data && data.length > 0 && (
              <TableFooter>
                <TableRow>
                  <TablePagination
                    labelRowsPerPage="Jumlah:"
                    classes={{ caption: classes.caption, input: classes.input }}
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
