const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log("port: " + port));

app.post("/contato", (req, res) => {
  const { nome, email, menssagem } = req.body;
  const contato = {
    nome,
    email,
    menssagem,
  };
  res.status(200).send("ok");
  console.log(contato);
});
