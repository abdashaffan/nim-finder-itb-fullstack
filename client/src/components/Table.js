import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";

const TableData = ({ data }) => (
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
      {data.map(
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
      )}
    </tbody>
  </Table>
);

TableData.propTypes = {
  data: PropTypes.array.isRequired
};
export default TableData;
