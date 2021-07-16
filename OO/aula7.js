class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Cidadao extends Pessoa {
  constructor(nome, idade, cpf, rg) {
    super(nome, idade);
    this.cpf = cpf;
    this.rg = rg;
  }
}

const cidadao = new Cidadao("Greg", 35, "123456789", "987654321");

console.log(cidadao);
