// Arrays aninhados

// Array unidimensional

// let meuArray = [10, "Alex", true]

// Array Bidimensional

// let arrayNotas = [
//     // matematica, portugues, geografia, fisica, historia
//     [90, 55, 91, 20, 89], // aluno 1
//     [100, 98, 95, 100, 96], // aluno 2
//     [65, 78, 81, 79, 90], // aluno 3
//     [50, 49, 48, 47, 46], // aluno 4
// ];

// console.log(arrayNotas[2][2])

function listarNotas(arrayNotas) {
    for (let i = 0; i < arrayNotas.length; i++) {
        console.log(`Notas aluno: ${i + 1}`);

        console.log(arrayNotas[i]);
        console.log("Dentro do for da linha 21");

        for (let j = 0; j < arrayNotas[i].length; j++) {
            console.log(arrayNotas[i][j]);
        }
    }
}

// listarNotas(arrayNotas);

let arrayNotas = [
    [90, 55, 91, 20, 89],
    [100, 98, 95, 100, 96],
    [65, 78, 81, 79, 90],
    [50, 49, 48, 47, 46],
];

function alunoAprovado(arrayNotas) {
    for (let i = 0; i < arrayNotas.length; i++) {
        console.log(`Notas aluno: ${i + 1}`);
        let listaAtual = arrayNotas[i];
        let somaNotas = 0;
        let media = 0;

        for (let j = 0; j < listaAtual.length; j++) {
            somaNotas += listaAtual[j];
        }

        console.log(somaNotas)

        media = somaNotas / listaAtual.length;

        if (media > 80) {
            console.log(`Aluno aprovado`);
        } else {
            console.log(`Aluno reprovado`);
        }
    }
}

alunoAprovado(arrayNotas);


