class Quadrado {
  constructor(base, altura) {
    if (isNaN(base) || isNaN(altura))
      throw "Base e altura precisam ser números";
    this.base = base;
    this.altura = altura;
    this.cor = undefined;
  }
  calcularArea() {
    return this.base * this.altura;
  }
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado);

console.log(quadrado.calcularArea());
