const calcularimc = (altura = 0, peso = 0) => {
    let imc = peso / (altura * altura)
    return imc
}

console.log(`Seu IMC é dê:${calcularimc(1.90, 70).toFixed(2)}`);