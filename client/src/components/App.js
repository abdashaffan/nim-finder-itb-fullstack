import React, { useState, useEffect } from "react";
import { asyncFetchStudentData } from "../utils/fetch";
import Table from "./Table";
import Input from "./Input";
import useDebounce from "../hooks/useDebounce";

const App = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const search = useDebounce(input, 400);

  useEffect(() => {
    const loadStudentData = async () => {
      setLoading(true);
      const res = await asyncFetchStudentData({
        query: search,
        size: 20,
        offset: 0
      });
      if (res.data || res.msg) {
        setResponse(res);
      } else {
        setResponse({});
      }
      setLoading(false);
    };
    loadStudentData();
  }, [search]);

  const handleChange = input => {
    setInput(input);
  };

  return (
    <div className="App">
      <Input handleAppChange={handleChange} />
      <Table response={response} loading={loading} />
    </div>
  );
};

export default App;
