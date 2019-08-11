import React, { useState, useEffect } from "react";
import { asyncFetchStudentData } from "../utils/fetch";
import Table from "./Table";
import Input from "./Input";

const App = () => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({
    query: "",
    offset: 0,
    size: 20
  });

  useEffect(() => {
    let source = { token: null };
    const loadStudentData = async () => {
      setLoading(true);
      const res = await asyncFetchStudentData(search, source);
      console.log("TOKEN: ", source.token);
      if (res.data || res.msg) {
        console.log("RES :", res);
        setResponse(res);
      } else {
        setResponse({});
      }
      setLoading(false);
    };
    loadStudentData();

    return () => {
      if (source.token) {
        source.token.cancel();
      }
    };
  }, [search]);

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
