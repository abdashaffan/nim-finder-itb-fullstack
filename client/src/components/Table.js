import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";
import PageNumber from "./PageNumber";

const TableData = ({ response, loading }) => {
  const { count, data, offset, size } = response;

  if (loading) {
    return <h3>Loading</h3>;
  } else {
    if (data) {
      return (
        <>
          <PageNumber total={count} size={size} currentPage={offset + 1} />
          <Table responsive size="sm" hover borderless>
            <thead>
              <tr>
                <th>Nama</th>
                <th>NIM Prodi</th>
                <th>NIM TPB</th>
                <th>Prodi</th>
                <th>Fakultas</th>
                <th>Angkatan</th>
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
          <PageNumber total={count} size={size} currentPage={offset + 1} />
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
