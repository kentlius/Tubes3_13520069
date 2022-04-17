// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const results = [
  {
    id: 1,
    date: "17 April 2022",
    name: "Rick Sanchez",
    sickness: "Cancer",
    percentage: 100,
    isSick: true,
  },
  {
    id: 2,
    date: "20 September 2002",
    name: "Morty Smith",
    sickness: "HIV",
    percentage: 50,
    isSick: false,
  },
  {
    id: 3,
    date: "10 January 2001",
    name: "Summer Smith",
    sickness: "AIDS",
    percentage: 75,
    isSick: true,
  },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const result = req.body;
    const newResult = {
      id: Date.now(),
      date: result.date,
      name: result.name,
      sickness: result.sickness,
      percentage: result.percentage,
      isSick: result.isSick,
    };
    results.push(newResult);
    res.status(201).json(newResult);
  } else if (req.method === "GET") {
    res.status(200).json({ results });
  }
}
