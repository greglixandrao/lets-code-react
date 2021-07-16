const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = array.filter((x) => x % 2 === 0);

/*
 * Arrow function desconstruída
 * const pares = array.filter(function(x) {return x % 2 === 0});
 */

console.log(pares);
