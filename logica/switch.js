// let sinal = "vermelho";

// switch (sinal) {
//   case "verde":
//     console.log("pode passar");
//     break;
//   case "amarelo":
//     console.log("preste a fechar, cuidado..");
//     break;
//   case "vermelho":
//     console.log("fechado, não passe");
//     break;
//   default:
//     console.log("Sinal invalido");
// }

let hoje = new Date().getDay() - 1;
console.log(hoje);

switch (hoje) {
  case 1:
    console.log("Segunda-Feira");
    break;
  case 2:
    console.log("Terça-Feira");
    break;
  case 3:
    console.log("Quarta-Feira");
    break;
  case 4:
    console.log("Quinta-Feira");
    break;
  case 5:
    console.log("Sexta-Feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 0:
    console.log("Domingo");
}
