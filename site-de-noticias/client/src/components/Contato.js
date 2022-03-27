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
    }).then(res => {
      if (res.data.errors)
        // console.log(res.data.errors[0].msg);
        setAlerta(res.data.errors[0].msg);
      // console.log(res.data.msg);
      else setAlerta(res.data.msg);
    });
  };
  return (
    <div style={{ width: "45em", margin: "15px" }}>
      <form onSubmit={submit}>
        <input
          onChange={e => setNome(e.target.value)}
          type="text"
          name="nome"
          placeholder="Nome"
          id="nome"
        />
        <br />
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          id="email"
        />
        <br />
        <textarea
          onChange={e => setMenssagem(e.target.value)}
          type="text"
          placeholder="Menssagem"
          name="menssagem"
          id="menssagem"
          cols="30"
          rows="10"
        />
        <br />
        <Button type="submit">Enviar</Button>
        {alerta ? <p>{alerta}</p> : null}
      </form>
    </div>
  );
}
