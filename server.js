const express = require("express");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log("port: " + port));

app.post(
  "/contato",
  [
    body("nome")
      .isLength({ min: 5 })
      .withMessage("O nome precisa ter pelo menos 5 caracteres."),
    body("email").isEmail().withMessage("E-mail inválido."),
    body("menssagem")
      .isLength({ min: 10 })
      .withMessage("A menssagem precisa ter pelo menos 10 caracteres."),
  ],
  (req, res) => {
    const { nome, email, menssagem } = req.body;
    const contato = {
      nome,
      email,
      menssagem,
    };
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(200).json({ errors: errors.array() });
    }
    res.status(200).json({ msg: "Menssagem enviada!" });
    console.log(contato);
  }
);
