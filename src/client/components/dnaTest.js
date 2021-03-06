import { useState } from "react";
import axios from "axios";

export default function DNATest() {
  const [results, setResults] = useState([]);
  const date = new Intl.DateTimeFormat("id-ID").format(new Date());
  const [name, setName] = useState("");
  const [dna, setDna] = useState("");
  const [prediction, setPrediction] = useState("");
  const [method, setMethod] = useState("Boyer-Moore");

  return (
    <div className="py-0 px-4 bg-[#BBE3ED] flex justify-center">
      <main className="flex flex-col flex-1 min-h-screen py-16 px-0 max-w-screen-xl">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-3xl m-0 text-center text-[#385166] font-semibold">
            DNA Test
          </h1>
          <div className="flex">
            <a
              href="/"
              className="py-2 px-12 bg-[#35C5CE] rounded-3xl text-[#ffffff] drop-shadow-md"
            >
              Back
            </a>
          </div>
        </div>
        <p>
          You can test a DNA by inputting the data below and check the result of
          the test.
        </p>
        <div className="flex flex-wrap my-6 gap-4">
          <div>
            <p>Full Name</p>
            <input
              className="px-3 h-10 drop-shadow-md rounded-[42px]"
              value={name}
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <p>Sickness Prediction</p>
            <input
              className="px-3 h-10 drop-shadow-md rounded-[42px]"
              value={prediction}
              type="text"
              name="prediction"
              placeholder="Sickness Prediction"
              onChange={(e) => setPrediction(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <p>Sequence DNA</p>
          <input
            type="file"
            name="dna"
            accept=".txt"
            onChange={(e) => {
              const reader = new FileReader();
              reader.onload = (e) => {
                if (RegExp(/^[ATCG]+$/).test(e.target.result)) {
                  setDna(e.target.result);
                } else {
                  setDna(e.target.result);
                  alert("File must be in DNA format");
                }
              };
              reader.readAsText(e.target.files[0]);
            }}
            required
          />
        </div>
        <div>
          <input
            type="radio"
            name="method"
            value={method}
            onChange={() => setMethod("Boyer-Moore")}
          />
          <label className="mx-1">Boyer-Moore</label>
        </div>
        <div>
          <input
            type="radio"
            name="method"
            value={method}
            onChange={() => setMethod("Knuth-Morris-Pratt")}
          />
          <label className="mx-1">Knuth-Morris-Pratt</label>
        </div>
        <div className="flex flex-wrap m-4 gap-2">
          <button
            className="px-12 py-2 bg-[#35C5CE] rounded-3xl text-[#ffffff] drop-shadow-md"
            onClick={async () => {
              await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
                date: date,
                name: name,
                dna: dna,
                prediction: prediction,
                method: method,
              });
            }}
          >
            Submit
          </button>
          <button
            className="px-12 py-2 bg-[#35C5CE] rounded-3xl text-[#ffffff] drop-shadow-md"
            onClick={async () => {
              const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/users`
              );
              setResults(data.pop());
            }}
          >
            Get Latest Result
          </button>
        </div>
        <h1 className="text-lg m-0">Test Result</h1>
        <div className="border-t-[1px] border-black ">
          <p className="my-4 mx-2">
            {results.date} - {results.name} - {results.prediction} -{" "}
            {results.method} - {results.percentage}% -{" "}
            {JSON.stringify(results.isSick)}
          </p>
          {results.percentage === -1 ? (
            <p className="my-4 mx-2">
              Sickness not found in our database. Please try another prediction.
            </p>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
}
