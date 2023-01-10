// let frutas = ['a','b','c','d']
// let i;
// for(i=0; i < frutas.length ;i++) {
//     console.log(frutas[i])
// }


// for(let par = 0; par <= 20; par = par + 2) {
//     console.log(par)
// }


// const pares = []

// for(let index = 0; index <= 20; index = index + 2) {
//     pares.push(index)
// }

// console.log(pares)


// let i = 0
// while (i<2){
//     console.log("Repetindo");
//     i++;
// }


// const frutas = ['abacaxi','banana','pera','uva']

// for (const fruta of frutas) {
//     console.log(fruta)
// }

// frutas.forEach((value,index) => console.log(value, index))

// const frutasNovas = frutas.map((value) => value.toUpperCase())

// console.log(frutasNovas)


// const frutas = ['abacaxi','banana','pera','uva'];
// const frutas2 = ['maca', 'acerola'];

// const frutasNovasConcatenadas = frutas.concat(frutas2)
// console.log(frutasNovasConcatenadas)

// const endereco = ['Rua Soriano Albuquerque', '100', 'apt 6', 'Fortaleza', 'Ceará'];

// console.log(endereco.join(', '))

//Exercício 1
// const numeros = [1,2,3,4,5]
// //Retorna uma lista de números ao quadrado:
// const numerosAoQuadrado = numeros.map((value)=> value*value)

// console.log(numerosAoQuadrado)


numeros = [1,2,10,4,5];
// Retornar o maior número de numeros:
const maior = Math.max(...numeros)

console.log(maior)