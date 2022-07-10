import { useEffect, useState } from "react";
import MiniSearch from "minisearch";

export default function useSearchIndex(
  data,
  miniSearchOptions,
  searchOptions = {} // the "= {}" sets a default value of an empty object for this argument
) {
  const [results, setResults] = useState([]);
  const [searchIndex, setSearchIndex] = useState(null);

  useEffect(() => {
    const index = new MiniSearch(miniSearchOptions);

    index.addAll(data);

    setSearchIndex(index);
  }, []);

  const search = (value) => {
    const newResults = searchIndex?.search(value, searchOptions);
    setResults(newResults);
  };

  return { results, search, searchIndex };
}
