class Bebida {
    constructor (nome, sabor, tamanhos, ingredientes, temperatura, custo ){
        this.nome = nome
        this.sabor = sabor
        this.tamanhos = tamanhos
        this.ingredientes = ingredientes
        this.temperatura = temperatura
        this.custo = custo
    }
}

let bebida1 = new Bebida ('Café Termal', 'Canela', 'Médio', 'Café, Canela, Leite, Mel, Gengibre e Hortelã', 'Quente', 'R$45,00')
let bebida2 = new Bebida ('Café Espreço', 'Café', 'Pequeno e Médio', 'Café, Mel e Leite', 'Quente', 'R$10,00')
let bebida3 = new Bebida ('MilkShack de Açai', 'Açai', 'Médio e Grande', 'Açai, Paçoca, Leite Condensado, Leite em Pó, Banana e Leite', 'Frio', 'R$15,00 a R$20,00')

console.log(bebida1);
console.log('======================================================================================');
console.log(bebida2);
console.log('======================================================================================');
console.log(bebida3);