import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
// import App2 from "./components/App2";
// import App3 from "./components/App3";
// import App4 from "./components/App4";
// import Lista from "./components/Lista";
// import { Lista2, Item } from "./components/Lista2";
// import Formulario from "./components/Formulario";
// import Hello from "./components/Hello";
// import HookState from "./components/HookState";
import HookEfeito from "./components/HookEfeito";

ReactDOM.render(
  <React.StrictMode>
    {/* <App2 title='Titulo'>Conteúdo</App2> */}
    {/* <App2 title='Titulo2'>Conteúdo2</App2> */}
    {/* <Lista2>
      Qualquer coisa
      <Item key={10} id={10} completo={false}>
        Teste1
      </Item>
      Teste2
      <Item key={10} id={10} completo={true}>
      </Item>
    </Lista2> */}
    {/* <Formulario /> */}
    {/* <Hello>
      <h1>Hello World!</h1>
    </Hello> */}
    {/* <HookState /> */}
    <HookEfeito />
  </React.StrictMode>,
  document.getElementById("root")
);
