import React, { useState } from "react";
import { Button } from "reactstrap";
import axios from "axios";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [menssagem, setMenssagem] = useState("");
  const [alerta, setAlerta] = useState(false);

  const submit = async e => {
    e.preventDefault();
    axios({
      url: "/contato",
      method: "post",
      data: {
        nome,
        email,
        menssagem,
      },
    });
    setAlerta(true);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={e => setNome(e.target.value)}
          name="nome"
          placeholder="Nome"
          id="nome"
        />
        <br />
        <input
          onChange={e => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
          id="email"
        />
        <br />
        <textarea
          onChange={e => setMenssagem(e.target.value)}
          placeholder="Menssagem"
          name="menssagem"
          id="menssagem"
          cols="30"
          rows="10"
        />
        <br />
        <Button type="submit">Enviar</Button>
        {alerta ? <p>Menssagem enviada!</p> : null}
      </form>
    </div>
  );
}
