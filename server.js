const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}));

const PORT = 8800;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
});

app.post('/', (req, res) =>{
  const number1= req.body.number1;
  const number2 = req.body.number2;
  const operation = req.body.operation;
})

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`)
})