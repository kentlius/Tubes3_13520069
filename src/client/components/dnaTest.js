import { useState } from "react";
import axios from "axios";

export default function AddSickness() {
  const [results, setResults] = useState([]);
  const date = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  const [name, setName] = useState("");
  const [dna, setDna] = useState("");
  const [sickness, setSickness] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [isSick, setIsSick] = useState(false);

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
                setDna(e.target.result);
              };
              reader.readAsText(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <p>Sickness Prediction:</p>
          <input
            className="border-2 border-black"
            value={sickness}
            type="text"
            name="sickness"
            placeholder="Sickness Name"
            onChange={(e) => setSickness(e.target.value)}
          />
        </div>
        <button
          className="border-2 border-black"
          onClick={async () => {
            await axios.post(`/api/user`, {
              date: date,
              name: name,
              dna: dna,
              sickness: sickness,
              percentage: percentage,
              isSick: isSick,
            });
          }}
        >
          Submit
        </button>
        <div className="border-t-2 border-black border-dashed ">
          <h1 className="text-2xl m-0 text-center">Test Result</h1>
          <p>
            {date} - {name} - {sickness} - {percentage} - {isSick.toString()}
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
                {result.date} - {result.name} - {result.sickness} -{" "}
                {result.percentage} - {result.isSick.toString()}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
