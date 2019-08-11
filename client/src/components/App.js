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
  const [sortType, setSortType] = useState({ name: "nim_prodi", toggle: 1 });

  useEffect(() => {
    let source = { token: null };
    const loadStudentData = async () => {
      setLoading(true);
      const res = await asyncFetchStudentData({ ...search, sortType }, source);
      if (res.data || res.msg) {
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
  }, [search, sortType]);

  const handleChange = query => {
    setSearch({ ...search, query, offset: 0 });
  };

  const handlePageClick = num => {
    setSearch({ ...search, offset: num - 1 });
  };

  const handleSort = key => {
    if (key === sortType.name) {
      //toggle only
      setSortType({ ...sortType, toggle: -1 * sortType.toggle });
    } else {
      //change sort key
      setSortType({ name: key, toggle: 1 });
    }
  };

  return (
    <div className="App">
      <Input handleAppChange={handleChange} />
      <Table
        response={response}
        loading={loading}
        handlePageClick={handlePageClick}
        handleSort={handleSort}
        sort={sortType}
      />
    </div>
  );
};

export default App;
