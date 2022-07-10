import React, { useState } from "react";
import { mockData } from "../utils/mockData";
import Result from "./Result";
import useSearchIndex from "../utils/useSearchIndex";

const miniSearchOptions = {
  fields: ["title", "description"],
  storeFields: ["title", "description", "price"],
  searchOptions: {
    boost: { title: 2, description: 1 },
    prefix: true,
    fuzzy: 0.25,
  },
};

export default function SearchPageUsingHooks() {
  const [inputValue, setInputValue] = useState("");

  const { results, search, searchIndex } = useSearchIndex(
    mockData,
    miniSearchOptions,
    {}
  );

  return (
    <div className="flex flex-col items-center justify-start p-8 max-w-[1200px] mx-auto min-h-full">
      <img src="snoop-dogg.png" className="w-[250px] h-auto" />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          search(e.target.value);
          setInputValue(e.target.value);
        }}
        placeholder="Search Dogg Treats..."
        className="input input-lg input-bordered input-primary w-full mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {results.length
          ? results.map((result) => <Result key={result.id} result={result} />)
          : mockData.map((result) => (
              <Result key={result.id} result={result} />
            ))}
      </div>
    </div>
  );
}
