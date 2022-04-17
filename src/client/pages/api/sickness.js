// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const results = [
  {
    id: 31232131,
    name: "HIV",
    dna: "ATGCGA",
  },
  {
    id: 312321312,
    name: "AIDS",
    dna: "TCGATG",
  },
  {
    id: 3123213122,
    name: "Cancer",
    dna: "CAGTGC",
  },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const result = req.body;
    const newResult = {
      id: Date.now(),
      name: result.name,
      dna: result.dna,
    };
    results.push(newResult);
    res.status(201).json(newResult);
  } else if (req.method === "GET") {
    res.status(200).json({ results });
  }
}
