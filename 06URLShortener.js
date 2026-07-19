const express = require("express");

const app = express();
app.use(express.json());

const links = {};

app.post("/shorten", (req, res) => {
    const id = Math.random().toString(36).substring(2, 8);
    links[id] = req.body.url;

    res.json({
        shortURL: `http://localhost:3000/${id}`
    });
});

app.get("/:id", (req, res) => {
    const url = links[req.params.id];

    if (!url) {
        return res.status(404).send("Not found");
    }

    res.redirect(url);
});

app.listen(3000, () => console.log("URL Shortener running"));
