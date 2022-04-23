import { useState } from "react";
import axios from "axios";

export default function DNATest() {
  const [results, setResults] = useState([]);
  const date = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  const [name, setName] = useState("");
  const [dna, setDna] = useState("");
  const [prediction, setPrediction] = useState("");
  const [method, setMethod] = useState("Boyer-Moore");
  const [isDNA, setIsDNA] = useState(false);

  return (
    <div className="py-0 px-[2rem]">
      <main className="flex flex-col items-center justify-center flex-1 min-h-screen py-[4rem] px-0">
        <h1 className="text-3xl m-0 text-center">DNA Test</h1>
        <div>
          <p>Full Name:</p>
          <input
            className="border-2 border-black"
            value={name}
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <p>Sequence DNA:</p>
          <input
            type="file"
            name="dna"
            accept=".txt"
            onChange={(e) => {
              const reader = new FileReader();
              reader.onload = (e) => {
                if (RegExp(/^[ATCG]+$/).test(e.target.result)) {
                  setIsDNA(true);
                  setDna(e.target.result);
                } else {
                  setIsDNA(false);
                  alert("File must be in DNA format");
                }
              };
              reader.readAsText(e.target.files[0]);
            }}
            required
          />
        </div>
        <div>
          <p>Sickness Prediction:</p>
          <input
            className="border-2 border-black"
            value={prediction}
            type="text"
            name="prediction"
            placeholder="Sickness Prediction"
            onChange={(e) => setPrediction(e.target.value)}
            required
          />
        </div>
        <input
          type="radio"
          name="method"
          value={method}
          onChange={() => setMethod("Boyer-Moore")}
        />
        <label>Booyer-Moore</label>
        <input
          type="radio"
          name="method"
          value={method}
          onChange={() => setMethod("Knuth-Morris-Pratt")}
        />
        <label>Knuth-Morris-Pratt</label>
        <button
          className="border-2 border-black"
          onClick={
            isDNA
              ? async () => {
                  await axios.post(`/api/user`, {
                    date: date,
                    name: name,
                    dna: dna,
                    prediction: prediction,
                    method: method,
                  });
                }
              : () => alert("File must be in DNA format")
          }
        >
          Submit
        </button>
        <div className="border-t-2 border-black border-dashed ">
          <h1 className="text-2xl m-0 text-center">Test Result</h1>
          <p>
            {date} - {name} - {prediction} - {method}
          </p>
        </div>
        <button
          className="border-2 border-black"
          onClick={async () => {
            const { data } = await axios.get(`/api/user`);
            setResults(data.results);
          }}
        >
          Load Data
        </button>
        <div>
          {results.map((result) => {
            return (
              <div key={result.id}>
                {result.date} - {result.name} - {result.prediction} -{" "}
                {result.percentage} - {result.isSick.toString()}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
