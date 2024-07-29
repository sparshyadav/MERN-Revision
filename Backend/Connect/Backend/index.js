const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Server is Ready");
})

app.get("/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "This is a Joke"
        },
        {
            id: 2,
            title: "Joke 2",
            content: "This is a Joke"
        },
        {
            id: 3,
            title: "Joke 3",
            content: "This is a Joke"
        },
        {
            id: 4,
            title: "Joke 4",
            content: "This is a Joke"
        },
        {
            id: 5,
            title: "Joke 5",
            content: "This is a Joke"
        }
    ]

    res.send(jokes);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
})