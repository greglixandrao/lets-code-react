const subtrair = (a, b) => a - b;
const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const calcula = (a, b, operacao) => operacao(a, b);
// Arrow function desconstruída
// const calcula = function (a, b, operacao) {
//   return operacao(a, b);
// };

let resultado = calcula(5, 3, subtrair);
console.log(resultado);

const somarX = (x) => (y) => x + y;
// Arrow function desconstruída
// const somarX = function (x) {
//   return function (y) {
//     return x + y;
//   };
// };

const somar2 = somarX(2);
const somar3 = somarX(3);
console.log(somar2(5));
console.log(somar3(5));
