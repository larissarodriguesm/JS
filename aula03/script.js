// const arrayNotas = [9,8,7];
// console.log(arrayNotas);

// arrayNotas.push(6);
// console.log(arrayNotas)

// const arraySalada = ['Banana', 'Laranja', 'Abacaxi', 'Manga'];
// console.log("Salada 0: ",arraySalada);

// arraySalada.push('Leite condensado');
// console.log("Salada 1: ",arraySalada);

// arraySalada.push('Leite em pó');
// console.log("Salada 2: ",arraySalada);

// const removido = arraySalada.pop();
// arraySalada.pop();
// console.log("Salada 3: ",arraySalada);
// console.log(removido);

// arraySalada.shift();
// console.log("Salada 4: ", arraySalada);

// arraySalada.unshift('Banana');
// console.log("Salada 5: ",arraySalada);

// const nomes = ["Ronier", "Larissa", "Vandecir", "Davi", "Alessandro"]

// let posicao = nomes.indexOf("Larissa");

// if(posicao === -1 ) {
//     console.log("Nome não encontrado");
// } else{
//     console.log(nomes[posicao])
// }

// function falar(parametroFala) {
//     console.log(parametroFala.toUpperCase())
// }

// function somar(p1,p2) {
//     return p1 + p2
// }

// somar(1,2)
// console.log(somar(1,2))

// const salada = ['Banana', 'Laranja', 'Abacaxi', 'Manga'];

// function capsLk(valor) {
//     return valor.toUpperCase()
// }

// const saladaUpper = salada.map((fruta)=> fruta.toUpperCase())
// console.log(salada)
// console.log(saladaUpper)

const nomes = ["Ronier", "Larissa", "Vandecir", "Davi", "Alessandro", "Davi Lima"]

function filtrarNomes(nome) {
    if(nome === "Davi")
        return nome;
}
console.log(nomes.filter(filtrarNomes))
