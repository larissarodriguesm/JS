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

// Exercício 1
// const numeros = [1,2,3,4,5]
// //Retorna uma lista de números ao quadrado:
// const numerosAoQuadrado = numeros.map((value)=> value*value)

// console.log(numerosAoQuadrado)


// numeros = [1,2,10,4,5];
// // Retornar o maior número de numeros:
// const maior = Math.max(...numeros)

// console.log(maior)


const array = [1, 2, 3, 4, 'Larissa', true, 7, 8, 9, 10]
let i;
array[array.length-1]

for(i=0; i < array.length; i++) {
    console.log(array[i])
}

array.forEach((value) => console.log(value))

const meuArrayMutante = array.map(() => 2)

    console.log(meuArrayMutante);

const numeros = meuArrayMutante.map((value) => (value) + Math.floor(Math.random()*10))

    // console.log(numeros);

for(i=0; i < numeros.length; i++) {
    const element = numeros [i];

if(element % 2 !==0) {
    console.log(element)
}

}
console.log('Questão 5c')
numeros.forEach(numero => {
    if(numero > 4){
        console.log(numero)
    }
})

console.log('Questão 6c')
const pares = numeros.filter(numero => numero % 2 === 0)
    console.log(pares)

const cores = ['verde', 'amarelo', 'laranja', 'vermelho', 'azul']

cores.forEach(cor => console.log(cor.toUpperCase()))

cores.splice(cores.indexOf('amarelo'),1)
    console.log(cores)

cores.forEach(cor => console.log(cor[0].toUpperCase() + cor.substring(1)))