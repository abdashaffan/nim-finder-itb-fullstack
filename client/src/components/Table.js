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
  const toggleSort = key => {
    if (sort.name === key) {
      if (sort.toggle === 1) {
        return " #9662;";
      } else if (sort.toggle === -1) {
        return " #9652;";
      }
    }
    return "";
  };
  if (loading) {
    return <h3>Loading..</h3>;
  } else {
    if (data && data.length > 0) {
      return (
        <>
          <Table responsive size="sm" hover borderless>
            <thead>
              <tr>
                <th>
                  <span
                    onClick={() => handleSort("nama")}
                    style={{ cursor: "pointer" }}
                  >
                    Nama {toggleSort("nama")}{" "}
                  </span>
                </th>
                <th>
                  <span
                    onClick={() => handleSort("nim_prodi")}
                    style={{ cursor: "pointer" }}
                  >
                    NIM Prodi {toggleSort("nim_prodi")}
                  </span>
                </th>
                <th>
                  <span
                    onClick={() => handleSort("nim_tpb")}
                    style={{ cursor: "pointer" }}
                  >
                    NIM TPB {toggleSort("nim_tpb")}
                  </span>
                </th>
                <th>
                  <span
                    onClick={() => handleSort("prodi")}
                    style={{ cursor: "pointer" }}
                  >
                    Jurusan {toggleSort("prodi")}
                  </span>
                </th>
                <th>
                  <span
                    onClick={() => handleSort("fakultas")}
                    style={{ cursor: "pointer" }}
                  >
                    Fakultas {toggleSort("fakultas")}
                  </span>
                </th>
                <th>
                  <span onClick={() => handleSort("angkatan")}>
                    Angkatan {toggleSort("angkatan")}
                  </span>
                </th>
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
