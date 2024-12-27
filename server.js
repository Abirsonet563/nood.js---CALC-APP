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
  const number1= parseFloat(req.body.number1);
  const number2 = parseFloat(req.body.number2);
  const operation = req.body.operation;

  let result;

  switch(operation) {
    case "add":
        result = number1 + number2;
        break;

    case "subtract":
        result = number1 - number2;
        break;

    case "multiply":
        result = number1 * number2;
        break;

    case "divide":
        result = number1 / number2;
        break;

        default:
            result ="Invalid Operation";
            break;    
  }
  
  res.send("<h1 style='font-size: 58px; color:blue; position:absolute; top:40%; left: 40%'>Result:" + result + "</h1>");
})

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`)
})