import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const throttled = setTimeout(() => {
      setSearch(value);
    }, delay);
    return () => {
      clearTimeout(throttled);
    };
  }, [delay, value]);

  return search;
};

export default useDebounce;
