let idades = [16, 48, 23, 22, 45, 8, 12]

let maiorIdade = idades.filter((idades) => {
    return idades >= 18
})

console.log(`${maiorIdade}`);

console.log(`=================`);

idades.forEach((idades) => {
    console.log(`Sua idade é: ${idades}`);
})

