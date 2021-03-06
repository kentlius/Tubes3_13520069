import { useState } from "react";
import axios from "axios";

export default function AddSickness() {
  const [sickness, setSickness] = useState("");
  const [dna, setDna] = useState("");

  return (
    <div className="py-0 px-48 bg-[#BBE3ED] flex justify-center">
      <main className="flex flex-col flex-1 min-h-screen py-16 px-0 max-w-screen-xl">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-3xl m-0 text-center text-[#385166] font-semibold">
            Add Sickness
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
          You can add new sickness by inputting the name and the DNA file below.
        </p>
        <div className="flex flex-wrap my-6 gap-4">
          <div className="">
            <p className="font-medium">Sickness Name</p>
            <input
              className="px-3 h-10 drop-shadow-md rounded-[42px]"
              value={sickness}
              type="text"
              name="sickness"
              placeholder="Sickness Name"
              onChange={(e) => setSickness(e.target.value)}
              required
            />
          </div>

          <div className="">
            <p className="font-medium">Sequence DNA</p>
            <input
              className="drop-shadow-md"
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
        </div>
        <p>Double check the name and the file, then press submit to continue</p>
        <div className="flex">
          <button
            className="px-12 py-2 bg-[#35C5CE] rounded-3xl text-[#ffffff] drop-shadow-md"
            onClick={async () => {
              await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/sicknesses`,
                {
                  name: sickness,
                  dna: dna,
                }
              );
            }}
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}
