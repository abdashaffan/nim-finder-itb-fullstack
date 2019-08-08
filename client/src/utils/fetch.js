import axios from "axios";

export const asyncFetchStudentData = async ({ query, size, offset = 0 }) => {
  try {
    if (query === "") {
      return null;
    }
    const body = {
      query,
      size,
      offset
    };
    const res = await axios.post("api/students", body);
    return res.data;
  } catch (e) {
    console.log(e);
    return {};
  }
};
