const agenda = {
  contatos: [
    { nome: "contato1", telefone: 123456789, email: "email1@teste.com" },
    { nome: "contato2", telefone: 987654321, email: "email2@teste.com" },
    { nome: "contato3", telefone: 456789123, email: "email3@teste.com" },
    { nome: "contato4", telefone: 159236478, email: "email4@teste.com" },
  ],
  adicionar: function (contato) {
    this.contatos.push(contato);
  },
};

console.log(agenda.contatos);

agenda.adicionar({
  nome: "Greg Lixandrão",
  telefone: 147852369,
  email: "greg@teste.com",
});

console.log(agenda.contatos);
