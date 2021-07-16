import React from "react";
class App extends React.Component {
  render() {
    return (
      <>
        <p>Hello World!</p>
        <p>Segundo paragrafo</p>
        <p>{new Date().toLocaleDateString("pt-BR")}</p>
      </>
    );
  }
}

export default App;
