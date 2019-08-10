import React, { useState, useEffect } from "react";
import { asyncFetchStudentData } from "../utils/fetch";
import Table from "./Table";
import Input from "./Input";
import useDebounce from "../hooks/useDebounce";

const App = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(20);
  const [offset, setOffset] = useState(0);

  const search = useDebounce(input, 400);

  useEffect(() => {
    const loadStudentData = async () => {
      setLoading(true);
      const res = await asyncFetchStudentData({
        query: search,
        size,
        offset
      });
      if (res.data || res.msg) {
        setResponse(res);
      } else {
        setResponse({});
      }
      setLoading(false);
    };
    loadStudentData();
  }, [offset, search, size]);

  const handleChange = input => {
    setInput(input);
  };

  const handlePageClick = num => {
    console.log(num);
    setOffset(num - 1);
  };

  return (
    <div className="App">
      <Input handleAppChange={handleChange} />
      <Table
        response={response}
        loading={loading}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

export default App;
