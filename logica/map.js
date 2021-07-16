const array = ["10", "20", "30"];
console.log(array);

const stringToInt = (x) => parseInt(x);
const array2 = array.map(stringToInt);
console.log(array2);

const array3 = array2.map((x) => x * x);
console.log(array3);
