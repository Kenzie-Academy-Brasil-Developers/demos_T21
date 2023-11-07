// Introdução a Objetos

// let pet = {
//     // chave: valor
//     nome: "Adalberto",
//     tipo: "gato",
//     raca: "Sphynx",
//     idade: 5,
//     vacinado: true,
//     caracteristicas: ["pelado", "maluco"],
// }

// let pet2 = ["Adalberto", "gato", "Sphynx", 5, true]

// console.log(pet)
// console.log(pet.nome)

// delete pet.tipo

// console.log(pet)

// pet.cor = "Cinza"

// pet.idade = 6

// console.log(pet)

// function criaPet(nome, tipo, raca) {

//     let pet = {
//         nome: nome,
//         tipo: tipo,
//         raca: raca
//     }

//     return pet
// }
// function criaPet(nome, tipo, raca) {

//     return {
//         nome: nome,
//         tipo: tipo,
//         raca: raca
//     }

// }

// let meuObjeto = criaPet("Frederico", "gato", "Frajola")
// let meuObjeto2 = criaPet("Mia", "gato", "Vira lata")

// console.log(meuObjeto)
// console.log(meuObjeto2)

// let pet = {
//     // chave: valor
//     nome: "Adalberto",
//     tipo: "gato",
//     raca: "Sphynx",
//     idade: 5,
//     vacinado: true,
//     caracteristicas: ["pelado", "maluco", "orelhudo", "carente"],
//     fazerAniversario: function () {
//         this.idade++
//     }
// }

// for (let i = 0; i < pet.caracteristicas.length; i++) {
//     let chaveAtual = pet.caracteristicas[i]

//     if (chaveAtual === "orelhudo") {
//         console.log("Esse gato é orelhudo!")
//     }
// }

// for (let chave in pet) {
//     console.log(chave)
//     console.log(pet[chave])

// }

// console.log(pet.fazerAniversario())
// console.log(pet.idade)

// let usuarios = [
//     {
//         nome: "Alex",
//         sobrenome: "Sakaki",
//         isAdmin: false,
//     },
//     {
//         nome: "Fulano",
//         sobrenome: "Sakaki",
//         isAdmin: false,
//     },
//     {
//         nome: "Ben",
//         sobrenome: "10",
//         isAdmin: false,
//     },
// ];

// for (let i = 0; i < usuarios.length; i++) {
//     let objetoAtual = usuarios[i];

//     if (objetoAtual.sobrenome === "Sakaki") {
//         objetoAtual.isAdmin = true;
//     }
// }

// console.log(usuarios);

