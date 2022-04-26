import { useState } from "react";
import axios from "axios";

export default function AddSickness() {
  const [results, setResults] = useState([]);
  const [sickness, setSickness] = useState("");
  const [dna, setDna] = useState("");
  const [isDNA, setIsDNA] = useState(false);

  return (
    <div className="py-0 px-8">
      <main className="flex flex-col justify-center flex-1 min-h-screen py-16 px-0">
        <h1 className="text-3xl m-0 text-center">Add Sickness</h1>

        <div className="flex justify-center flex-wrap my-3 gap-4">
          <div className="">
            <p>Sickness Name:</p>
            <input
              className="border-2 border-black px-1"
              value={sickness}
              type="text"
              name="sickness"
              placeholder="Sickness Name"
              onChange={(e) => setSickness(e.target.value)}
              required
            />
          </div>

          <div className="">
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
        </div>
        <div className="flex justify-center">
          <button
            className="border-2 border-black w-fit px-2"
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
        </div>
        {/* <button
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
        </div> */}
      </main>
    </div>
  );
}
