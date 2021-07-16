class Quadrado {
  constructor(base, altura) {
    if (isNaN(base) || isNaN(altura))
      throw "Base e altura precisam ser números!";
    this.base = base;
    this.altura = altura;
    this.cor = undefined;
  }
}

const quadrado = new Quadrado(3, 4);
quadrado.cor = "yellow";
console.log(quadrado);
