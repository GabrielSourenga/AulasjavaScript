alert(`Certo, agora vamos ver o seu IMC`)
let peso = Number (prompt(`Por favor, me diga seu peso:`))
let alt =  parseFloat(prompt(`Agora me diga sua altura, por favor`))
let imc = peso /(alt * alt) 

if (imc >= 25) {
    alert(`Seu IMC é ${imc} e você não está no intervalo saudável senhor`)
} else if (imc >= 18.5) {
    alert(`Seu IMC é ${imc} e você está saudável `)
}

