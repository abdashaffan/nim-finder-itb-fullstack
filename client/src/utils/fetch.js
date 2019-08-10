import axios from "axios";

export const asyncFetchStudentData = async ({ query, size, offset = 0 }) => {
  try {
    if (!query || query.trim().length === 0) {
      return {};
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
