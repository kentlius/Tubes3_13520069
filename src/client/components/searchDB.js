import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function SearchDB() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users?query=${query}`
        );
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div className="py-0 px-8 bg-[#BBE3ED]">
      <main className="flex flex-col flex-1 min-h-screen py-16 px-0 items-center">
        <div className="flex flex-wrap justify-center gap-x-96">
          <h1 className="text-3xl m-0 text-center text-[#385166] font-semibold">
            Search Database
          </h1>
          <div className="flex">
            <a
              href="/sickness"
              className="mx-2 py-2 px-3 bg-[#35C5CE] rounded-3xl text-[#ffffff] drop-shadow-md"
            >
              Add Sickness
            </a>
            <a
              href="/test"
              className="mx-2 py-2 px-3 bg-[#35C5CE] rounded-3xl text-[#ffffff] drop-shadow-md"
            >
              Test DNA
            </a>
          </div>
        </div>
        <div className="flex flex-col w-9/12 bg-white drop-shadow-md rounded-[42px] my-3">
          <div className="flex justify-center gap-3">
            <Image src="/search.svg" alt="search Logo" width={16} height={16} />
            <input
              type="text"
              name="query"
              placeholder="Search user"
              className="px-3 w-10/12 h-16 bg-transparent focus:outline-none focus:bg-transparent"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </div>

          <div className="flex flex-col gap-3 mt-3 mb-12 mx-8">
            {query?.length === 0 ? (
              <div className="text-center">
                <h1 className="text-2xl m-0 text-center">No Results</h1>
              </div>
            ) : (
              results?.map((result) => (
                <div
                  className="border-2 border-black border-dashed"
                  key={result.id}
                >
                  {result.date} - {result.name} - {result.prediction} -{" "}
                  {result.percentage}% - {result.isSick.toString()}
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
