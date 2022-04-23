// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const results = [
  {
    id: 1,
    date: "17 April 2022",
    name: "Rick Sanchez",
    prediction: "Cancer",
    percentage: 100,
    isSick: true,
    method: "Boyer-Moore",
    dna: "ATGCTAGTC",
  },
  {
    id: 2,
    date: "20 September 2002",
    name: "Morty Smith",
    prediction: "HIV",
    percentage: 50,
    isSick: false,
    method: "Knuth-Morris-Pratt",
    dna: "ATGCTAGTC",
  },
  {
    id: 3,
    date: "10 January 2001",
    name: "Summer Smith",
    prediction: "AIDS",
    percentage: 75,
    isSick: true,
    method: "Boyer-Moore",
    dna: "ATGCTAGTC",
  },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const result = req.body;
    const newResult = {
      id: Date.now(),
      date: result.date,
      name: result.name,
      prediction: result.prediction,
      percentage: 69,
      isSick: false,
      method: result.method,
      dna: result.dna,
    };
    results.push(newResult);
    res.status(201).json(newResult);
  } else if (req.method === "GET") {
    res.status(200).json({ results });
  }
}
