// ********************************Objetos*******************************

// let pet = {

//  // chave: valor

//     nome: "Adalberto",
//     tipo: "Gato",
//     raça: "Sphynx",
//     idade: 5,
//     feliz: true
// }

// console.log(pet)
// console.log(pet.nome)
// console.log(pet["tipo"])
// console.log(pet[0])

// ------Deletar uma chave (propriedade)-----

// delete pet.feliz

// console.log(pet)

// ----Criando um objeto dinâmicamente--------

// forma 1:

// function criaPet(nome, tipo, raca) {
//     let objeto = {
//         nome: nome,
//         tipo: tipo,
//         raca: raca
//     }

//     return objeto
// }

// forma 2:

// function criaPet(nome, tipo, raca) {
//    return {
//         nome: nome,
//         tipo: tipo,
//         raca: raca
//     }

// }

// let meuPet = criaPet("Frederico", "Gato", "Frajola")
// let meuPet2 = criaPet("Adalberto", "Gato", "Sphynx")

// console.log(meuPet)
// console.log(meuPet2)

// -----------Métodos de Objeto----------------
// *****Só posso usar a partir do objeto

// let pet = {

//  // chave: valor
//     nome: "Adalberto",
//     tipo: "Gato",
//     raca: "Sphynx",
//     idade: 5,
//     feliz: true,
//     caracteristicas: ["Pelado", "Brincalhão"],

//     // andar: function () {
//     //     console.log("Andou")
//     // },
//     // miar: function () {
//     //     this.andar()
//     //     console.log("Miou")
//     //     alert("Miaaaaaau")
//     // },
//     // fazerAniversario: function () {
//     //     this.idade++
//     // }
// };

// for (let key in pet) {
//     // console.log(chave)
//     // console.log(pet[chave])

// }

// pet.idade = 6

// console.log(pet)

// pet.miar() // Chamando a partir do objeto
// miar() // função não foi declarada. Só existe dentro do Objeto

// pet.fazerAniversario()

// console.log(pet)


// ------------arrays dentro de objetos-----------

// let pet = {

    //  // chave: valor
    //     nome: "Adalberto",
    //     tipo: "Gato",
    //     raca: "Sphynx",
    //     idade: 5,
    //     feliz: true,
    //     caracteristicas: ["Pelado", "Brincalhão"],
// }

// console.log(pet.caracteristicas)
// console.log(pet.caracteristicas[1])
// console.log(pet.caracteristicas.length)

// for (let i = 1; i <= 3; i++) {
//     // let atual = pet.caracteristicas[i]
//     pet.caracteristicas.push("Nova Caracteristica")

// }

// ***************Arrays de Objetos*******************

// let usuarios = [
//     {
//         nome: "Alex",
//         sobrenome: "Sakaki",
//         idade: 20,
//     },
//     {
//         nome: "Fulano",
//         sobrenome: "Ciclano",
//         idade: 30,
//     },
//     {
//         nome: "Ben",
//         sobrenome: "10",
//         idade: 63,
//     },
// ];

// console.log(usuarios)


// for (let i = 0; i < usuarios.length; i++) {
//     let objetoAtual = usuarios[i];

//     objetoAtual.isActive = true;
//     objetoAtual.isAdmin = false;
// }

// console.log(usuarios)

// for (let i = 0; i < usuarios.length; i++) {
//     // let objetoAtual = usuarios[i];

//     if (usuarios[i].nome === "Fulano") {
//         usuarios[i].isActive = false;
//     }
// }

// console.log(usuarios)


