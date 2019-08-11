import axios from "axios";

export const asyncFetchStudentData = async (body, source) => {
  /***
   * REFERENSI :
   * https://github.com/axios/axios#cancellation
   * https://github.com/axios/axios/issues/1654
   * https://youtu.be/_TleXX0mxaY : Cancelling an Axios request in a useEffect hook, oleh Leigh Halliday
   */
  try {
    if (!body.query || body.query.trim().length === 0) {
      return {};
    }
    source.token = axios.CancelToken.source();
    const res = await axios.post("api/students", body, {
      cancelToken: source.token.token
    });
    return res.data;
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log("Request canceled for query: ", body.query);
    } else {
      console.log(err);
    }
    return {};
  }
};
