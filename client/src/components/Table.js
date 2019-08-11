import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";
import PageNumber from "./PageNumber";

const TableData = ({
  response,
  loading,
  handlePageClick,
  handleSort,
  sort
}) => {
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
  if (loading) {
    return <h3>Loading..</h3>;
  } else {
    if (data && data.length > 0) {
      return (
        <>
          <Table responsive size="xs" hover borderless>
            <thead>
              <tr>
                {keys.map(key => (
                  <th
                    onClick={() => handleSort(key)}
                    style={{ cursor: "pointer" }}
                  >
                    {toggleSort(key)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(
                ({
                  _id,
                  nim_tpb,
                  nim_prodi,
                  angkatan,
                  prodi,
                  nama,
                  fakultas
                }) => (
                  <tr key={_id}>
                    <td>{nama}</td>
                    <td>{nim_prodi}</td>
                    <td>{nim_tpb}</td>
                    <td>{prodi}</td>
                    <td>{fakultas}</td>
                    <td>{angkatan}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
          <PageNumber
            total={count}
            size={size}
            currentPage={offset + 1}
            handlePageClick={handlePageClick}
          />
        </>
      );
    }
  }
  return <></>;
};

TableData.propTypes = {
  response: PropTypes.object.isRequired
};
export default TableData;
