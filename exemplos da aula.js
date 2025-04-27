/**

Validador de nomes para as tags

Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar os nomes.

Aplique as formatações e exiba:
- O nome original, como foi cadastrado
- O nome formatado

Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não.

Exemplos:

  - nomes válidos
    - Pipoca
    - Guaraná
    - Paçoca
  - nomes inválidos
    - Peggy Carter
    - Pantera Negra

 */

// const nomeDog = "tH   oR@!%  "
const nomeDog = '   Ba!ley Mari@    '

let nomeFormatado = nomeDog.trim()
nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
nomeFormatado = tornarAPrimeiraLetraMaiuscula(nomeFormatado)

// const palavras = nomeFormatado.split(/\s+/);
// const palavras = nomeFormatado.split(" ");
// const valido = palavras.length === 1;

// 10 == '10'
// 10 === '10'

/*
/*

  operadores = comparacao, logica, aritmética

    VALOR A maior que VALOR B
    VALOR A menor que VALOR B

    == -> VARIAVEL A 'possui o mesmo valor que' VARIAVEL B 
    === -> VARIAVEL A 'possui o mesmo valor E possui o mesmo tipo de dado que' VARIAVEL B

*/

const valido = verificarSeONomeEValido(nomeFormatado)

console.log(nomeDog)
console.log(nomeFormatado)
console.log(valido)

function removerCaracteresEspeciais(nome) {
  // return nome.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) { 
  return nome.split(" ").length === 1
}


//Operadores

/**
  &&  - E / AND
  ||  - OU / OR
  !   - NÃO / NOT
*/

// && - E / AND
const nomeDog = "Pipoca"
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10

console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres) // true

// || - OU / OR
const dog = {
  adotado: false,
  peso: 5.3
}

console.log(dog.adotado || dog.peso < 10) // verdadeiro

console.log(true || true) // verdadeiro
console.log(true || false) // verdadeiro
console.log(false || true) // verdadeiro
console.log(false || false) // falso

// !   - NÃO / NOT

console.log(true) // verdadeiro
console.log(!true)

**
  + adição
  - subtração
  * multiplicação
  / divisão
  % resto
  ** exponencial
 */

console.log(1 + 1) // 2
console.log(10 - 7) // 3
console.log(2 * 2) // 4

console.log(11 / 2)
console.log(11 % 2)

console.log(4 ** 4)

console.log(2 + 3 * 4) //  precedencia - multiplicao, adicao
console.log((2 + 3) * 4) //  precedência - dentro do parenteses, depois o que está fora

// 3 * 4 == 12
// 12 + 2 == 14


_______________________________________
Aula 26/04

// funcao nomeada, com parametro, sem retorno
  const exibirNomeDog = (nome) => {
    console.log(nome)
  }
  // funcao nomeada, com parametro + valor default, sem retorno
 
  const exibirPorteDoDog = (porte = 'ND') => {
    console.log(porte)
  }
  
  // funcao nomeada, com parametro, com retorno

  const obterNomeDoDogFormatado = (nome) => {
    
    return nome.toUpperCase()
  }
  const listarObjetosDog = () => {
    return [{
      nome: 'Bailey Maria',
      peso: 11.5
    }, {
      nome: 'Bailey Maria',
      peso: 11.5
    }]
  }
  const listarNomesDeDogs = () => {
    const nomes = [
      'Pituca',
      'Marea',
      'Anderson'
    ]
    
    console.log(`Passou pela função listarNomesDeDogs`)
  
    return nomes
  }
  
  exibirNomeDoDog("Pipoca")
  exibirPorteDoDog()
  console.log(obterNomeDoDogFormatado("Bailey Maria"))
  console.log(obterObjetoDog())
  console.log(listarObjetosDog())
  console.log(listarNomesDeDogs())
  
  console.log(`--------`)
  
  listarNomesDeDogs()
  
  const nomesDeDogs = listarNomesDeDogs()