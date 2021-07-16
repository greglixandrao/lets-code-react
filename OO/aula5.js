function createQuadrado(base, altura) {
  let cor = "blue";

  return {
    base,
    altura,
    getCor: function () {
      return cor;
    },
  };
}

const quadrado = createQuadrado(3, 4);
console.log(quadrado);

console.log(quadrado.cor);

quadrado.cor = "red";
console.log(quadrado);
console.log(quadrado.cor);

console.log(quadrado.getCor());
