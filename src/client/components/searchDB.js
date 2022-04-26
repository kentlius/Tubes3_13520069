import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchDB() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users`
        );
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-0 px-8">
      <main className="flex flex-col flex-1 min-h-screen py-16 px-0">
        <div className="flex flex-wrap justify-around">
          <h1 className="text-3xl m-0 text-center">Search Database</h1>
          <div className="flex">
            <button className="border-2 border-black mx-2 p-1">
              <a href="/sickness">Add Sickness</a>
            </button>
            <button className="border-2 border-black p-1">
              <a href="/test">Test DNA</a>
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            name="query"
            placeholder="Search user"
            className="p-1 border-2 border-black my-3 w-9/12"
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
            results
              ?.filter((val) => {
                if (query.length == 0) {
                  return;
                } else if (
                  val.name.toLowerCase().includes(query.toLowerCase()) ||
                  val.date.toLowerCase().includes(query.toLowerCase()) ||
                  val.prediction.toLowerCase().includes(query.toLowerCase()) ||
                  val.isSick
                    .toString()
                    .toLowerCase()
                    .includes(query.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((result) => (
                <div
                  className="border-2 border-black border-dashed mt-3"
                  key={result.id}
                >
                  {result.date} - {result.name} - {result.prediction} -{" "}
                  {result.percentage}% - {result.isSick.toString()}
                </div>
              ))
          )}
        </div>
      </main>
    </div>
  );
}
