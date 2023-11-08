// Arrays Aninhados

// Array unidimensional
// let meuArray = [1, "string", true, {nome: "Alex"}]

// Array bidimensional
// let arrayNotas = [
//     // Matematica, quimica, fisica, portugues, história
//     [100, 45, 56, 87, 100], //aluno 1
//     [89, 87, 67, 89, 100], // aluno 2
//     [65, 98, 43, 65, 100], // aluno 3
//     [56, 87, 76, 34, 51], // aluno 4
// ];

// function listarNotas(arrayNotas) {

//     for (let i = 0; i < arrayNotas.length; i++) {

//         console.log(`Notas aluno: ${i + 1}`);

//         for (let j = 0; j < arrayNotas[i].length; j++) {

//             console.log(arrayNotas[i][j]);
//         }
//     }
// }

// listarNotas(arrayNotas);

// let arrayNotas = [
//     // Matematica, quimica, fisica, portugues, história
//     [100, 45, 56, 87, 100], //aluno 1
//     [89, 87, 67, 89, 100], // aluno 2
//     [89, 98, 67, 65, 100], // aluno 3
//     [56, 87, 76, 34, 51], // aluno 4
// ];

// function alunoAprovado(arrayNotas) {
//     for (let i = 0; i < arrayNotas.length; i++) {
//         console.log(`Notas aluno: ${i + 1}`);
//         let somaNotas = 0;
//         let media = 0;

//         for (let j = 0; j < arrayNotas[i].length; j++) {
//             somaNotas += arrayNotas[i][j];
//         }

//         console.log(somaNotas)
//         media = somaNotas / arrayNotas[i].length;
//         console.log(media, "Media")

//         if (media > 80) {
//             console.log("Aluno Aprovado");
//         } else {
//             console.log("Aluno Reprovado");
//         }
//     }
// }

// alunoAprovado(arrayNotas);


