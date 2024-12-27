const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("public"))

const PORT = 8800

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`)
})