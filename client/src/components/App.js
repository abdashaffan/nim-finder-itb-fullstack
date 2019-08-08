import React, { useState, useEffect } from "react";
import { asyncFetchStudentData } from "../utils/fetch";
// import SearchBar from "./SearchBar";
// import Table from "./Table";
import useDebounce from "../hooks/useDebounce";

const App = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const search = useDebounce(input, 400);

  const handleChange = e => {
    setInput(e.target.value);
  };
  useEffect(() => {
    const loadStudentData = async () => {
      const res = await asyncFetchStudentData({
        query: search,
        size: 20,
        offset: 0
      });
      if (res && res.data) {
        setData(res.data);
      }
    };
    loadStudentData();
  }, [search]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Masukkan nama atau NIM"
        name="input"
        onChange={handleChange}
      />
      <ul>
        {data.map(item => (
          <li key={item.nim_tpb}>{item.nama}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
