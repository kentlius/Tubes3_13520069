import { useState } from "react";
import axios from "axios";

export default function AddSickness() {
  const [results, setResults] = useState([]);
  const [sickness, setSickness] = useState("");
  const [dna, setDna] = useState("");
  const [isDNA, setIsDNA] = useState(false);

  return (
    <div className="py-0 px-[2rem]">
      <main className="flex flex-col items-center justify-center flex-1 min-h-screen py-[4rem] px-0">
        <h1 className="text-3xl m-0 text-center">Add Sickness</h1>
        <div>
          <p>Sickness Name:</p>
          <input
            className="border-2 border-black"
            value={sickness}
            type="text"
            name="sickness"
            placeholder="Sickness Name"
            onChange={(e) => setSickness(e.target.value)}
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
        <button
          className="border-2 border-black"
          onClick={
            isDNA
              ? async () => {
                  await axios.post(`/api/sickness`, {
                    name: sickness,
                    dna: dna,
                  });
                }
              : () => alert("File must be in DNA format")
          }
        >
          Submit
        </button>
        <button
          className="border-2 border-black"
          onClick={async () => {
            const { data } = await axios.get(`/api/sickness`);
            setResults(data.results);
          }}
        >
          Load Data
        </button>
        <div>
          {results.map((result) => {
            return (
              <div key={result.id}>
                {result.name} - {result.dna}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
