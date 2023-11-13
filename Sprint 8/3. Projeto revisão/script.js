const produtos = {
    celulares: [
        {
            id: 1,
            nome: "iPhone 13 Pro",
            marca: "Apple",
            descricao:
                "O mais recente smartphone da Apple com câmeras avançadas e desempenho excepcional.",
            preco: 1099.99,
            caracteristicas: [
                "Tela OLED Super Retina XDR",
                "Processador A15 Bionic",
                "Câmera tripla de 12 MP",
            ],
        },
        {
            id: 2,
            nome: "Samsung Galaxy S21",
            marca: "Samsung",
            descricao:
                "Um smartphone Android poderoso com tela incrível e recursos de câmera impressionantes.",
            preco: 899.99,
            caracteristicas: [
                "Tela Dynamic AMOLED 2X",
                "Processador Exynos 2100",
                "Câmera tripla de 12 MP",
            ],
        },
        {
            id: 3,
            nome: "Google Pixel 6",
            marca: "Google",
            descricao:
                "Um smartphone Android com uma câmera excepcional e experiência pura do Android.",
            preco: 799.99,
            caracteristicas: [
                "Tela OLED 90 Hz",
                "Processador Snapdragon 870",
                "Câmera dupla de 12 MP",
            ],
        },
        {
            id: 4,
            nome: "iPhone 13 Pro",
            marca: "Apple",
            descricao:
                "Um dispositivo da Apple com câmeras avançadas e desempenho excepcional e carregamento rápido.",
            preco: 899.99,
            caracteristicas: [
                "Tela Fluid AMOLED 120 Hz",
                "Processador Snapdragon 888",
                "Câmera quádrupla de 48 MP",
            ],
        },
        {
            id: 5,
            nome: "Xiaomi Mi 11",
            marca: "Xiaomi",
            descricao:
                "Um smartphone Android com uma ótima relação custo-benefício e excelente desempenho.",
            preco: 699.99,
            caracteristicas: [
                "Tela AMOLED 120 Hz",
                "Processador Snapdragon 888",
                "Câmera tripla de 108 MP",
            ],
        },
        {
            id: 6,
            nome: "Redmi Note 11",
            marca: "Xiaomi",
            descricao:
                "Um smartphone Android premium com foco em fotografia e exibição 4K.",
            preco: 1099.99,
            caracteristicas: [
                "Tela 4K HDR OLED",
                "Processador Snapdragon 888",
                "Câmera tripla de 12 MP",
            ],
        },
        {
            id: 7,
            nome: "Huawei P40 Pro",
            marca: "Huawei",
            descricao:
                "Um smartphone Android com câmeras Leica e poderoso hardware.",
            preco: 799.99,
            caracteristicas: [
                "Tela OLED 90 Hz",
                "Processador Kirin 990",
                "Câmera quádrupla de 50 MP",
            ],
        },
        {
            id: 8,
            nome: "OnePlus Nord 2",
            marca: "OnePlus",
            descricao:
                "Um smartphone Android com desempenho sólido e preço acessível.",
            preco: 399.99,
            caracteristicas: [
                "Tela Fluid AMOLED 90 Hz",
                "Processador MediaTek Dimensity 1200",
                "Câmera tripla de 50 MP",
            ],
        },
        {
            id: 9,
            nome: "Motorola Moto G Power",
            marca: "Motorola",
            descricao:
                "Um smartphone Android com bateria de longa duração e desempenho confiável.",
            preco: 249.99,
            caracteristicas: [
                "Tela IPS LCD",
                "Processador Snapdragon 662",
                "Câmera tripla de 48 MP",
            ],
        },
        {
            id: 10,
            nome: "Asus ZenFone 8",
            marca: "Asus",
            descricao:
                "Um smartphone Android compacto com ótimo desempenho e câmeras impressionantes.",
            preco: 699.99,
            caracteristicas: [
                "Tela AMOLED 120 Hz",
                "Processador Snapdragon 888",
                "Câmera dupla de 64 MP",
            ],
        },
    ],
    televisores: [
        {
            id: 1,
            nome: "LG OLED 4K TV",
            marca: "LG",
            descricao:
                "Uma TV OLED 4K com cores vibrantes e um design elegante.",
            preco: 1499.99,
            caracteristicas: [
                "Tela OLED 4K",
                "Sistema operacional webOS",
                "4 portas HDMI",
            ],
        },
        {
            id: 2,
            nome: "Sony Bravia 4K TV",
            marca: "Sony",
            descricao:
                "Uma TV 4K com tecnologia de imagem avançada e som imersivo.",
            preco: 1299.99,
            caracteristicas: [
                "Tela LED 4K",
                "Processador X1 Ultimate",
                "Dolby Atmos",
            ],
        },
        {
            id: 3,
            nome: "Samsung QLED 8K TV",
            marca: "Samsung",
            descricao:
                "Uma TV QLED 8K com qualidade de imagem incrível e recursos inteligentes.",
            preco: 2499.99,
            caracteristicas: [
                "Tela QLED 8K",
                "Sistema operacional Tizen",
                "8 portas HDMI",
            ],
        },
        {
            id: 4,
            nome: "Sony Bravia OLED 4K TV",
            marca: "Sony",
            descricao:
                "Uma TV OLED 4K com qualidade de imagem excepcional e processador avançado.",
            preco: 1699.99,
            caracteristicas: [
                "Tela OLED 4K",
                "Processador X1 Ultimate",
                "Dolby Vision",
            ],
        },
        {
            id: 5,
            nome: "Samsung Crystal UHD 4K TV",
            marca: "Samsung",
            descricao:
                "Uma TV Crystal UHD 4K com recursos de imagem nítida e som imersivo.",
            preco: 1099.99,
            caracteristicas: [
                "Tela Crystal UHD 4K",
                "Sistema operacional Tizen",
                "4 portas HDMI",
            ],
        },
        {
            id: 6,
            nome: "LG NanoCell 4K TV",
            marca: "LG",
            descricao:
                "Uma TV NanoCell 4K com cores vivas e experiência de visualização excepcional.",
            preco: 1299.99,
            caracteristicas: [
                "Tela NanoCell 4K",
                "Sistema operacional webOS",
                "4 portas HDMI",
            ],
        },
        {
            id: 7,
            nome: "TCL 6-Series 4K TV",
            marca: "TCL",
            descricao:
                "Uma TV 4K com tecnologia Mini-LED e alto desempenho a um preço acessível.",
            preco: 799.99,
            caracteristicas: [
                "Tela Mini-LED 4K",
                "Sistema operacional Roku",
                "4 portas HDMI",
            ],
        },
        {
            id: 8,
            nome: "Vizio OLED 4K TV",
            marca: "Vizio",
            descricao:
                "Uma TV OLED 4K com pretos profundos e uma experiência cinematográfica.",
            preco: 1799.99,
            caracteristicas: [
                "Tela OLED 4K",
                "Sistema operacional SmartCast",
                "4 portas HDMI",
            ],
        },
        {
            id: 9,
            nome: "Hisense ULED 4K TV",
            marca: "Hisense",
            descricao:
                "Uma TV ULED 4K com cores vibrantes e tecnologia de escurecimento local.",
            preco: 999.99,
            caracteristicas: [
                "Tela ULED 4K",
                "Sistema operacional Vidaa U",
                "4 portas HDMI",
            ],
        },
        {
            id: 10,
            nome: "Panasonic 4K OLED TV",
            marca: "Panasonic",
            descricao:
                "Uma TV OLED 4K com qualidade de imagem excepcional e Dolby Vision.",
            preco: 1599.99,
            caracteristicas: [
                "Tela OLED 4K",
                "Sistema operacional My Home Screen 6.0",
                "4 portas HDMI",
            ],
        },
    ],
};

