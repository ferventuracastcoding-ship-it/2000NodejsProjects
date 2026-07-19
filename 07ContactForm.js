const express = require("express");

const app = express();
app.use(express.json());

let messages = [];

app.post("/contact", (req, res) => {
    const message = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    };

    messages.push(message);

    res.json({
        success: true,
        data: message
    });
});

app.get("/messages", (req, res) => {
    res.json(messages);
});

app.listen(3000, () => console.log("Contact API running"));
