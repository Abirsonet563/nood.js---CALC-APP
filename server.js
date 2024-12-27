const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('I am ROOT ')
})

const PORT = 8800
app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`)
})