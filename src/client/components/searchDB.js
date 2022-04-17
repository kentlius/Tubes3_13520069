import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchDB() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/user?name=${query}`);
      setResults(data.results);
    };
    fetchData();
  }, [query]);

  return (
    <div className="py-0 px-[2rem]">
      <main className="flex flex-col items-center justify-center flex-1 min-h-screen py-[4rem] px-0">
        <h1 className="text-3xl m-0 text-center">Search Database</h1>
        <div className="search">
          <input
            type="text"
            name="query"
            placeholder="Search user"
            className="border-2 border-black m-3"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </div>

        <div>
          {results?.length === 0 ? (
            <div className="text-center">
              <h1 className="text-2xl m-0 text-center">No Results</h1>
            </div>
          ) : (
            results?.map((result) => (
              <div
                className="border-2 border-black border-dashed mt-3"
                key={result.id}
              >
                {result.date} - {result.name} - {result.sickness} -{" "}
                {result.percentage}% - {result.isSick.toString()}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
