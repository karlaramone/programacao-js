const nome = "Lulu"
const idade = 4
const porte = 'P'
const idadeMinima = 2


//uma forma
const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P'
                ? 'sim'
                : 'não'

//outra forma
const adocaov2 = idade >= idadeMinima || porte === 'P'

console.log(adocao)
console.log(adocaov2)

//outra forma
function verificarSePodeSerAdotado(idade, porte){
    const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P'
                ? 'sim'
                : 'não'

    console.log(adocao)              
}

verificarSePodeSerAdotado(1, 'M')
verificarSePodeSerAdotado(2, 'M')
verificarSePodeSerAdotado(2, 'P')
verificarSePodeSerAdotado(1, 'P')