// Lista de marcas de celulares e tv's ----ok
// Filtro por marcas ----------------------ok
// Filtro por preço (min e max) -----------ok
// Pesquisa por características -----------ok
// Adicionar no carrinho ------------------ok
// Calcular total no carrinho -------------ok

function todosProdutos() {
    let todosProdutos = [];

    for (let i = 0; i < produtos.celulares.length; i++) {
        const produtoAtual = produtos.celulares[i];
        todosProdutos.push(produtoAtual);
    }
    for (let i = 0; i < produtos.televisores.length; i++) {
        const produtoAtual = produtos.televisores[i];
        todosProdutos.push(produtoAtual);
    }

    return todosProdutos;
}

// console.log(todosProdutos());

// const marcasCelulares = [];
// const marcasTv = [];

// function listaDeMarcas(lista) {
//     let marcas = [];

//     for (let i = 0; i < lista.length; i++) {
//         if (!marcas.includes(lista[i].marca)) {
//             marcas.push(lista[i].marca);
//         }
//     }

//     return marcas;
// }

// console.log(listaDeMarcas(produtos.televisores));

// function listaDeMarca(objeto) {
//     for (let i = 0; i < objeto.celulares.length; i++) {
//         if (!marcasCelulares.includes(objeto.celulares[i].marca)) {
//             marcasCelulares.push(objeto.celulares[i].marca);
//         }
//     }
//     for (let i = 0; i < objeto.televisores.length; i++) {
//         if (!marcasTv.includes(objeto.televisores[i].marca)) {
//             marcasTv.push(objeto.televisores[i].marca);
//         }
//     }
// }

