const express = require("express");
const app = express();
require('dotenv').config();

const port = process.env.port;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/twitter", (req, res) => {
    res.send("sparshyadav");
})

app.listen(port, () => {
    console.log(`Port is Listening at PORT: ${port}`);
})