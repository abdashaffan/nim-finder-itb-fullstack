import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const throttled = setInterval(() => {
      setSearch(value);
    }, delay);
    return () => {
      clearInterval(throttled);
    };
  }, [delay, value]);

  return search;
};

export default useDebounce;