// listaDeMarca(produtos)

// function filtroPorMarca(marca) {
//     let produtosFiltrados = [];

//     for (let i = 0; i < produtos.celulares.length; i++) {
//         let produtoAtual = produtos.celulares[i];

//         if (produtoAtual.marca.toLowerCase() === marca.toLowerCase()) {
//             produtosFiltrados.push(produtoAtual);
//         }
//     }
//     for (let i = 0; i < produtos.televisores.length; i++) {
//         let produtoAtual = produtos.televisores[i];

//         if (produtoAtual.marca.toLowerCase() === marca.toLowerCase()) {
//             produtosFiltrados.push(produtoAtual);
//         }
//     }

//     return produtosFiltrados;
// }

// console.log(filtroPorMarca("lg"))

// function filtroPorPreco(min, max) {
//     let produtosFiltrados = [];

//     let produtos = todosProdutos();

//     for (let i = 0; i < produtos.length; i++) {
//         let produtoAtual = produtos[i];

//         if (produtoAtual.preco >= min && produtoAtual.preco <= max) {
//             produtosFiltrados.push(produtoAtual);
//         }
//     }
//     if (produtosFiltrados.length === 0) {
//         return "Ops. Nenhum produto atende suas expectaticas";
//     }

//     return produtosFiltrados;
// }

// console.log(filtroPorPreco(100, 1200));

// function filtroPorCaracteristica(caracteristica) {

//     let produtosEncontrados = [];

//     let produtos = todosProdutos();

//     for (let i = 0; i < produtos.length; i++) {
//         // objeto atual no loop
//         let item = produtos[i];

//         for (let j = 0; j < item.caracteristicas.length; j++) {
//             if (
//                 item.caracteristicas[j]
//                     .toLowerCase()
//                     .includes(caracteristica.toLowerCase())
//             ) {
//                 produtosEncontrados.push(item);
//             }
//         }
//     }

//     return produtosEncontrados;
// }

// console.log(filtroPorCaracteristica("snap"));

// console.log(todosProdutos());

const carrinho = [];

function adicionarAoCarrinhoPorId(id, tipoProduto) {
    if (tipoProduto.toLowerCase() === "celulares".toLowerCase()) {
        for (let i = 0; i < produtos.celulares.length; i++) {
            let produto = produtos.celulares[i];

            if (produto.id === id) {
                carrinho.push(produto);
            }
        }
    } else if (tipoProduto.toLowerCase() === "televisores".toLowerCase()) {
        for (let i = 0; i < produtos.televisores.length; i++) {
            let produto = produtos.televisores[i];

            if (produto.id === id) {
                carrinho.push(produto);
            }
        }
    } else {
        alert("Tipo de produto não existente!");
    }
}


adicionarAoCarrinhoPorId(2, "celulares")
adicionarAoCarrinhoPorId(3, "televisores")
adicionarAoCarrinhoPorId(3, "celulares")
adicionarAoCarrinhoPorId(6, "celulares")
console.log(carrinho)

function mostrarTotal () {
    let total = 0

    for (let i = 0; i < carrinho.length; i++){
        let item = carrinho[i]
        total += item.preco
        // total = total + item.preco
    }

    total = total.toFixed(2).replace(".", ",")

    return `Valor total a pagar: R$ ${total}`
}

console.log(mostrarTotal())