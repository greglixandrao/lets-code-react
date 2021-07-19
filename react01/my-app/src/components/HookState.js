import React, { useState } from "react";

export default function HookState() {
  const [nome, setNome] = useState("");

  return (
    <>
      Nome:{" "}
      <input
        type='text'
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      ></input>
      <br />
      Olá {nome}
    </>
  );
}
