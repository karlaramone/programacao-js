// alternativa 1, simplificado

const nome = "Bela"
const peso = 5
const estoque = 11000

const gramasPorDia = peso * 30
const duracaoEstoque = estoque / gramasPorDia

console.log(`Nome do dog: ${ nome }`)
console.log(`Peso do dog: ${ peso }`)
console.log(`Gramas por dia : ${ gramasPorDia }`)
console.log(`Duração estoque : ${ estoque }`)

//Alternativa 2, usando função

function calcularConsumoDeRacao(nome, peso, estoque){
    const gramasPorDia = peso * 30
    const duracaoEstoque = estoque / gramasPorDia

    console.log(`Nome do dog: ${ nome }`)
    console.log(`Peso do dog: ${ peso }`)
    console.log(`Gramas por dia : ${ gramasPorDia }`)
    console.log(`Duração estoque : ${ estoque }`)
}

//Teste
    calcularConsumoDeRacao('Bela', 1, 2000)