const express = require("express");

const app = express();

const quotes = [
    "Stay hungry, stay foolish.",
    "Never stop learning.",
    "Code. Test. Improve.",
    "Dream big.",
    "Practice every day."
];

app.get("/quote", (req, res) => {
    const random = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[random] });
});

app.listen(3000, () => console.log("Quote API running"));
