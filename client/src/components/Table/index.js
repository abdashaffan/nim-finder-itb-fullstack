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
    return "";
  };
  const headerColorActive = key => {
    return ActiveArrow(key) ? "rgba(35, 46, 115, 0.81)" : "rgba(0,0,0,0.54)";
  };
  const handleChangeRowsPerPage = e => {
    handleChangeRows(parseInt(e.target.value));
  };
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {loading && <Loader />}
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  classes={
                    { root: classes.tableCellRoot, sizeSmall: classes }
                      .tableCellSizeSmall
                  }
                  key={uuidv4()}
                  onClick={() => handleSort("nama")}
                  style={{
                    cursor: "pointer",
                    color: headerColorActive("nama")
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Nama
                    {ActiveArrow("nama")}
                  </span>
                </TableCell>
                <TableCell
                  classes={
                    { root: classes.tableCellRoot, sizeSmall: classes }
                      .tableCellSizeSmall
                  }
                  key={uuidv4()}
                  onClick={() => handleSort("nim_prodi")}
                  style={{
                    cursor: "pointer",
                    color: headerColorActive("nim_prodi")
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    NIM Prodi
                    {ActiveArrow("nim_prodi")}
                  </span>
                </TableCell>
                <TableCell
                  classes={
                    { root: classes.tableCellRoot, sizeSmall: classes }
                      .tableCellSizeSmall
                  }
                  key={uuidv4()}
                  onClick={() => handleSort("nim_tpb")}
                  style={{
                    cursor: "pointer",
                    color: headerColorActive("nim_tpb")
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    NIM TPB
                    {ActiveArrow("nim_tpb")}
                  </span>
                </TableCell>
                <TableCell
                  classes={
                    { root: classes.tableCellRoot, sizeSmall: classes }
                      .tableCellSizeSmall
                  }
                  key={uuidv4()}
                  onClick={() => handleSort("prodi")}
                  style={{
                    cursor: "pointer",
                    color: headerColorActive("prodi")
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Prodi
                    {ActiveArrow("prodi")}
                  </span>
                </TableCell>
                <Hidden only={["xs", "sm", "md"]}>
                  <TableCell
                    classes={
                      { root: classes.tableCellRoot, sizeSmall: classes }
                        .tableCellSizeSmall
                    }
                    key={uuidv4()}
                    onClick={() => handleSort("fakultas")}
                    style={{
                      cursor: "pointer",
                      color: headerColorActive("fakultas")
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Fakultas
                      {ActiveArrow("fakultas")}
                    </span>
                  </TableCell>
                </Hidden>
                <Hidden only={["xs", "sm", "md"]}>
                  <TableCell
                    classes={
                      { root: classes.tableCellRoot, sizeSmall: classes }
                        .tableCellSizeSmall
                    }
                    key={uuidv4()}
                    onClick={() => handleSort("angkatan")}
                    style={{
                      cursor: "pointer",
                      color: headerColorActive("angkatan")
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Angkatan
                      {ActiveArrow("angkatan")}
                    </span>
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
                    <TableCell
                      classes={{
                        root: classes.tableCellRoot,
                        sizeSmall: classes.tableCellSizeSmall
                      }}
                    >
                      {d.nama}
                    </TableCell>
                    <TableCell
                      classes={{
                        root: classes.tableCellRoot,
                        sizeSmall: classes.tableCellSizeSmall
                      }}
                    >
                      {d.nim_prodi}
                    </TableCell>
                    <TableCell
                      classes={{
                        root: classes.tableCellRoot,
                        sizeSmall: classes.tableCellSizeSmall
                      }}
                    >
                      {d.nim_tpb}
                    </TableCell>
                    <TableCell
                      classes={{
                        root: classes.tableCellRoot,
                        sizeSmall: classes.tableCellSizeSmall
                      }}
                    >
                      {d.prodi}
                    </TableCell>
                    <Hidden only={["xs", "sm", "md"]}>
                      <TableCell
                        classes={{
                          root: classes.tableCellRoot,
                          sizeSmall: classes.tableCellSizeSmall
                        }}
                      >
                        {d.fakultas}
                      </TableCell>
                    </Hidden>
                    <Hidden only={["xs", "sm", "md"]}>
                      <TableCell
                        classes={{
                          root: classes.tableCellRoot,
                          sizeSmall: classes.tableCellSizeSmall
                        }}
                      >
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
                    classes={{
                      caption: classes.paginationCaption,
                      input: classes.paginationInput
                    }}
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
    </>
  );
};

export default TableData;
