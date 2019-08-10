import React, { useState, useEffect } from "react";
import { asyncFetchStudentData } from "../utils/fetch";
import Table from "./Table";
import Input from "./Input";
import useDebounce from "../hooks/useDebounce";

const App = () => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({
    query: "",
    offset: 0,
    size: 20
  });

  const debouncedQuery = useDebounce(search.query, 400);

  useEffect(() => {
    const loadStudentData = async () => {
      setLoading(true);
      const res = await asyncFetchStudentData({
        query: debouncedQuery,
        size: search.size,
        offset: search.offset
      });
      if (res.data || res.msg) {
        console.log(res);
        setResponse(res);
      } else {
        setResponse({});
      }
      setLoading(false);
    };
    loadStudentData();
  }, [debouncedQuery, search.offset, search.size]);

  const handleChange = query => {
    setSearch({ ...search, query, offset: 0 });
  };

  const handlePageClick = num => {
    setSearch({ ...search, offset: num - 1 });
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
