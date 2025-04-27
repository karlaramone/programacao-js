const nome = "Bili", raca = "indefinido"
let idade = 8, peso = 5

let nameUpperCase = nome.toUpperCase()
let racaFirsletter = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsletter
}

]

console.log(animal)



