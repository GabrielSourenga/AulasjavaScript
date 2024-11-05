let idades = [10, 12, 40, 37, 29, 60, 19, 20, 5]

let menorIdade = idades.filter((idade) => {
    return idade <= 20
})

console.log(`${menorIdade}`);

console.log(`==============`);

let velhos = [20, 18, 70, 38, 22, 52, 10, 90]

let maiorIdade = velhos.filter((idade) => {
    return idade > 25
})

console.log(`${maiorIdade}`); 