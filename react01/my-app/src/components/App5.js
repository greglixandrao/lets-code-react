/* eslint-disable no-useless-constructor */
import React from "react";
class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: undefined, txtNome: "" };
  }

  changeTxtName = (event) => {
    this.setState({ txtNome: event.target.value });
  };

  componentDidMount = () => {
    const nome = sessionStorage.getItem("nome");
    if (nome) this.setState({ nome });
  };
  persistTxtName = () => {
    this.setState({ nome: this.state.txtNome });
    sessionStorage.setItem("nome", this.state.txtNome);
  };
  render() {
    const renderForm = () => {
      return (
        <>
          Nome: <input type='text' onChange={this.changeTxtName} />
          <button onClick={this.persistTxtName}>Salvar</button>
        </>
      );
    };

    const renderText = () => <p>Olá {this.state.nome}</p>;

    return !this.state.nome ? renderForm() : renderText();
  }
}

export default App5;
