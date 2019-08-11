
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import uuidv4 from "uuid/v4";
import PageNumber from "./PageNumber";

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


export default function TableData({
  response,
  loading,
  handlePageClick,
  handleSort,
  sort
}) {
  const classes = useStyles();
  const { count, data, offset, size } = response;
  const keys = [
    "nama",
    "nim_prodi",
    "nim_tpb",
    "prodi",
    "fakultas",
    "angkatan"
  ];
  const toggleSort = key => {
    if (sort.name === key) {
      if (sort.toggle === 1) {
        return <span>{key.replace("_", " ").toUpperCase()} &#9652;</span>;
      } else if (sort.toggle === -1) {
        return <span> {key.replace("_", " ").toUpperCase()} &#9662;</span>;
      }
    }
    return <span> {key.replace("_", " ").toUpperCase()}</span>;
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              {keys.map(key => (
                <TableCell
                  key={uuidv4()}
                  onClick={() => handleSort(key)}
                  style={{ cursor: "pointer" }}
                >
                  {toggleSort(key)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell>Loading...</TableCell>
              </TableRow>
            ) : (
              data &&
              data.map(
                ({
                  _id,
                  nim_tpb,
                  nim_prodi,
                  angkatan,
                  prodi,
                  nama,
                  fakultas
                }) => (
                  <TableRow key={_id}>
                    <TableCell>{nama}</TableCell>
                    <TableCell>{nim_prodi}</TableCell>
                    <TableCell>{nim_tpb}</TableCell>
                    <TableCell>{prodi}</TableCell>
                    <TableCell>{fakultas}</TableCell>
                    <TableCell>{angkatan}</TableCell>
                  </TableRow>
                )
              )
            )}
          </TableBody>
        </Table>
      </Paper>
      {data && (
        <PageNumber
          total={count}
          size={size}
          currentPage={offset + 1}
          handlePageClick={handlePageClick}
        />
      )}
    </div>
  );
}
