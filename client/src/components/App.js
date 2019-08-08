import React, { useState, useEffect } from "react";
import { asyncFetchStudentData } from "../utils/fetch";
import Table from "./Table";
import Input from "./Input";
import useDebounce from "../hooks/useDebounce";

const App = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  // const [response, setResponse] = useState({});
  const search = useDebounce(input, 300);

  const handleChange = input => {
    setInput(input);
  };

  useEffect(() => {
    const loadStudentData = async () => {
      const res = await asyncFetchStudentData({
        query: search,
        size: 20,
        offset: 0
      });
      if (res && res.data) {
        console.log(res);
        // setResponse(res);
        setData(res.data);
      }
    };
    loadStudentData();
  }, [search]);

  useEffect(() => {
    if (input === "") {
      setData([]);
    }
  }, [input]);

  return (
    <div className="App">
      <Input handleAppChange={handleChange} />
      <Table data={data} />
    </div>
  );
};

export default App;
