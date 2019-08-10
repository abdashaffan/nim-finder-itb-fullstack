import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";

const TableData = ({ response, loading }) => {
  const { count, data, offset, query, size } = response;
  return (
    <Table responsive borderless hover>
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
        {loading ? (
          <tr>
            <td>Loading..</td>
          </tr>
        ) : (
          data &&
          data.map(
            ({ _id, nim_tpb, nim_prodi, angkatan, prodi, nama, fakultas }) => (
              <tr key={_id}>
                <td>{nama}</td>
                <td>{nim_prodi}</td>
                <td>{nim_tpb}</td>
                <td>{prodi}</td>
                <td>{fakultas}</td>
                <td>{angkatan}</td>
              </tr>
            )
          )
        )}
      </tbody>
    </Table>
  );
};

TableData.propTypes = {
  response: PropTypes.object.isRequired
};
export default TableData;
