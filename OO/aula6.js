class Quadrado1 {
  constructor(lado, altura) {
    let cor = "blue";
    this.lado = lado;
    this.altura = altura;
    this.getCor = () => {
      return cor;
    };
    this.setCor = (c) => (cor = c);
  }
}

const quadrado1 = new Quadrado1(3, 4);
console.log(quadrado1);

console.log(quadrado1.cor);

quadrado1.setCor("red");
console.log(quadrado1.getCor());

class Quadrado2 {
  constructor(lado, altura) {
    this._cor = "blue";
    this.lado = lado;
    this.altura = altura;
  }

  get cor() {
    return this._cor;
  }
  set cor(cor) {
    this._cor = cor;
  }
}

const quadrado2 = new Quadrado2(3, 4);
console.log(quadrado2);

console.log(quadrado2.cor);

quadrado2.cor = "red";
console.log(quadrado2.cor);
